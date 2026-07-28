-- Ner Shava Candles Corp. — D1 schema
-- Prices are stored in whole cents. Retail price is per retail unit
-- (the thing a shopper buys); wholesale price is per case.

DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS inquiries;
DROP TABLE IF EXISTS settings;

CREATE TABLE collections (
  slug      TEXT PRIMARY KEY,
  name      TEXT NOT NULL,
  blurb     TEXT,
  image     TEXT,
  sort      INTEGER DEFAULT 0
);

CREATE TABLE products (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  slug                  TEXT UNIQUE NOT NULL,
  name                  TEXT NOT NULL,
  collection            TEXT NOT NULL REFERENCES collections(slug),
  sku                   TEXT,
  blurb                 TEXT,
  description           TEXT,
  image                 TEXT,
  pack                  TEXT,            -- catalog pack notation, e.g. "17 x 20 pk"
  unit_label            TEXT,            -- what one retail unit is, e.g. "Box of 20"
  burn_time             TEXT,
  material              TEXT,            -- beeswax | paraffin | wick | mixed
  retail_price_cents    INTEGER DEFAULT 0,
  case_qty              INTEGER DEFAULT 1,
  wholesale_price_cents INTEGER DEFAULT 0,
  retail_active         INTEGER DEFAULT 1,
  wholesale_active      INTEGER DEFAULT 1,
  featured              INTEGER DEFAULT 0,
  sort                  INTEGER DEFAULT 0,
  created_at            TEXT DEFAULT (datetime('now'))
);
CREATE INDEX idx_products_collection ON products(collection, sort);

CREATE TABLE accounts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  business     TEXT NOT NULL,
  contact      TEXT,
  email        TEXT UNIQUE NOT NULL,
  phone        TEXT,
  city         TEXT,
  store_type   TEXT,
  notes        TEXT,
  status       TEXT DEFAULT 'pending',   -- pending | approved | rejected
  discount_pct INTEGER DEFAULT 0,        -- extra % off case price
  terms        TEXT DEFAULT 'card',      -- card | net30
  pass_hash    TEXT,
  pass_salt    TEXT,
  created_at   TEXT DEFAULT (datetime('now')),
  approved_at  TEXT
);

CREATE TABLE orders (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  code              TEXT UNIQUE NOT NULL,
  kind              TEXT DEFAULT 'retail',   -- retail | wholesale
  account_id        INTEGER REFERENCES accounts(id),
  email             TEXT,
  name              TEXT,
  phone             TEXT,
  business          TEXT,
  ship_line1        TEXT,
  ship_line2        TEXT,
  ship_city         TEXT,
  ship_state        TEXT,
  ship_zip          TEXT,
  ship_country      TEXT DEFAULT 'US',
  subtotal_cents    INTEGER DEFAULT 0,
  shipping_cents    INTEGER DEFAULT 0,
  total_cents       INTEGER DEFAULT 0,
  status            TEXT DEFAULT 'pending',  -- pending | paid | processing | shipped | cancelled
  payment_status    TEXT DEFAULT 'unpaid',   -- unpaid | paid | terms
  stripe_session_id TEXT,
  notes             TEXT,
  created_at        TEXT DEFAULT (datetime('now'))
);
CREATE INDEX idx_orders_created ON orders(created_at DESC);
CREATE INDEX idx_orders_session ON orders(stripe_session_id);

CREATE TABLE order_items (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id         INTEGER NOT NULL REFERENCES orders(id),
  product_id       INTEGER,
  name             TEXT,
  sku              TEXT,
  unit_label       TEXT,
  unit_price_cents INTEGER,
  qty              INTEGER,
  line_total_cents INTEGER
);
CREATE INDEX idx_items_order ON order_items(order_id);

CREATE TABLE inquiries (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  kind       TEXT DEFAULT 'contact',   -- contact | wholesale
  name       TEXT,
  business   TEXT,
  email      TEXT,
  phone      TEXT,
  city       TEXT,
  store_type TEXT,
  message    TEXT,
  status     TEXT DEFAULT 'New',       -- New | Replied | Closed
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE settings (
  k TEXT PRIMARY KEY,
  v TEXT
);

INSERT INTO settings (k, v) VALUES
  ('shipping_flat_cents',   '995'),
  ('free_ship_over_cents',  '7500'),
  ('wholesale_min_cents',   '25000'),
  ('store_live',            '1'),
  ('prices_provisional',    '1');
