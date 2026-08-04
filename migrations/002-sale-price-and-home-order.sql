-- Adds a sale price and a home-page position to every product.
-- Additive only — safe to run against production, unlike seed.sql.
--
--   npx wrangler d1 execute nershava --remote --file=migrations/002-sale-price-and-home-order.sql
--
-- sale_price_cents: 0 means "not on sale". Any value above 0 and below the
-- retail price becomes the price actually charged; the retail price is then
-- shown struck through beside it.
-- home_position: 1, 2, 3 … fixes the order on the home page. 0 means
-- unplaced, and unplaced products fall in after the placed ones.

ALTER TABLE products ADD COLUMN sale_price_cents INTEGER DEFAULT 0;
ALTER TABLE products ADD COLUMN home_position INTEGER DEFAULT 0;

INSERT INTO settings (k, v) VALUES ('home_columns', '4')
  ON CONFLICT(k) DO NOTHING;
INSERT INTO settings (k, v) VALUES ('show_case_pricing', '1')
  ON CONFLICT(k) DO NOTHING;
