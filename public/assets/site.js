/* Ner Shava Candles — cart, checkout and wholesale ordering.
   The cart lives in localStorage as [{slug, qty}]; every price shown is
   re-quoted by the server, so nothing here is trusted at checkout. */

(function () {
  "use strict";

  var KEY = "ns_cart";
  var money = function (c) {
    return "$" + (Math.round(c || 0) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  /* ── cart storage ─────────────────────────────────────────────────── */

  function getCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(raw)
        ? raw.filter(function (i) { return i && i.slug && i.qty > 0; })
        : [];
    } catch (e) { return []; }
  }

  function setCart(items) {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
    paintCount();
  }

  function addToCart(slug, qty) {
    var cart = getCart();
    var found = null;
    for (var i = 0; i < cart.length; i++) if (cart[i].slug === slug) found = cart[i];
    if (found) found.qty = Math.min(99, found.qty + qty);
    else cart.push({ slug: slug, qty: qty });
    setCart(cart);
  }

  function paintCount() {
    var n = getCart().reduce(function (sum, i) { return sum + i.qty; }, 0);
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.textContent = n;
      el.hidden = n === 0;
    });
  }

  /* ── toast ────────────────────────────────────────────────────────── */

  var toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.setAttribute("role", "status");
      toastEl.style.cssText =
        "position:fixed;left:50%;bottom:1.6rem;transform:translateX(-50%) translateY(1rem);" +
        "background:#3e1016;color:#faf5ea;padding:.85rem 1.4rem;border-radius:3px;" +
        "font-size:.88rem;letter-spacing:.02em;box-shadow:0 12px 32px -12px rgba(41,10,15,.5);" +
        "z-index:200;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;max-width:90vw";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(function () {
      toastEl.style.opacity = "1";
      toastEl.style.transform = "translateX(-50%) translateY(0)";
    });
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () {
      toastEl.style.opacity = "0";
      toastEl.style.transform = "translateX(-50%) translateY(1rem)";
    }, 2600);
  }

  /* ── add-to-cart wiring ───────────────────────────────────────────── */

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-add]");
    if (!btn) return;
    e.preventDefault();
    addToCart(btn.getAttribute("data-add"), 1);
    toast("Added to your cart.");
  });

  document.addEventListener("submit", function (e) {
    var form = e.target.closest("[data-add-form]");
    if (!form) return;
    e.preventDefault();
    var qty = Math.max(1, Math.min(99, parseInt(form.querySelector('[name="qty"]').value, 10) || 1));
    addToCart(form.getAttribute("data-add-form"), qty);
    toast(qty === 1 ? "Added to your cart." : qty + " added to your cart.");
  });

  /* ── mobile nav ───────────────────────────────────────────────────── */

  var burger = document.querySelector("[data-burger]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
      if (open) mobileNav.removeAttribute("data-open");
      else mobileNav.setAttribute("data-open", "");
    });
  }

  /* ── hero carousel ────────────────────────────────────────────────── */

  var hero = document.querySelector("[data-hero]");
  if (hero) {
    var slides = hero.querySelectorAll("[data-hslide]");
    var dots = hero.querySelectorAll("[data-hdot]");
    var current = 0;
    var timer = null;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(next) {
      if (next === current) return;
      slides[current].classList.remove("is-on");
      slides[current].setAttribute("aria-hidden", "true");
      var oldLink = slides[current].querySelector("a");
      if (oldLink) oldLink.setAttribute("tabindex", "-1");
      dots[current].classList.remove("is-on");
      dots[current].removeAttribute("aria-current");

      current = next;
      slides[current].classList.add("is-on");
      slides[current].removeAttribute("aria-hidden");
      var newLink = slides[current].querySelector("a");
      if (newLink) newLink.removeAttribute("tabindex");
      dots[current].classList.add("is-on");
      dots[current].setAttribute("aria-current", "true");
    }

    function start() {
      if (still || slides.length < 2) return;
      stop();
      timer = setInterval(function () { show((current + 1) % slides.length); }, 6500);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { show(i); start(); });
    });
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    hero.addEventListener("focusin", stop);
    hero.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
    start();
  }

  /* ── cart page ────────────────────────────────────────────────────── */

  var root = document.getElementById("cart-root");

  function renderCart() {
    if (!root) return;
    var items = getCart();
    if (!items.length) {
      root.className = "cart-root empty";
      root.innerHTML =
        '<p class="lede">Your cart is empty.</p>' +
        '<p class="mt"><a class="btn btn-gold" href="/candles">Browse the candles</a></p>';
      return;
    }
    root.className = "cart-root";
    root.innerHTML = '<p class="quiet">Working out your total…</p>';

    fetch("/api/cart/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: items }),
    })
      .then(function (r) { return r.json(); })
      .then(function (q) {
        if (!q.lines || !q.lines.length) { setCart([]); renderCart(); return; }

        // drop anything the server no longer sells
        var live = {};
        q.lines.forEach(function (l) { live[l.slug] = true; });
        var pruned = items.filter(function (i) { return live[i.slug]; });
        if (pruned.length !== items.length) setCart(pruned);

        var lines = q.lines.map(function (l) {
          return '<div class="cart-item">' +
            '<div class="cart-item-media"><img src="' + l.image_url +
              '" alt="" width="92" height="92"></div>' +
            '<div>' +
              '<h3><a href="/product/' + l.slug + '">' + l.name + "</a></h3>" +
              (l.unit_label ? '<div class="unit">' + l.unit_label + "</div>" : "") +
              '<div class="unit">' + money(l.unit_price_cents) + " each</div>" +
              '<div class="cart-controls">' +
                '<input type="number" min="1" max="99" value="' + l.qty +
                  '" data-qty="' + l.slug + '" inputmode="numeric" aria-label="Quantity">' +
                '<button class="cart-remove" type="button" data-remove="' + l.slug + '">Remove</button>' +
              "</div>" +
            "</div>" +
            '<div class="cart-line-total">' + money(l.line_total_cents) + "</div>" +
          "</div>";
        }).join("");

        var away = q.freeShipOver - q.subtotal;
        var shipNote = q.shipping === 0
          ? '<p class="ship-note">Shipping is on us.</p>'
          : (away > 0
            ? '<p class="ship-note">Spend ' + money(away) + " more for free shipping.</p>"
            : "");

        root.innerHTML =
          "<div>" + lines + "</div>" +
          '<aside class="cart-summary">' +
            "<h3>Order summary</h3>" +
            '<div class="order-line"><span>Subtotal</span><span>' + money(q.subtotal) + "</span></div>" +
            '<div class="order-line"><span>Shipping</span><span>' +
              (q.shipping ? money(q.shipping) : "Free") + "</span></div>" +
            '<div class="order-line total"><span>Total</span><span>' + money(q.total) + "</span></div>" +
            shipNote +
            '<button class="btn btn-gold" type="button" id="checkout">Secure checkout</button>' +
            '<p class="fineprint quiet" style="margin-top:.8rem">Card payment is handled by Stripe. ' +
              "You'll enter your shipping address on the next step.</p>" +
          "</aside>";
      })
      .catch(function () {
        root.innerHTML = '<div class="notice bad">We couldn\'t load your cart. Please refresh the page.</div>';
      });
  }

  if (root) {
    renderCart();

    root.addEventListener("change", function (e) {
      var input = e.target.closest("[data-qty]");
      if (!input) return;
      var slug = input.getAttribute("data-qty");
      var qty = Math.max(1, Math.min(99, parseInt(input.value, 10) || 1));
      var cart = getCart().map(function (i) {
        return i.slug === slug ? { slug: slug, qty: qty } : i;
      });
      setCart(cart);
      renderCart();
    });

    root.addEventListener("click", function (e) {
      var rm = e.target.closest("[data-remove]");
      if (rm) {
        var slug = rm.getAttribute("data-remove");
        setCart(getCart().filter(function (i) { return i.slug !== slug; }));
        renderCart();
        return;
      }
      var go = e.target.closest("#checkout");
      if (go) checkout(go, { items: getCart() });
    });
  }

  function checkout(btn, payload) {
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Taking you to checkout…";
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.url) { window.location.href = data.url; return; }
        toast(data.error || "We couldn't start the checkout. Please try again.");
        btn.disabled = false;
        btn.textContent = original;
      })
      .catch(function () {
        toast("Network problem — please try again.");
        btn.disabled = false;
        btn.textContent = original;
      });
  }

  /* ── wholesale order form ─────────────────────────────────────────── */

  var whForm = document.getElementById("wh-form");
  if (whForm) {
    var linesEl = document.getElementById("wh-lines");
    var totalEl = document.getElementById("wh-total");
    var minEl = document.getElementById("wh-min");
    var payBtn = document.getElementById("wh-pay");
    var termsBtn = document.getElementById("wh-terms");
    var min = (window.NS_WHOLESALE && window.NS_WHOLESALE.min) || 0;

    function whItems() {
      var out = [];
      whForm.querySelectorAll("[data-wh-qty]").forEach(function (input) {
        var qty = parseInt(input.value, 10) || 0;
        if (qty > 0) {
          var row = input.closest("tr");
          out.push({
            slug: input.getAttribute("data-wh-qty"),
            qty: qty,
            price: parseInt(input.getAttribute("data-price"), 10) || 0,
            name: row ? row.querySelector("strong").textContent : input.getAttribute("data-wh-qty"),
          });
        }
      });
      return out;
    }

    function paintWholesale() {
      var items = whItems();
      var total = items.reduce(function (n, i) { return n + i.price * i.qty; }, 0);
      linesEl.innerHTML = items.length
        ? items.map(function (i) {
            return '<div class="order-line"><span>' + i.name + " × " + i.qty +
              "</span><span>" + money(i.price * i.qty) + "</span></div>";
          }).join("")
        : '<p class="quiet">Nothing added yet.</p>';
      totalEl.textContent = money(total);
      var under = total < min;
      minEl.hidden = !under || total === 0;
      if (payBtn) payBtn.disabled = under;
      if (termsBtn) termsBtn.disabled = under;
      return items;
    }

    whForm.addEventListener("input", paintWholesale);
    paintWholesale();

    if (payBtn) payBtn.addEventListener("click", function () {
      checkout(payBtn, { items: whItems(), wholesale: true });
    });

    if (termsBtn) termsBtn.addEventListener("click", function () {
      var original = termsBtn.textContent;
      termsBtn.disabled = true;
      termsBtn.textContent = "Placing your order…";
      fetch("/api/wholesale/terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: whItems() }),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.ok) { window.location.href = "/wholesale/account?placed=" + encodeURIComponent(data.code); return; }
          toast(data.error || "We couldn't place that order.");
          termsBtn.disabled = false;
          termsBtn.textContent = original;
        })
        .catch(function () {
          toast("Network problem — please try again.");
          termsBtn.disabled = false;
          termsBtn.textContent = original;
        });
    });
  }

  paintCount();
})();
