# Ner Shava Candles Corp. — website

Retail + wholesale e-commerce for Ner Shava Candles Corp., built as a single
Cloudflare Worker with D1 for data and Stripe Checkout for card payment.

**Live:** https://nershava.avrumy95.workers.dev
**Admin:** https://nershava.avrumy95.workers.dev/admin

---

## Before this can take real orders

Four things are outstanding, all of them needing something from the client:

1. **Prices.** Every price in the catalog is a placeholder I put in so the shop
   would function. The printed catalog has no prices in it. Confirm all 36
   retail prices and case prices with the office, edit them at
   `/admin/products`, then turn off the warning banner under `/admin/settings`.
2. **Stripe keys.** Card payment is wired up but inert until the keys are set.
   Until then the checkout button returns "please call the office".
3. **Resend key.** Order confirmations and enquiry notifications are wired up
   but silently skipped until `RESEND_API_KEY` is set.
4. **Product photos.** The images are extracted from the PDF catalog — real
   product photography, but low resolution. David said he is sending better
   ones. Either upload them from `/admin/products` (stored in R2, live on
   save) or drop replacements into `public/assets/img/products/` under the
   same filenames and redeploy.

---

## Setting the secrets

```bash
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put MAIL_FROM
```

Already set: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`, `NOTIFY_EMAIL`.
The generated admin password is in `.admin-credentials.txt` (gitignored) —
change it with `npx wrangler secret put ADMIN_PASSWORD`.

### Stripe webhook

In the Stripe dashboard add an endpoint at:

```
https://nershava.avrumy95.workers.dev/api/webhooks/stripe
```

listening for `checkout.session.completed`. Copy the signing secret into
`STRIPE_WEBHOOK_SECRET`.

The order-success page also verifies the session directly with Stripe, so an
order is still marked paid if the webhook is delayed or missing — the webhook
just makes it reliable. Both paths are idempotent.

---

## Layout

```
src/worker.js              everything — routing, pages, API, admin
public/assets/site.css     all styles
public/assets/site.js      cart, checkout, wholesale order form
public/assets/img/         brand images
             products/     42 product images
schema.sql                 tables
seed.sql                   10 collections, 36 products from the printed catalog
```

Bump `ASSET_VERSION` in `src/worker.js` whenever `site.css` or `site.js`
changes — it cache-busts the asset URLs.

## Commands

```bash
npx wrangler dev --port 8789          # local, uses .dev.vars + local D1
npx wrangler deploy                   # ship it
npx wrangler d1 execute nershava --remote --file=seed.sql   # reseed catalog
```

`seed.sql` deletes and rewrites products, orders and order items — do not run
it against production once real orders exist.

---

## Yiddish edition

`?lang=yi` flips the storefront to RTL Yiddish (remembered in the
`ns_lang` cookie; toggle in the top bar). English renders first, then
`translateYi()` in `src/worker.js` rewrites the finished HTML through the
`YI` phrase table, longest phrase first. To fix or add a translation, edit
that table — anything unmapped simply stays English. Cart strings reach the
browser as `window.NS_STR`. Policy pages and the admin remain English.

## Shipping & fulfilment

### ShipStation (the route to use)

ShipStation's **Custom Store** integration — works on every ShipStation plan,
needs no API keys. Set the two secrets:

```bash
npx wrangler secret put FULFILMENT_USER
npx wrangler secret put FULFILMENT_PASS
```

then in ShipStation: **Settings → Selling Channels → Store Setup → Connect a
Store → Custom Store**, and give it

- URL: `https://nershava.avrumy95.workers.dev/api/shipstation`
- the same username and password

ShipStation then polls `?action=export` for paid, unshipped orders (XML, dates
in its documented `MM/dd/yyyy HH:mm`) and calls `?action=shipnotify` when a
label is printed — which marks the order shipped and emails the customer their
tracking. Idempotent on repeat. `/admin/settings` shows the details to paste.

Wholesale orders carry an `InternalNotes` line saying quantities are **cases**,
so nobody ships 2 boxes when a grocery ordered 2 cases of 17.

**Not** ShipStation's V1 API: it is deprecated and restricted to their higher
plans. The push in `pushToShipStation()` still works if the account has V1
access (`SHIPSTATION_KEY`/`SHIPSTATION_SECRET`), and mails the office if a push
fails, but Custom Store is the supported path.

**shop.app is not an option here.** It is Shopify's own marketplace — only
stores hosted on Shopify can be listed. Reaching it would mean rebuilding on
Shopify (~$39/mo plus per-transaction fees, and the wholesale portal would have
to be rebuilt as an app). ShipStation gets orders to the shipper without that.

### Other 3PLs

Same credentials, JSON instead of XML: `GET /api/fulfilment/orders[?since=]`
and `POST /api/fulfilment/shipped` with `{order_number, carrier,
tracking_number}`. Wholesale lines carry `"unit_of_measure": "case"`.

All of it stays inert until the secrets exist.

## How it works

**Retail.** Cart lives in `localStorage`. Every price is re-quoted server-side
at `/api/cart/quote` and again at checkout, so a tampered cart cannot change
what is charged. `/api/checkout` writes a pending order, creates a Stripe
Checkout Session and redirects; Stripe collects the address and card.

**Wholesale.** A store sends an enquiry, which files an enquiry and a *pending*
account. The office approves it at `/admin/wholesale`, sets a password, an
optional account discount and terms. The store then logs in at
`/wholesale/login` and gets a case-price order form. Accounts on "card" pay via
Stripe; accounts on Net 30 place the order on account and the office is
emailed. Freight is quoted separately and is deliberately not calculated.

**Catalog admin.** `/admin/products` filters by category and sorts by
category, name, price or newest. Products can be added, edited and deleted,
and a photo uploaded on the same form — it goes to the `nershava-media` R2
bucket and is served from `/media/<key>`. A product's `image` column is either
a filename that shipped with the build or an `r2:<key>` reference; `imageUrl()`
resolves both. `/admin/collections` adds, renames and reorders categories, and
refuses to delete one that still has products in it.

**Settings** (`/admin/settings`): flat shipping, free-shipping threshold,
wholesale minimum.

---

## Notes

- The Yessage WordPress site was left alone — Stripe on Workers covers the
  e-commerce requirement, so there was no need to reuse or delete it.
- Content and structure follow the earlier Lovable draft the client sent
  (ember-essence-site.lovable.app), rewritten and expanded.
- Brand palette (burgundy / gold / cream) and the flame emblem come from the
  company's own printed catalog cover.
- To put this on `nershava.com`, add the custom domain to the Worker in the
  Cloudflare dashboard and point DNS at it.
