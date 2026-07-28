-- Ner Shava Candles Corp. — catalog seed
-- Product names, SKUs and pack sizes come from the printed 2020 catalog.
-- PRICES ARE PROVISIONAL PLACEHOLDERS — confirm every one with the office
-- before going live. All of them are editable at /admin/products.

DELETE FROM order_items;
DELETE FROM orders;
DELETE FROM products;
DELETE FROM collections;

INSERT INTO collections (slug, name, blurb, image, sort) VALUES
 ('beeswax-shabbos','Beeswax Shabbos Candles','Made from 100% pure beeswax — handmade for the beauty of Shabbos.','beeswax-shabbos-7hr.png',1),
 ('paraffin-shabbos','Paraffin Shabbos Candles','The Ner Yufa line — handmade paraffin Shabbos candles.','paraffin-shabbos-7hr.png',2),
 ('tea-lights','Beeswax Tea Lights','Pure beeswax tea lights — a small, steady flame.','tealights.png',3),
 ('yahrtzeit','Yahrtzeit Candles','For the neshuma — a candle that burns steady and true.','yahrtzeit-7day.png',4),
 ('havdalah-chupah','Havdalah & Chupah Candles','The braided flame that carries Shabbos out — and the ones that begin a home.','havdalah-braided.png',5),
 ('lighters-tzinders','Beeswax Lighters & Tzinders','Refills, tzinders, and the small pieces that keep everything lit.','lighter-refills-lg.png',6),
 ('chanukah','Chanukah Candles','For eight nights of light — clean burning and beautifully made.','chanukah-set.png',7),
 ('pesach','Pesach Candles','Ma-Nishtanu — a candle for the Seder that lasts as long as the night.','manishtanu-large.png',8),
 ('yom-kippur','Yom Kippur Candles','A tall, steady flame for the holiest day of the year.','yomkippur-pair.png',9),
 ('wicks','Glick''s Wicks & Oil Wicks','Precision wicks that burn clean, even in a draft.','wicks-lg-25.png',10);

INSERT INTO products
 (slug,name,collection,sku,blurb,description,image,pack,unit_label,burn_time,material,
  retail_price_cents,case_qty,wholesale_price_cents,featured,sort)
VALUES
-- Beeswax Shabbos ------------------------------------------------------------
('beeswax-shabbos-7hr','7 Hour Beeswax Shabbos Candles','beeswax-shabbos','5802300101',
 'Our longest-burning beeswax Shabbos light.',
 'Hand-poured from 100% pure beeswax. Seven full hours of a clean, steady flame that will not smoke or drip — even in a draft from a window or an air conditioner. The finish is clean enough that your leichter stays beautiful week after week.',
 'beeswax-shabbos-7hr.png','17 x 20 pk','Box of 20 candles','7 hours','beeswax',1499,17,14000,1,1),

('beeswax-shabbos-5hr','5 Hour Beeswax Shabbos Candles','beeswax-shabbos','5802300102',
 'The everyday beeswax Shabbos candle.',
 'Hand-poured from 100% pure beeswax. Five hours of a beautiful natural flame — long enough for the seudah, and clean burning from the first minute to the last.',
 'beeswax-shabbos-5hr.png','21 x 20 pk','Box of 20 candles','5 hours','beeswax',1399,21,16150,1,2),

('beeswax-shabbos-4hr','4 Hour Beeswax Shabbos Candles','beeswax-shabbos','5802300103',
 'Pure beeswax, in a shorter burn.',
 'The same hand-poured 100% beeswax candle in a four-hour size. A natural elegance you cannot fake — it burns even more beautifully than the picture.',
 'beeswax-shabbos-4hr.png','27 x 20 pk','Box of 20 candles','4 hours','beeswax',1299,27,19300,0,3),

-- Paraffin Shabbos (Ner Yufa) -------------------------------------------------
('paraffin-shabbos-7hr','7 Hour Paraffin Shabbos Candles','paraffin-shabbos','5802300131',
 'Ner Yufa — handmade paraffin, seven hours.',
 'The Ner Yufa line: handmade paraffin Shabbos candles for an everyday light. Smokeless and dripless, with the same careful wick placement as our beeswax line.',
 'paraffin-shabbos-7hr.png','36 x 8 pk','Box of 8 candles','7 hours','paraffin',449,36,8900,0,1),

('paraffin-shabbos-5hr','5 Hour Paraffin Shabbos Candles','paraffin-shabbos','5802300130',
 'Ner Yufa — handmade paraffin, five hours.',
 'Handmade paraffin Shabbos candles from the Ner Yufa line. Five hours of clean, quiet light at an everyday price.',
 'paraffin-shabbos-5hr.png','72 x 8 pk','Box of 8 candles','5 hours','paraffin',399,72,15800,0,2),

('paraffin-shabbos-4hr','4 Hour Paraffin Shabbos Candles','paraffin-shabbos','5802300129',
 'Ner Yufa — handmade paraffin, four hours.',
 'The four-hour Ner Yufa paraffin Shabbos candle. Handmade, smokeless and dripless.',
 'paraffin-shabbos-4hr.png','72 x 8 pk','Box of 8 candles','4 hours','paraffin',379,72,15000,0,3),

-- Tea lights -------------------------------------------------------------------
('beeswax-tea-lights','Beeswax Tea Light Candles','tea-lights','5802300134',
 'Ten pure beeswax tea lights.',
 'Quality beeswax tea light candles — a small, steady four-hour flame. For the Shabbos table, for a yahrtzeit, or anywhere a little light is needed.',
 'tealights.png','10 x 16 pk','Pack of 16','4 hours','beeswax',699,10,3850,0,1),

-- Yahrtzeit ---------------------------------------------------------------------
('yahrtzeit-twin-26hr','1 Day (26 Hr) Twin Pack Yahrtzeit Candle','yahrtzeit','5802300104',
 'Two 26-hour lights in one pack.',
 'The original and traditional Ner Shava yahrtzeit candle, in a twin pack. Twenty-six hours of a steady, even flame in a clear glass.',
 'yahrtzeit-twin-26hr.png','2 x 18 pk','Twin pack','26 hours','beeswax',449,18,4450,0,1),

('yahrtzeit-1day','1 Day (26 Hr) Yahrtzeit Candle','yahrtzeit','5802300105',
 'A single 26-hour light.',
 'Twenty-six hours in a clear glass — the standard yahrtzeit and Yom Tov light.',
 'yahrtzeit-1day.png','36 pk','Single candle','26 hours','beeswax',229,36,4550,0,2),

('yahrtzeit-2day','2 Day (48 Hr) Yahrtzeit Candle','yahrtzeit','5802300111',
 'Forty-eight hours of steady light.',
 'For a two-day Yom Tov or a yahrtzeit that runs into Shabbos. Burns clean and even for a full forty-eight hours.',
 'yahrtzeit-2day.png','36 pk','Single candle','48 hours','beeswax',349,36,6900,0,3),

('yahrtzeit-3day','3 Day (72 Hr) Yahrtzeit Candle','yahrtzeit','5802300132',
 'Seventy-two hours in one glass.',
 'A three-day light for a long Yom Tov. One candle, seventy-two hours, no re-lighting.',
 'yahrtzeit-3day.png','12 pk','Single candle','72 hours','beeswax',499,12,3300,0,4),

('yahrtzeit-7day','7 Day Yahrtzeit Candle','yahrtzeit','5802300110',
 'A full week of light for the neshuma.',
 'Our seven-day yahrtzeit candle in a tall glass — a steady flame that carries through the whole shiva or the whole week.',
 'yahrtzeit-7day.png','12 pk','Single candle','7 days','beeswax',699,12,4600,1,5),

-- Havdalah & Chupah --------------------------------------------------------------
('havdalah','Havdalah Candles','havdalah-chupah','5802300116',
 'The braided beeswax flame.',
 'A hand-braided 100% beeswax havdalah candle. Multiple wicks braided together give the wide flame the bracha calls for.',
 'havdalah-braided.png','50 pk','Single candle',NULL,'beeswax',349,50,9600,1,1),

('havdalah-round-2pk','2 Pack Round Havdalah Candles','havdalah-chupah','5802300127',
 'Two round braided havdalah candles.',
 'Round hand-braided beeswax havdalah candles, packed two to a sleeve.',
 'havdalah-round-2pk.png','2 x 40 pk','Pack of 2',NULL,'beeswax',499,40,11000,0,2),

('havdalah-big','Big Havdalah Candle','havdalah-chupah',NULL,
 'An oversized braided havdalah candle.',
 'Our large hand-braided beeswax havdalah candle — the one for a shul, a tish, or anyone who wants the flame to be seen across the room.',
 'havdalah-big.png',NULL,'Single candle',NULL,'beeswax',899,24,11850,0,3),

('yaknehuz','Yaknehuz Candle 1-2-3','havdalah-chupah','5802300107',
 'For when Yom Tov follows Shabbos.',
 'The Yaknehuz candle, for making havdalah at the Yom Tov seudah when Yom Tov falls motzei Shabbos.',
 'yaknahuz.png','50 pk','Single candle',NULL,'beeswax',449,50,12350,0,4),

('chupah-white','2 White Chupah Havdalah Candles','havdalah-chupah','5802300128',
 'Two white candles for the chupah.',
 'A pair of white hand-braided beeswax candles for the chupah — for the ones that begin a home.',
 'chupah-white.png','2 x 18 pk','Pack of 2',NULL,'beeswax',699,18,6900,0,5),

-- Lighters & Tzinders --------------------------------------------------------------
('lighter-refills-lg','Beeswax Lighter Refills — Large','lighters-tzinders','5802300114',
 'Long beeswax lighters.',
 'Pure beeswax candle-lighter refills in the large size. They light clean and stay lit long enough to get around a whole table of leichter.',
 'lighter-refills-lg.png','4 x 50 pk','Pack of 4',NULL,'beeswax',599,50,16500,0,1),

('lighter-refills-sm','Beeswax Lighter Refills — Small','lighters-tzinders','5802300113',
 'Short beeswax lighters.',
 'The small-size beeswax candle-lighter refill, five to a pack.',
 'lighter-refills-sm.png','5 x 50 pk','Pack of 5',NULL,'beeswax',499,50,13700,0,2),

('tzinders','Tzinders','lighters-tzinders','5802300115',
 'Thin beeswax tzinders.',
 'Thin pure-beeswax tzinders — the small pieces that keep everything lit.',
 'tzinders.png','13 x 50 pk','Pack of 13',NULL,'beeswax',449,50,12350,0,3),

-- Chanukah -----------------------------------------------------------------------
('chanukah-set','Chanukah Set','chanukah','5802300125',
 'A full set for all eight nights.',
 'Pure beeswax Chanukah candles — a complete set for all eight nights, clean burning and beautifully made.',
 'chanukah-set.png','8 x 18 pk','Box','','beeswax',599,18,5950,1,1),

('chanukah-shamushim-sm','Chanukah Shamushim — Small','chanukah','5802300122',
 'One hundred small shamushim.',
 'Small beeswax shamushim, one hundred to a pack — for a shul, a cheder, or a large family.',
 'chanukah-shamushim-sm.png','100 pk','Pack of 100','','beeswax',999,12,6600,0,2),

('chanukah-shamushim-md','Chanukah Shamushim — Medium','chanukah','5802300123',
 'The medium shamash.',
 'Medium beeswax shamushim, eighteen to a pack.',
 'chanukah-shamushim-md.png','18 pk','Pack of 18','','beeswax',499,24,6600,0,3),

('chanukah-shamushim-lg','Chanukah Shamushim — Large','chanukah','5802300124',
 'The large shamash.',
 'Large beeswax shamushim, fifty to a pack.',
 'chanukah-shamushim-lg.png','50 pk','Pack of 50','','beeswax',899,12,5950,0,4),

('chanukah-kinder','Kinder Chanukah Candles','chanukah','5802300126',
 'A menorah set sized for the kinder.',
 'Ner Shava beeswax Chanukah candles in a smaller size — made for the kinder to light their own menoros.',
 'chanukah-kinder.png','44 pk','Pack of 44','','beeswax',699,24,9250,0,5),

-- Pesach ---------------------------------------------------------------------------
('manishtanu-large','Large Ma-Nishtanu Candles (14–15 Hour)','pesach','5802300112',
 'Fifteen hours — the whole Seder and past it.',
 'The large Ma-Nishtanu candle, fourteen to fifteen hours of pure beeswax light. It will outlast the Seder, however late it runs.',
 'manishtanu-large.png','2 pk','Pack of 2','14–15 hours','beeswax',599,24,7900,0,1),

('manishtanu','Ma-Nishtanu Candles (8–9 Hour)','pesach','5802300106',
 'Eight to nine hours for the Seder table.',
 'The standard Ma-Nishtanu beeswax candle — eight to nine hours of a clean, steady flame.',
 'manishtanu.png','2 pk','Pack of 2','8–9 hours','beeswax',449,24,5950,0,2),

-- Yom Kippur -------------------------------------------------------------------------
('yom-kippur-15','Yom Kippur Candle — 15 Inch','yom-kippur','5802300109',
 'Fifteen inches of steady light. Yellow or white.',
 'The Ner Shava Yom Kippur candle in the fifteen-inch size, available in yellow or white beeswax. It burns clean through the whole fast.',
 'yomkippur-white.png',NULL,'Single candle','','beeswax',599,24,7900,0,1),

('yom-kippur-28','Large Yom Kippur Candle — 28 Inch','yom-kippur','5802300108',
 'Twenty-eight inches. Yellow or white.',
 'Our largest Yom Kippur candle — twenty-eight inches of pure beeswax, available in yellow or white. Made for the shul.',
 'yomkippur-pair.png',NULL,'Single candle','','beeswax',1099,12,7250,0,2),

-- Wicks --------------------------------------------------------------------------------
('wicks-lg-25','Glick''s Wicks — Large 2½"','wicks','5802300117',
 'The best wick for oil gleyzelech.',
 'Glick''s Wicks in the large 2½" size, on a steady metal tab. Dipped so they light instantly and burn clean, without smoking up the glass.',
 'wicks-lg-25.png','40 x 24 pk','Pack of 24','','wick',499,40,11000,1,1),

('wicks-sm-25','Glick''s Wicks — Small 2½"','wicks','5802300119',
 'The small 2½" wick.',
 'Glick''s Wicks, small 2½" — the best wick for Shabbos, Yom Tov and Chanukah oil lights.',
 'wicks-sm-25.png','40 x 24 pk','Pack of 24','','wick',449,40,9900,0,2),

('wicks-lg-15','Glick''s Wicks — Large 1½"','wicks','5802300118',
 'The large 1½" wick.',
 'Glick''s Wicks in the large 1½" size. Burns clean, holds itself straight, and stays out of the oil.',
 'wicks-lg-15.png','40 x 24 pk','Pack of 24','','wick',449,40,9900,0,3),

('wicks-sm-15','Glick''s Wicks — Small 1½"','wicks','5802300120',
 'The small 1½" wick.',
 'Glick''s Wicks, small 1½" — for the smaller oil gleyzelech.',
 'wicks-sm-15.png','40 x 24 pk','Pack of 24','','wick',399,40,8800,0,4),

('wicks-xl-35','Glick''s Wicks — X-Large 3½"','wicks','5802300136',
 'The extra-large 3½" wick.',
 'The X-Large 3½" Glick''s Wick on a heavy tab — for the big gleyzelech and the shul menorah.',
 'wicks-xl-35.png','25 pk','Pack of 25','','wick',699,25,9600,0,5),

('oil-wicks-neshuma','Ner Neshuma Oil Wicks — 11 Inch','wicks','5802300133',
 'Eleven-inch oil wicks, 25 to a tube.',
 'Ner Neshuma oil wicks in the eleven-inch length, twenty-five to a tube. For yahrtzeit and neshuma lights.',
 'oil-wicks-neshuma.png','25 pk','Tube of 25','','wick',799,24,10550,0,6),

('oil-wicks-11','11 Inch Oil Wicks Dipped in Beeswax','wicks','5802300138',
 'Beeswax-dipped, so they light on the first try.',
 'Eleven-inch oil wicks dipped in pure beeswax — they take a flame immediately and burn without smoking.',
 'oil-wicks-11.png','10 pk','Pack of 10','','wick',599,24,7900,0,7);
