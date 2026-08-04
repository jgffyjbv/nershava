// Ner Shava Candles Corp. — storefront, wholesale portal and admin.
// Single Worker. D1 for data, Stripe Checkout for card payment, Resend for mail.

const BRAND = "Ner Shava Candles";
const LEGAL = "Ner Shava Candles Corp.";
const ADDRESS = "20 Industrial Drive, P.O. Box 289, Highland Mills, NY 10930";
const PHONE = "845-534-2821";
const PHONE_EXT = "845-534-2821 ext. 102";
const CELL = "845-248-3198";
const FAX = "845-534-2857";
const EMAIL = "office@nershava.com";
const TAGLINE = "The beauty of Shabbos, hand-poured.";

// Bump on every deploy that changes site.css or site.js so browsers pick it up.
const ASSET_VERSION = "16";

/* ── i18n: Yiddish ──────────────────────────────────────────────────────
   The site renders in English; for lang=yi the finished HTML goes through
   an exact-phrase translation pass (longest phrase first, escaped variants
   included), the document flips to RTL, and the cart strings are injected
   for site.js. Anything without a translation stays English rather than
   breaking. Yiddish copy uses ׳ and ״ (geresh/gershayim), never ' or ", so
   a replacement can never terminate an HTML attribute early. */

const YI = [
  ["Est. Mountainville, NY · Handmade in the USA", "מאונטענוויל, נ.י. · האנט געמאכט אין אמעריקע"],
  ["Our Candles", "אונזערע ליכט"],
  ["Our Story", "אונזער געשיכטע"],
  ["Why Ner Shava", "פארוואס נר שעוה"],
  ["Wholesale Login", "האלסעיל לאגאין"],
  ["Wholesale Inquiries", "האלסעיל אנפראגעס"],
  ["Wholesale enquiries", "האלסעיל אנפראגעס"],
  ["Wholesale login", "האלסעיל לאגאין"],
  ["Wholesale", "האלסעיל"],
  ["FAQ", "אפטע פראגעס"],
  ["Contact", "קאנטאקט"],
  ["Cart", "וואגן"],
  ["Skip to content", "שפרינגט צום אינהאלט"],
  ["Shop", "געשעפט"],
  ["Company", "פירמע"],
  ["All collections", "אלע קאלעקציעס"],
  ["All rights reserved.", "אלע רעכטן רעזערווירט."],
  ["Privacy", "פריוואטקייט"],
  ["Terms", "באדינגונגען"],
  ["Shipping &amp; Returns", "שיפינג און צוריקגאבע"],
  ["Handmade candles of 100% pure beeswax.", "האנט געמאכטע ליכט פון 100% ריינעם בינען וואקס."],
  ["Every step done by Shomrei Torah U'Mitzvos.", "יעדער טריט געטון דורך שומרי תורה ומצוות."],

  ["The Shabbos table, the way it was meant to glow.", "דער שבת טיש, אזוי ווי ער דארף שיינען."],
  ["Handmade from 100% pure beeswax — smokeless, dripless, and clean to the last hour.", "האנט געמאכט פון 100% ריינעם בינען וואקס — רויכערט נישט, טראפט נישט, און בלייבט ריין ביזן לעצטן שעה."],
  ["Shop Shabbos candles", "קויפט שבת ליכט"],
  ["100% Pure Beeswax", "100% ריינער בינען וואקס"],
  ["Smokeless & Dripless", "רויכערט נישט און טראפט נישט"],
  ["The braided flame that carries Shabbos out.", "די געפלאכטענע פלאם וואס באגלייט דעם שבת ארויס."],
  ["Hand-braided pure beeswax with the wide flame the bracha calls for — no smoke, no drips.", "האנט געפלאכטן פון ריינעם בינען וואקס, מיט די ברייטע פלאם וואס די ברכה פארלאנגט — אן רויך, אן טראפן."],
  ["Shop havdalah", "קויפט הבדלה ליכט"],
  ["Hand-Braided", "האנט געפלאכטן"],
  ["A light that burns steady and true.", "א ליכט וואס ברענט רואיג און זיכער."],
  ["Twenty-six hours, forty-eight, seventy-two — or a full week. Lit once, trusted to the end.", "זעקס און צוואנציג שעה, אכט און פערציג, צוויי און זיבעציג — אדער א גאנצע וואך. איין מאל אנגעצונדן, פארלאזלעך ביזן סוף."],
  ["Shop yahrtzeit", "קויפט יארצייט ליכט"],
  ["26 hr – 7 day", "26 שעה – 7 טעג"],
  ["Steady Glass Flame", "רואיגע פלאם אין גלאז"],

  ["Pure Beeswax", "ריינער בינען וואקס"],
  ["Handmade", "האנט געמאכט"],
  ["Shomrei", "שומרי"],
  ["Torah U'Mitzvos", "תורה ומצוות"],
  ["Since", "זינט"],
  ["Dor L'Dor", "דור לדור"],

  ["The candle is the most beautiful thing on the Shabbos table.", "דאס ליכט איז די שענסטע זאך אויפן שבת טיש."],
  ["For decades Ner Shava has been making candles the traditional way — pure beeswax, careful wicks, and a precise burn that keeps your leichter clean and your home peaceful.", "פאר צענדליגער יארן מאכט נר שעוה ליכט אויפן טראדיציאנעלן וועג — ריינער בינען וואקס, זארגפעלטיגע קנויטן, און א פונקטליכער ברען וואס האלט אייער לייכטער ריין און אייער שטוב רואיג."],
  ["We are the only candle company in the world where every step, from the raw wax to the finished box, is done by Shomrei Torah U'Mitzvos.", "מיר זענען די איינציגסטע ליכט פירמע אין די וועלט וואו יעדער טריט, פונעם רויען וואקס ביז די פארטיגע שאכטל, ווערט געטון דורך שומרי תורה ומצוות."],
  ["One who accustoms himself to light beautiful candles will merit beautiful, ehrliche children.", "דער וואס געוואוינט זיך צו צינדן שיינע ליכט וועט האבן שיינע ערליכע קינדער."],
  ["Maseches Shabbos", "מסכת שבת"],
  ["Read our story", "לייענט אונזער געשיכטע"],
  ["Our Collections", "אונזערע קאלעקציעס"],
  ["A complete range for every Yiddishe home.", "א פולער סארטימענט פאר יעדער אידישער שטוב."],
  ["From the weekly Shabbos to Yom Tov, from Havdalah to the Yahrtzeit — every candle you need, made with the same care.", "פון די וועכנטליכע שבת ליכט ביז יום טוב, פון הבדלה ביזן יארצייט — יעדעס ליכט וואס איר דארפט, געמאכט מיט די זעלבע זארג."],
  ["View collection →", "זעט די קאלעקציע ←"],
  ["View All Collections", "זעט אלע קאלעקציעס"],
  ["Most Asked For", "די מערסט געפרעגטע"],
  ["The ones on the shelf every week.", "די וואס זענען אויפן פאליצע יעדע וואך."],
  ["Browse all candles", "זעט אלע ליכט"],
  ["Six reasons your Shabbos table deserves it.", "זעקס סיבות פארוואס אייער שבת טיש פארדינט עס."],
  ["Stock the candles your customers ask for by name.", "האלט די ליכט וואס אייערע קונים פרעגן שוין ביים נאמען."],
  ["Ner Shava is carried in groceries, Judaica stores, seforim stores, mikvahs and by shamashim throughout Williamsburg, Boro Park, Monsey and Kiryas Joel. We'd love to add your shelf to that list.", "נר שעוה געפינט זיך אין גראסעריס, יודאיקא געשעפטן, ספרים געשעפטן, מקוואות און ביי שמשים איבער וויליאמסבורג, בארא פארק, מאנסי און קרית יואל. מיר וואלטן זיך געפרייט צוצולייגן אויך אייער פאליצע צו די ליסטע."],
  ["For Retailers", "פאר געשעפטן"],

  ["Frum-Made, Start to Finish", "ערליך געמאכט, פון אנפאנג ביזן סוף"],
  ["The only candle company in the world where every step is done by Shomrei Torah U'Mitzvos.", "די איינציגסטע ליכט פירמע אין די וועלט וואו יעדער טריט ווערט געטון דורך שומרי תורה ומצוות."],
  ["Made from pure beeswax — the traditional standard for a beautiful, natural flame.", "געמאכט פון ריינעם בינען וואקס — דער טראדיציאנעלער סטאנדארט פאר א שיינער נאטירליכער פלאם."],
  ["Clean-Burning Wicks", "קנויטן וואס ברענען ריין"],
  ["Our wicks don't smoke and don't drip — even in a draft from a window or an A/C vent.", "אונזערע קנויטן רויכערן נישט און טראפן נישט — אפילו ביי א ווינט פון א פענצטער אדער אן עירקאנדישאן."],
  ["Beautiful Every Time", "שיין יעדעס מאל"],
  ["A natural elegance you can't fake. It burns even more beautifully than the picture.", "א נאטירליכע שיינקייט וואס מען קען נישט נאכמאכן. עס ברענט נאך שענער ווי אויפן בילד."],
  ["Keeps Your Leichter Clean", "האלט אייער לייכטער ריין"],
  ["No mess, no residue — your leichter stays as beautiful as the flame.", "קיין שמוץ, קיין רעשטלעך — אייער לייכטער בלייבט אזוי שיין ווי די פלאם."],
  ["A Bracha from Chazal", "א ברכה פון חז״ל"],
  ["“One who accustoms himself to light beautiful candles will merit beautiful, ehrliche children” (Shabbos).", "״דער וואס געוואוינט זיך צו צינדן שיינע ליכט וועט האבן שיינע ערליכע קינדער״ (שבת)."],

  ["Beeswax Shabbos Candles", "וואקסענע שבת ליכט"],
  ["Made from 100% pure beeswax — handmade for the beauty of Shabbos.", "געמאכט פון 100% ריינעם בינען וואקס — האנט געמאכט פאר די שיינקייט פון שבת."],
  ["Paraffin Shabbos Candles", "פאראפין שבת ליכט"],
  ["The Ner Yufa line — handmade paraffin Shabbos candles.", "די נר יפה ליניע — האנט געמאכטע פאראפין שבת ליכט."],
  ["Beeswax Tea Lights", "וואקסענע טי לייטס"],
  ["Pure beeswax tea lights — a small, steady flame.", "ריינע בינען וואקס טי לייטס — א קליינע רואיגע פלאם."],
  ["Yahrtzeit Candles", "יארצייט ליכט"],
  ["For the neshuma — a candle that burns steady and true.", "פאר די נשמה — א ליכט וואס ברענט רואיג און טריי."],
  ["Havdalah & Chupah Candles", "הבדלה און חופה ליכט"],
  ["The braided flame that carries Shabbos out — and the ones that begin a home.", "די געפלאכטענע פלאם וואס באגלייט דעם שבת ארויס — און די וואס הייבן אן א שטוב."],
  ["Beeswax Lighters & Tzinders", "ליכט אנצינדערס און צינדערס"],
  ["Refills, tzinders, and the small pieces that keep everything lit.", "ריפילס, צינדערס, און די קליינע זאכן וואס האלטן אלעס ברענענדיג."],
  ["Chanukah Candles", "חנוכה ליכט"],
  ["For eight nights of light — clean burning and beautifully made.", "פאר אכט נעכט ליכטיגקייט — ברענט ריין און שיין געמאכט."],
  ["Pesach Candles", "פסח ליכט"],
  ["Ma-Nishtanu — a candle for the Seder that lasts as long as the night.", "מה נשתנה — א ליכט פארן סדר וואס האלט אזוי לאנג ווי די נאכט."],
  ["Yom Kippur Candles", "יום כיפור ליכט"],
  ["A tall, steady flame for the holiest day of the year.", "א הויכע רואיגע פלאם פארן הייליגסטן טאג פון יאר."],
  ["Glick's Wicks & Oil Wicks", "גליקס וויקס און אויל קנויטן"],
  ["Precision wicks that burn clean, even in a draft.", "פונקטליכע קנויטן וואס ברענען ריין, אפילו אין א ווינט."],
  ["Glick's Wicks", "גליקס וויקס"],
  ["Paraffin Shabbos", "פאראפין שבת"],
  ["Beeswax Shabbos", "וואקסענע שבת"],
  ["Yahrtzeit", "יארצייט"],
  ["Havdalah & Chupah", "הבדלה און חופה"],
  ["Chanukah", "חנוכה"],

  ["Ten collections, each made with the same care.", "צען קאלעקציעס, יעדע געמאכט מיט די זעלבע זארג."],
  ["Every candle Ner Shava makes — organised so you can find what your table, your shul or your customers need.", "יעדעס ליכט וואס נר שעוה מאכט — סדר׳דיג צוגעשטעלט איר זאלט טרעפן וואס אייער טיש, אייער שול אדער אייערע קונים דארפן."],
  // NOTE: never add a bare lowercase word that can occur inside a URL, slug
  // or class name (e.g. "product", "cart") — the phrase pass would rewrite
  // those too. The "N products" count label is handled by regex in
  // translateYi() instead.
  ["Add to cart", "לייגט אריין אין וואגן"],
  ["Add", "לייגט אריין"],
  ["Qty", "צאל"],
  ["Item number", "ארטיקל נומער"],
  ["Pack", "פעקל"],
  ["Burn time", "ברען צייט"],
  ["Material", "מאטעריאל"],
  ["Case", "קעיס"],
  ["100% pure beeswax", "100% ריינער בינען וואקס"],
  ["Handmade paraffin", "האנט געמאכטער פאראפין"],
  ["Beeswax-dipped wick", "קנויט געטונקען אין בינען וואקס"],
  [" per case", " אין א קעיס"],
  ["Buying for a store?", "קויפט איר פאר א געשעפט?"],
  ["Case pricing is available to wholesale accounts.", "קעיס פרייזן זענען דא פאר האלסעיל קאנטעס."],
  ["More from ", "נאך פון "],

  ["Box of 20 candles", "שאכטל פון 20 ליכט"],
  ["Box of 8 candles", "שאכטל פון 8 ליכט"],
  ["Pack of 100", "פעקל פון 100"],
  ["Pack of 16", "פעקל פון 16"],
  ["Pack of 18", "פעקל פון 18"],
  ["Pack of 50", "פעקל פון 50"],
  ["Pack of 44", "פעקל פון 44"],
  ["Pack of 24", "פעקל פון 24"],
  ["Pack of 25", "פעקל פון 25"],
  ["Tube of 25", "רערל פון 25"],
  ["Pack of 10", "פעקל פון 10"],
  ["Pack of 13", "פעקל פון 13"],
  ["Pack of 2", "פעקל פון 2"],
  ["Pack of 4", "פעקל פון 4"],
  ["Pack of 5", "פעקל פון 5"],
  ["Twin pack", "צווילינג פעקל"],
  ["Single candle", "איין ליכט"],
  ["26 hours", "26 שעה"],
  ["48 hours", "48 שעה"],
  ["72 hours", "72 שעה"],
  ["7 days", "7 טעג"],
  ["7 hours", "7 שעה"],
  ["5 hours", "5 שעה"],
  ["4 hours", "4 שעה"],
  ["8–9 hours", "8–9 שעה"],
  ["14–15 hours", "14–15 שעה"],

  ["7 Hour Beeswax Shabbos Candles", "7 שעה וואקסענע שבת ליכט"],
  ["5 Hour Beeswax Shabbos Candles", "5 שעה וואקסענע שבת ליכט"],
  ["4 Hour Beeswax Shabbos Candles", "4 שעה וואקסענע שבת ליכט"],
  ["7 Hour Paraffin Shabbos Candles", "7 שעה פאראפין שבת ליכט"],
  ["5 Hour Paraffin Shabbos Candles", "5 שעה פאראפין שבת ליכט"],
  ["4 Hour Paraffin Shabbos Candles", "4 שעה פאראפין שבת ליכט"],
  ["Beeswax Tea Light Candles", "וואקסענע טי לייט ליכט"],
  ["1 Day (26 Hr) Twin Pack Yahrtzeit Candle", "1 טאג (26 שעה) צווילינג פעקל יארצייט ליכט"],
  ["1 Day (26 Hr) Yahrtzeit Candle", "1 טאג (26 שעה) יארצייט ליכט"],
  ["2 Day (48 Hr) Yahrtzeit Candle", "2 טעג (48 שעה) יארצייט ליכט"],
  ["3 Day (72 Hr) Yahrtzeit Candle", "3 טעג (72 שעה) יארצייט ליכט"],
  ["7 Day Yahrtzeit Candle", "7 טעג יארצייט ליכט"],
  ["Havdalah Candles", "הבדלה ליכט"],
  ["2 Pack Round Havdalah Candles", "2 פעקל רונדע הבדלה ליכט"],
  ["Big Havdalah Candle", "גרויסע הבדלה ליכט"],
  ["Yaknehuz Candle 1-2-3", "יקנה״ז ליכט 1-2-3"],
  ["2 White Chupah Havdalah Candles", "2 ווייסע חופה הבדלה ליכט"],
  ["Beeswax Lighter Refills — Large", "ליכט אנצינדער ריפילס — גרויס"],
  ["Beeswax Lighter Refills — Small", "ליכט אנצינדער ריפילס — קליין"],
  ["Tzinders", "צינדערס"],
  ["Chanukah Set", "חנוכה סעט"],
  ["Chanukah Shamushim — Small", "חנוכה שמשים — קליין"],
  ["Chanukah Shamushim — Medium", "חנוכה שמשים — מיטל"],
  ["Chanukah Shamushim — Large", "חנוכה שמשים — גרויס"],
  ["Kinder Chanukah Candles", "קינדער חנוכה ליכט"],
  ["Large Ma-Nishtanu Candles (14–15 Hour)", "גרויסע מה נשתנה ליכט (14–15 שעה)"],
  ["Ma-Nishtanu Candles (8–9 Hour)", "מה נשתנה ליכט (8–9 שעה)"],
  ["Yom Kippur Candle — 15 Inch", "יום כיפור ליכט — 15 אינטש"],
  ["Large Yom Kippur Candle — 28 Inch", "גרויסע יום כיפור ליכט — 28 אינטש"],
  ["Ner Neshuma Oil Wicks — 11 Inch", "נר נשמה אויל קנויטן — 11 אינטש"],
  ["11 Inch Oil Wicks Dipped in Beeswax", "11 אינטש אויל קנויטן געטונקען אין בינען וואקס"],

  ["The candle came first. Then everything else.", "דאס ליכט איז געקומען צוערשט. דערנאך אלעס אנדערש."],
  ["Ner Shava was built around a simple conviction: the candle is the most beautiful thing on the Shabbos table. When you light the ner Shabbos it brightens the whole room — and it brings an oneg to Shabbos and Yom Tov that nothing else can.", "נר שעוה איז געבויט געווארן ארום איין פשוטער איבערצייגונג: דאס ליכט איז די שענסטע זאך אויפן שבת טיש. ווען איר צינדט די שבת ליכט ווערט ליכטיג די גאנצע שטוב — און עס ברענגט אן עונג שבת ויום טוב וואס גארנישט אנדערש קען."],
  ["So we set out to make a candle worthy of that moment. Pure beeswax, hand-poured. Wicks that burn steady and don't smoke or drip. A finish so clean your leichter stays beautiful, week after week.", "האבן מיר זיך גענומען מאכן א ליכט וואס איז ווערד דעם מאמענט. ריינער בינען וואקס, האנט געגאסן. קנויטן וואס ברענען רואיג און רויכערן נישט און טראפן נישט. אזוי ריין אז אייער לייכטער בלייבט שיין, וואך נאך וואך."],
  ["From day one we made a decision that quietly shaped everything: every step of the work — from the raw wax to the finished box — is done by Shomrei Torah U'Mitzvos. We are, as far as we know, the only candle company in the world where this is true. It is why our candles are the ones you see on so many Shabbos tables in Williamsburg, Boro Park, Monsey and Kiryas Joel.", "פון ערשטן טאג האבן מיר געמאכט א באשלוס וואס האט שטיל געפורעמט אלעס: יעדער טריט פון די ארבעט — פונעם רויען וואקס ביז די פארטיגע שאכטל — ווערט געטון דורך שומרי תורה ומצוות. מיר זענען, וויפיל מיר ווייסן, די איינציגסטע ליכט פירמע אין די וועלט וואו דאס איז אמת. דאס איז פארוואס אונזערע ליכט זענען די וואס איר זעט אויף אזויפיל שבת טישן אין וויליאמסבורג, בארא פארק, מאנסי און קרית יואל."],
  ["The Craft", "די מלאכה"],
  ["Hand-poured. On purpose.", "האנט געגאסן. בכוונה."],
  ["We could go faster. We choose not to. Every candle in our beeswax and paraffin Shabbos lines is handmade, so the finish, the wick placement and the burn quality are exactly what they should be.", "מיר וואלטן געקענט גיין שנעלער. מיר קלויבן אויס נישט. יעדעס ליכט אין אונזערע וואקס און פאראפין שבת ליניעס איז האנט געמאכט, אז די אויסארבעטונג, די פלאצירונג פונעם קנויט און די קוואליטעט פונעם ברען זאלן זיין פונקט ווי זיי דארפן זיין."],
  ["It's a slower way to make a candle. It's the reason our customers keep coming back.", "עס איז א פאמעליכערער וועג צו מאכן א ליכט. עס איז די סיבה פארוואס אונזערע קונים קומען אלץ צוריק."],
  ["The Promise", "די הבטחה"],
  ["One brand, one promise.", "איין פירמע, איין הבטחה."],
  ["When a Yiddishe mama or tatte walks into a store and sees the Ner Shava box on the shelf, we want one thought to come to mind: ", "ווען א אידישע מאמע אדער טאטע גייט אריין אין געשעפט און זעט די נר שעוה שאכטל אויפן פאליצע, ווילן מיר אז איין געדאנק זאל קומען אין זינען: "],
  ["That's what we've quietly built, candle by candle, Shabbos by Shabbos, for years.", "דאס איז וואס מיר האבן שטיל געבויט, ליכט נאך ליכט, שבת נאך שבת, פאר יארן."],
  ["Browse our candles", "זעט אונזערע ליכט"],
  ["Get in touch", "פארבינדט אייך מיט אונז"],

  ["Every one of these is the reason a family switches to Ner Shava — and the reason they don't switch back.", "יעדע איינע פון די איז די סיבה פארוואס א משפחה בייט זיך איבער צו נר שעוה — און די סיבה פארוואס זיי בייטן זיך נישט צוריק."],
  ["Ahh… it is Shabbos in the world… lit up with Ner Shava.", "אַהה… עס איז שבת אין די וועלט… באלויכטן מיט נר שעוה."],
  ["Shop the candles", "קויפט די ליכט"],

  ["Frequently Asked", "אפטע פראגעס"],
  ["Everything you might want to know.", "אלעס וואס איר קענט ווילן וויסן."],
  ["What is Ner Shava made from?", "פון וואס איז נר שעוה געמאכט?"],
  ["Our signature Shabbos line, tea lights, Yahrtzeit, Havdalah, Chanukah, Pesach and Yom Kippur candles are made from 100% pure beeswax. We also make a handmade paraffin Shabbos line — Ner Yufa — as an everyday option.", "אונזערע שבת ליכט, טי לייטס, יארצייט, הבדלה, חנוכה, פסח און יום כיפור ליכט זענען געמאכט פון 100% ריינעם בינען וואקס. מיר מאכן אויך א האנט געמאכטע פאראפין שבת ליניע — נר יפה — אלס א וואכנדיגע אפציע."],
  ["Why beeswax instead of paraffin?", "פארוואס בינען וואקס און נישט פאראפין?"],
  ["Beeswax burns with a warmer, more natural light, it holds its shape, and it leaves your leichter clean. It is also the traditional choice — a ner shel shaava is what the name Ner Shava means.", "בינען וואקס ברענט מיט א ווארעמערער, נאטירליכערער ליכט, עס האלט זיין פארעם, און עס לאזט אייער לייכטער ריין. עס איז אויך די טראדיציאנעלע ברירה — א נר של שעוה איז דאך וואס דער נאמען נר שעוה מיינט."],
  ["How long do the candles burn?", "וויפיל שעה ברענען די ליכט?"],
  ["Our Shabbos candles come in four, five and seven hour burns. Yahrtzeit candles run 26 hours, 48 hours, 72 hours or a full seven days. Ma-Nishtanu Seder candles burn 8–9 hours, or 14–15 hours in the large size.", "אונזערע שבת ליכט קומען אין פיר, פינף און זיבן שעה. יארצייט ליכט ברענען 26 שעה, 48 שעה, 72 שעה אדער פולע זיבן טעג. מה נשתנה סדר ליכט ברענען 8–9 שעה, אדער 14–15 שעה אין די גרויסע גרייס."],
  ["Do the candles drip or smoke?", "טראפן אדער רויכערן די ליכט?"],
  ["No. Our wicks are chosen and placed so the candle burns clean and stays put — even in a draft from an open window or an air-conditioning vent.", "ניין. אונזערע קנויטן זענען אויסגעקליבן און אריינגעשטעלט אז דאס ליכט זאל ברענען ריין און בלייבן שטיין — אפילו ביי א ווינט פון אן אפענעם פענצטער אדער אן עירקאנדישאן."],
  ["Where are Ner Shava candles made?", "וואו ווערן נר שעוה ליכט געמאכט?"],
  ["In Mountainville, New York. Every step of production, from raw wax to finished box, is done here by Shomrei Torah U'Mitzvos.", "אין מאונטענוויל, ניו יארק. יעדער טריט פון די פראדוקציע, פון רויען וואקס ביז פארטיגע שאכטל, ווערט דא געטון דורך שומרי תורה ומצוות."],
  ["Where can I buy Ner Shava candles?", "וואו קען איך קויפן נר שעוה ליכט?"],
  ["In groceries, Judaica stores, seforim stores and mikvahs throughout Williamsburg, Boro Park, Monsey and Kiryas Joel — and now directly from us on this site.", "אין גראסעריס, יודאיקא געשעפטן, ספרים געשעפטן און מקוואות איבער וויליאמסבורג, בארא פארק, מאנסי און קרית יואל — און יעצט אויך דירעקט פון אונז דא אויפן וועבזייטל."],
  ["Do you sell direct to consumers online?", "פארקויפט איר דירעקט צו קונים אנליין?"],
  ["Yes. Everything in our catalog can be ordered here and shipped to your door. Orders are packed and dispatched from Mountainville.", "יא. אלעס אין אונזער קאטאלאג קען מען דא באשטעלן און עס ווערט געשיקט צו אייער טיר. באשטעלונגען ווערן געפאקט און געשיקט פון מאונטענוויל."],
  ["Do you offer wholesale?", "האט איר האלסעיל?"],
  ["Yes. If you run a store we'd love to hear from you. Send a wholesale enquiry and we'll set up an account with case pricing and terms.", "יא. אויב איר פירט א געשעפט וואלטן מיר זיך געפרייט צו הערן פון אייך. שיקט אריין א האלסעיל אנפראגע און מיר וועלן אויפשטעלן א קאנטע מיט קעיס פרייזן און באדינגונגען."],
  ["Are your candles under hashgacha?", "זענען אייערע ליכט אונטער השגחה?"],
  ["Every step of production is done by Shomrei Torah U'Mitzvos. For any specific hashgacha question please call the office at 845-534-2821.", "יעדער טריט פון די פראדוקציע ווערט געטון דורך שומרי תורה ומצוות. פאר סיי וועלכע ספעציפישע השגחה פראגע רופט ביטע דעם אפיס אויף 845-534-2821."],
  ["Still have a question? Call ", "האט איר נאך א פראגע? רופט "],
  [" or email ", " אדער שרייבט צו "],

  ["Carry the candles your customers already trust.", "פארקויפט די ליכט וואס אייערע קונים געטרויען שוין."],
  ["Ner Shava is carried in groceries, Judaica stores, seforim stores, mikvahs and by shamashim in Williamsburg, Boro Park, Monsey and Kiryas Joel. If you'd like to stock our full line, we'd love to hear from you.", "נר שעוה געפינט זיך אין גראסעריס, יודאיקא געשעפטן, ספרים געשעפטן, מקוואות און ביי שמשים אין וויליאמסבורג, בארא פארק, מאנסי און קרית יואל. אויב איר ווילט האלטן אונזער פולע ליניע, וואלטן מיר זיך געפרייט צו הערן פון אייך."],
  ["Why partner with us", "פארוואס מיט אונז"],
  ["A shelf presence you don't have to sell.", "א פאליצע וואס פארקויפט זיך אליין."],
  ["Recognised name", "אן אנערקענטער נאמען"],
  ["Yiddishe families recognise the Ner Shava box on sight — the brand does the selling for you.", "אידישע משפחות דערקענען די נר שעוה שאכטל פון ווייטן — דער נאמען פארקויפט פאר אייך."],
  ["Full-year line", "א פולע יאר ליניע"],
  ["Weekly Shabbos, Yahrtzeit, Havdalah, Chanukah, Pesach, Yom Kippur — one supplier, ten collections.", "וועכנטליכע שבת, יארצייט, הבדלה, חנוכה, פסח, יום כיפור — איין צושטעלער, צען קאלעקציעס."],
  ["Consistent quality", "שטענדיגע קוואליטעט"],
  ["Handmade and hand-checked. Fewer complaints, fewer returns.", "האנט געמאכט און האנט איבערגעקוקט. ווייניגער קלאגעס, ווייניגער צוריקגאבעס."],
  ["Frum-owned & produced", "ערליך פארמאגט און פראדוצירט"],
  ["The only candle company where every step of production is done by Shomrei Torah U'Mitzvos.", "די איינציגסטע ליכט פירמע וואו יעדער טריט פון די פראדוקציע ווערט געטון דורך שומרי תורה ומצוות."],
  ["How an account works", "ווי אזוי א קאנטע ארבעט"],
  ["Send the enquiry.", "שיקט אריין די אנפראגע."],
  ["Tell us about your store and what you'd like to carry.", "דערציילט אונז וועגן אייער געשעפט און וואס איר ווילט האלטן."],
  ["We set up your account.", "מיר שטעלן אויף אייער קאנטע."],
  ["The office confirms case pricing and terms with you directly.", "דער אפיס באשטעטיגט קעיס פרייזן און באדינגונגען מיט אייך דירעקט."],
  ["Order online, any time.", "באשטעלט אנליין, ווען איר ווילט."],
  ["You get a login here with your case prices, your order history and re-ordering in a few clicks.", "איר באקומט דא א לאגאין מיט אייערע קעיס פרייזן, אייער באשטעלונג היסטאריע און איבער־באשטעלן אין עטליכע קליקס."],
  ["Already have an account?", "האט איר שוין א קאנטע?"],
  ["Log in to order", "לאגט אריין צו באשטעלן"],
  ["Prefer to call?", "בעסער צו רופן?"],
  ["or email", "אדער שרייבט צו"],
  ["Wholesale enquiry", "האלסעיל אנפראגע"],
  ["Tell us about your store and we'll be in touch.", "דערציילט אונז וועגן אייער געשעפט און מיר וועלן זיך פארבינדן."],
  ["Business name", "ביזנעס נאמען"],
  ["Your name", "אייער נאמען"],
  ["Phone", "טעלעפאן"],
  ["Email", "אימעיל"],
  ["City / area", "שטאט / געגנט"],
  ["Type of store", "סארט געשעפט"],
  ["Choose…", "קלויבט אויס…"],
  ["Grocery", "גראסערי"],
  ["Judaica store", "יודאיקא געשעפט"],
  ["Seforim store", "ספרים געשעפט"],
  ["Mikvah", "מקוה"],
  ["Shul / shamash", "שול / שמש"],
  ["Distributor", "פארשפרייטער"],
  ["Other", "אנדערש"],
  ["What would you like to carry?", "וואס ווילט איר האלטן?"],
  ["Send enquiry", "שיקט די אנפראגע"],
  ["By submitting, you agree we may contact you regarding your wholesale enquiry.", "מיטן אריינשיקן זענט איר מסכים אז מיר מעגן זיך פארבינדן מיט אייך וועגן אייער האלסעיל אנפראגע."],
  ["Thank you.", "א דאנק."],
  ["Your enquiry is with the office — we'll be in touch to set up your account.", "אייער אנפראגע איז ביים אפיס — מיר וועלן זיך פארבינדן אויפצושטעלן אייער קאנטע."],

  ["We'd be glad to hear from you.", "מיר וועלן זיך פרייען צו הערן פון אייך."],
  ["The office", "דער אפיס"],
  ["Telephone", "טעלעפאן"],
  ["Cell", "סעל"],
  ["Fax", "פאקס"],
  ["Address", "אדרעס"],
  ["For wholesale and store accounts, please use the", "פאר האלסעיל און געשעפט קאנטעס, ניצט ביטע די"],
  ["wholesale enquiry form", "האלסעיל אנפראגע פארעם"],
  ["— it reaches the right desk faster.", "— עס קומט אן שנעלער צום ריכטיגן טיש."],
  ["Send a message", "שיקט א מעסעדזש"],
  ["Message", "מעסעדזש"],
  ["Send message", "שיקט די מעסעדזש"],
  ["Your message has reached the office — we'll be in touch shortly.", "אייער מעסעדזש איז אנגעקומען אין אפיס — מיר וועלן זיך באלד פארבינדן."],

  ["Your cart", "אייער וואגן"],
  ["Loading your cart…", "מיר לאדן אייער וואגן…"],
];

// longest-first so contained phrases don't clobber their containers
const YI_SORTED = [...YI].sort((a, b) => b[0].length - a[0].length);

const YI_CART = {
  empty: "אייער וואגן איז ליידיג.", browse: "זעט די ליכט",
  working: "מיר רעכענען אויס אייער סך הכל…",
  each: "יעדע", remove: "אראפנעמען",
  summary: "באשטעלונג איבערבליק",
  subtotal: "סך הכל", shipping: "שיפינג", freeShip: "אומזיסט", total: "צוזאמען",
  checkout: "זיכערער טשעק־אוט",
  note: "קארטל צאלונג גייט דורך Stripe. איר וועט אריינלייגן אייער שיקן־אדרעס אויפן קומענדיגן טריט.",
  spend: "קויפט נאך {amt} פאר אומזיסטע שיפינג.", shipFree: "שיפינג איז אויף אונז.",
  added: "אריינגעלייגט אין אייער וואגן.", addedN: "{n} אריינגעלייגט אין אייער וואגן.",
  cartFail: "מיר האבן נישט געקענט לאדן אייער וואגן. ביטע פרישט אויף די זייט.",
  coFail: "מיר האבן נישט געקענט אנהייבן דעם טשעק־אוט. ביטע פרובירט נאכאמאל.",
  network: "נעץ פראבלעם — ביטע פרובירט נאכאמאל.",
  toCheckout: "מיר פירן אייך צום טשעק־אוט…",
};

function translateYi(markup) {
  let out = markup
    .replace('<html lang="en">', '<html lang="yi" dir="rtl">')
    .replace(/<body class="/, '<body class="yi ')
    // the "N products" count label — bounded by tags so URLs and class
    // names that contain the word "product" are never touched
    .replace(/>(\d+) products</g, ">$1 פראדוקטן<")
    .replace(/>(\d+) product</g, ">$1 פראדוקט<");
  for (const [en, yi] of YI_SORTED) {
    if (out.includes(en)) out = out.split(en).join(yi);
    const escaped = esc(en);
    if (escaped !== en && out.includes(escaped)) out = out.split(escaped).join(yi);
  }
  out = out.replace('<script src="/assets/site.js',
    `<script>window.NS_STR=${JSON.stringify(YI_CART)}</script><script src="/assets/site.js`);
  // the toggle itself swaps direction
  out = out.replace('href="?lang=yi" class="lang-toggle">אידיש', 'href="?lang=en" class="lang-toggle">English');
  return out;
}

const ORDER_STATUSES = ["pending", "paid", "processing", "shipped", "cancelled"];
const INQ_STATUSES = ["New", "Replied", "Closed"];

/* ── small helpers ─────────────────────────────────────────────────────── */

const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const json = (data, status = 200, extra) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...(extra || {}) },
  });

const html = (body, status = 200, extra) =>
  new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", ...(extra || {}) },
  });

const redirect = (loc, extra) =>
  new Response(null, { status: 302, headers: { Location: loc, ...(extra || {}) } });

const money = (cents) =>
  "$" + (Math.round(cents || 0) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// A product's `image` is either a filename that shipped with the build, or an
// "r2:<key>" reference to something the office uploaded from the admin.
const imageUrl = (image) => {
  const v = String(image || "").trim();
  if (!v) return "/assets/img/products/beeswax-tapers.png";
  if (/^https?:\/\//.test(v)) return v;
  if (v.startsWith("r2:")) return "/media/" + v.slice(3);
  return "/assets/img/products/" + v;
};

/* ── pricing ───────────────────────────────────────────────────────────
   One place decides what a product actually costs, so the card, the product
   page, the cart quote and the Stripe line items can never disagree.
   A sale price counts only when it is set and genuinely below retail. */

const onSale = (p) =>
  p.sale_price_cents > 0 && p.sale_price_cents < p.retail_price_cents;

const retailPrice = (p) => (onSale(p) ? p.sale_price_cents : p.retail_price_cents);

// What a case works out to per unit, and how much that beats buying singles.
function caseSaving(p) {
  const qty = Math.max(1, p.case_qty || 1);
  if (!p.wholesale_price_cents || qty < 2) return null;
  const perUnit = Math.round(p.wholesale_price_cents / qty);
  const single = retailPrice(p);
  if (!single || perUnit >= single) return { perUnit, pct: 0, saves: 0 };
  return {
    perUnit,
    pct: Math.round((1 - perUnit / single) * 100),
    saves: single * qty - p.wholesale_price_cents,
  };
}

const slugify = (s) =>
  String(s || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function orderCode() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const rnd = [...crypto.getRandomValues(new Uint8Array(6))]
    .map((b) => chars[b % chars.length])
    .join("");
  return "NS-" + rnd;
}

async function hmacHex(secret, msg) {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* ── sessions ──────────────────────────────────────────────────────────── */

const sessionSecret = (env) => env.SESSION_SECRET || env.ADMIN_PASSWORD || "";

async function makeToken(env, scope, subject) {
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  const payload = `${scope}|${subject}|${exp}`;
  return `${await hmacHex(sessionSecret(env), payload)}.${exp}.${subject}`;
}

async function readToken(env, cookieHeader, name, scope) {
  const m = (cookieHeader || "").match(new RegExp(`${name}=([a-f0-9]{64})\\.(\\d+)\\.([^;]*)`));
  if (!m || !sessionSecret(env)) return null;
  const [, sig, exp, subject] = m;
  if (Date.now() > +exp) return null;
  const expected = await hmacHex(sessionSecret(env), `${scope}|${subject}|${exp}`);
  return timingSafeEqual(expected, sig) ? subject : null;
}

const adminSession = (req, env) =>
  readToken(env, req.headers.get("Cookie"), "ns_admin", "admin");
const shopSession = (req, env) =>
  readToken(env, req.headers.get("Cookie"), "ns_wh", "wholesale");

// `Secure` is omitted over plain http so the local dev server can hold a
// session; every real deployment is https, where the flag is set.
const cookie = (name, value, maxAge, secure = true) =>
  `${name}=${value}; Path=/; HttpOnly; ${secure ? "Secure; " : ""}SameSite=Lax; Max-Age=${maxAge}`;

/* ── password hashing (wholesale accounts) ─────────────────────────────── */

async function hashPassword(password, saltHex) {
  const salt = saltHex
    ? Uint8Array.from(saltHex.match(/.{2}/g).map((b) => parseInt(b, 16)))
    : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" }, key, 256);
  const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return { hash: hex(bits), salt: hex(salt.buffer || salt) };
}

/* ── settings ──────────────────────────────────────────────────────────── */

async function getSettings(env) {
  const { results } = await env.DB.prepare("SELECT k, v FROM settings").all();
  const s = Object.fromEntries((results || []).map((r) => [r.k, r.v]));
  return {
    shippingFlat: +(s.shipping_flat_cents ?? 995),
    freeShipOver: +(s.free_ship_over_cents ?? 7500),
    wholesaleMin: +(s.wholesale_min_cents ?? 25000),
    storeLive: s.store_live !== "0",
    pricesProvisional: s.prices_provisional === "1",
    homeColumns: Math.min(5, Math.max(2, +(s.home_columns ?? 4))),
    showCasePricing: (s.show_case_pricing ?? "1") !== "0",
  };
}

const setSetting = (env, k, v) =>
  env.DB.prepare("INSERT INTO settings (k,v) VALUES (?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v")
    .bind(k, String(v)).run();

/* ── mail ──────────────────────────────────────────────────────────────── */

async function sendMail(env, { to, subject, html: body, replyTo }) {
  if (!env.RESEND_API_KEY) return { skipped: "no RESEND_API_KEY" };
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.MAIL_FROM || `Ner Shava <onboarding@resend.dev>`,
        to: [to],
        subject,
        html: body,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    return res.ok ? { ok: true } : { error: await res.text() };
  } catch (err) {
    return { error: String(err) };
  }
}

const notifyAddress = (env) => env.NOTIFY_EMAIL || EMAIL;

/* ── page shell ────────────────────────────────────────────────────────── */

const NAV = [
  ["/candles", "Our Candles"],
  ["/about", "Our Story"],
  ["/why-ner-shava", "Why Ner Shava"],
  ["/wholesale", "Wholesale"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
];

function layout({ title, description, body, path = "/", bodyClass = "", head = "" }) {
  const pageTitle = title ? `${title} — ${BRAND}` : `${BRAND} — ${TAGLINE}`;
  const desc = description ||
    "Handmade candles of 100% pure beeswax for Shabbos, Yom Tov, Yahrtzeit and Havdalah. Made in the USA by Shomrei Torah U'Mitzvos.";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:image" content="/assets/img/hero-scene-shabbos.jpg">
<link rel="icon" href="/assets/img/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Frank+Ruhl+Libre:wght@500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css?v=${ASSET_VERSION}">
${head}
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="head-bar">
    <div class="wrap head-bar-in">
      <span>Est. Mountainville, NY · Handmade in the USA</span>
      <span class="head-bar-contact">
        <a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <a href="?lang=yi" class="lang-toggle">אידיש</a>
      </span>
    </div>
  </div>
  <div class="wrap head-main">
    <a class="brand" href="/">
      <img src="/assets/img/logo.png" alt="" width="44" height="64">
      <span class="brand-text">
        <span class="brand-name">Ner Shava</span>
        <span class="brand-sub">Candles Corp.</span>
      </span>
    </a>
    <nav class="nav" aria-label="Main">
      ${NAV.map(([href, label]) =>
        `<a href="${href}"${path === href || (href !== "/" && path.startsWith(href)) ? ' aria-current="page"' : ""}>${label}</a>`
      ).join("")}
    </nav>
    <div class="head-actions">
      <a class="cart-link" href="/cart" aria-label="Cart">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
          <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 2-1.55L20.5 8H6"/>
          <circle cx="10" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/>
        </svg>
        <span class="cart-count" data-cart-count hidden>0</span>
      </a>
      <button class="burger" type="button" aria-label="Menu" aria-expanded="false" data-burger>
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" data-mobile-nav hidden aria-label="Mobile">
    ${NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
    <a href="/cart">Cart</a>
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <img src="/assets/img/logo.png" alt="" width="52" height="76">
      <p class="foot-name">${LEGAL}</p>
      <p class="foot-quiet">Handmade candles of 100% pure beeswax.<br>Every step done by Shomrei Torah U'Mitzvos.</p>
    </div>
    <div>
      <h3>Shop</h3>
      <ul>
        <li><a href="/candles/beeswax-shabbos">Beeswax Shabbos</a></li>
        <li><a href="/candles/paraffin-shabbos">Paraffin Shabbos</a></li>
        <li><a href="/candles/yahrtzeit">Yahrtzeit</a></li>
        <li><a href="/candles/havdalah-chupah">Havdalah &amp; Chupah</a></li>
        <li><a href="/candles/chanukah">Chanukah</a></li>
        <li><a href="/candles/wicks">Glick's Wicks</a></li>
        <li><a href="/candles">All collections</a></li>
      </ul>
    </div>
    <div>
      <h3>Company</h3>
      <ul>
        <li><a href="/about">Our Story</a></li>
        <li><a href="/why-ner-shava">Why Ner Shava</a></li>
        <li><a href="/wholesale">Wholesale</a></li>
        <li><a href="/wholesale/login">Wholesale Login</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul class="foot-contact">
        <li><a href="tel:${PHONE.replace(/-/g, "")}">Tel ${PHONE}</a><br><span class="foot-quiet">ext. 102</span></li>
        <li><a href="tel:${CELL.replace(/-/g, "")}">Cell ${CELL}</a></li>
        <li><span class="foot-quiet">Fax ${FAX}</span></li>
        <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li class="foot-quiet">${esc(ADDRESS)}</li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-base">
    <p>&copy; ${new Date().getUTCFullYear()} ${LEGAL} All rights reserved.</p>
    <p><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/shipping">Shipping &amp; Returns</a></p>
  </div>
</footer>
<script src="/assets/site.js?v=${ASSET_VERSION}" defer></script>
</body>
</html>`;
}

/* ── shared partials ───────────────────────────────────────────────────── */

const productImg = (p, cls = "") =>
  `<img class="${cls}" src="${esc(imageUrl(p.image))}" alt="${esc(p.name)}" loading="lazy" width="400" height="400">`;

function productCard(p) {
  const sale = onSale(p);
  const off = sale ? Math.round((1 - p.sale_price_cents / p.retail_price_cents) * 100) : 0;
  return `<article class="card">
  <a class="card-media" href="/product/${esc(p.slug)}">
    ${sale && off > 0 ? `<span class="sale-flag">${off}% off</span>` : ""}
    ${productImg(p)}
  </a>
  <div class="card-body">
    <h3 class="card-title"><a href="/product/${esc(p.slug)}">${esc(p.name)}</a></h3>
    ${p.unit_label ? `<p class="card-unit">${esc(p.unit_label)}${p.burn_time ? ` · ${esc(p.burn_time)}` : ""}</p>` : ""}
    <div class="card-foot">
      <span class="price">${money(retailPrice(p))}${sale ? `<s>${money(p.retail_price_cents)}</s>` : ""}</span>
      <button class="btn btn-sm" data-add="${esc(p.slug)}">Add</button>
    </div>
  </div>
</article>`;
}

const trustStrip = () => `<section class="trust">
  <div class="wrap trust-in">
    <div><strong>100%</strong><span>Pure Beeswax</span></div>
    <div><strong>USA</strong><span>Handmade</span></div>
    <div><strong>Shomrei</strong><span>Torah U'Mitzvos</span></div>
    <div><strong>Since</strong><span>Dor L'Dor</span></div>
  </div>
</section>`;

// Hero banner slides. Each is a poster: a slowly zooming photograph behind,
// Hebrew display line and English promise over it, the product shot as the
// centrepiece, and a spec strip along the bottom.
// `bg` is the photograph — swap these for wider, higher-resolution shots when
// they arrive; nothing else needs to change.
const HERO_SLIDES = [
  {
    bg: "hero-scene-shabbos.jpg",
    alt: "A fully set Shabbos table with Ner Shava candles burning in silver leichter",
    heb: "וואקסענע שבת ליכט",
    en: "The Shabbos table, the way it was meant to glow.",
    sub: "Handmade from 100% pure beeswax — smokeless, dripless, and clean to the last hour.",
    cta: ["Shop Shabbos candles", "/candles/beeswax-shabbos"],
    chips: ["100% Pure Beeswax", "Smokeless & Dripless"],
  },
  {
    bg: "hero-scene-havdalah.jpg",
    alt: "A braided Ner Shava havdalah candle burning over a set melaveh malka table",
    heb: "הבדלה ליכט",
    en: "The braided flame that carries Shabbos out.",
    sub: "Hand-braided pure beeswax with the wide flame the bracha calls for — no smoke, no drips.",
    cta: ["Shop havdalah", "/candles/havdalah-chupah"],
    chips: ["Hand-Braided", "100% Pure Beeswax"],
  },
  {
    bg: "hero-scene-neshuma.jpg",
    alt: "A Ner Shava memorial candle burning in glass",
    heb: "נר נשמה",
    en: "A light that burns steady and true.",
    sub: "Twenty-six hours, forty-eight, seventy-two — or a full week. Lit once, trusted to the end.",
    cta: ["Shop yahrtzeit", "/candles/yahrtzeit"],
    chips: ["26 hr – 7 day", "Steady Glass Flame"],
  },
];

function heroBanner() {
  // Sprout-style split hero on white: the scene photograph sits left in a
  // rounded frame (still slowly zooming), the copy sits right.
  const slides = HERO_SLIDES.map((s, i) => `
    <article class="hslide${i === 0 ? " is-on" : ""}" data-hslide="${i}"${i ? ' aria-hidden="true"' : ""}>
      <div class="hslide-photo">
        <img src="/assets/img/${s.bg}" alt="${esc(s.alt)}"${i === 0 ? "" : ' loading="lazy"'} width="1536" height="1024">
      </div>
      <div class="hslide-copy">
        <p class="hslide-chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</p>
        <p class="hslide-heb" lang="he" dir="rtl">${s.heb}</p>
        ${i === 0
          ? `<h1 class="hslide-en">${s.en}</h1>`
          : `<h2 class="hslide-en">${s.en}</h2>`}
        <p class="hslide-sub">${esc(s.sub)}</p>
        <p class="hslide-ctas">
          <a class="btn btn-pill" href="${s.cta[1]}"${i ? ' tabindex="-1"' : ""}>${esc(s.cta[0])}</a>
          <a class="btn btn-pill-outline" href="/wholesale"${i ? ' tabindex="-1"' : ""}>Wholesale</a>
        </p>
      </div>
    </article>`).join("");

  const dots = HERO_SLIDES.map((s, i) =>
    `<button type="button" class="hdot${i === 0 ? " is-on" : ""}" data-hdot="${i}"
       aria-label="Show ${esc(s.cta[0]).replace(/^Shop /, "")}"${i === 0 ? ' aria-current="true"' : ""}></button>`).join("");

  return `<section class="hero">
  <div class="wrap hero-banner" data-hero aria-roledescription="carousel" aria-label="Ner Shava candles">
    <div class="hero-stage">${slides}</div>
    <div class="hero-dots">${dots}</div>
  </div>
</section>`;
}

const REASONS = [
  ["100% Pure Beeswax", "Made from pure beeswax — the traditional standard for a beautiful, natural flame."],
  ["Frum-Made, Start to Finish", "The only candle company in the world where every step is done by Shomrei Torah U'Mitzvos."],
  ["Clean-Burning Wicks", "Our wicks don't smoke and don't drip — even in a draft from a window or an A/C vent."],
  ["Beautiful Every Time", "A natural elegance you can't fake. It burns even more beautifully than the picture."],
  ["Keeps Your Leichter Clean", "No mess, no residue — your leichter stays as beautiful as the flame."],
  ["A Bracha from Chazal", "“One who accustoms himself to light beautiful candles will merit beautiful, ehrliche children” (Shabbos)."],
];

/* ── storefront pages ──────────────────────────────────────────────────── */

async function pageHome(env) {
  const settings = await getSettings(env);
  const [{ results: collections }, { results: products }] = await Promise.all([
    env.DB.prepare(`
      SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.collection = c.slug AND p.retail_active = 1) AS n
      FROM collections c ORDER BY c.sort`).all(),
    // Everything the office sells, in the order it set. home_position 1,2,3…
    // comes first; anything left unplaced (0) falls in behind, by category.
    env.DB.prepare(`
      SELECT * FROM products WHERE retail_active = 1
      ORDER BY CASE WHEN home_position > 0 THEN 0 ELSE 1 END,
               home_position, collection, sort, name`).all(),
  ]);
  const collName = Object.fromEntries(collections.map((c) => [c.slug, c.name]));

  const body = `
${heroBanner()}

${trustStrip()}

<section class="wrap section split">
  <div class="split-media">
    <img src="/assets/img/story-leichter.jpg" alt="A twelve-branch silver leichter with Ner Shava beeswax candles burning" width="853" height="1280">
  </div>
  <div class="split-body">
    <p class="eyebrow">Our Story</p>
    <h2>The candle is the most beautiful thing on the Shabbos table.</h2>
    <p>For decades Ner Shava has been making candles the traditional way — pure beeswax, careful wicks, and a precise burn that keeps your leichter clean and your home peaceful.</p>
    <p>We are the only candle company in the world where every step, from the raw wax to the finished box, is done by Shomrei Torah U'Mitzvos.</p>
    <blockquote>One who accustoms himself to light beautiful candles will merit beautiful, ehrliche children.<cite>Maseches Shabbos</cite></blockquote>
    <a class="btn btn-outline" href="/about">Read our story</a>
  </div>
</section>

<section class="section band-cream" id="shop">
  <div class="wrap">
    <p class="eyebrow center">Our Candles</p>
    <h2 class="center">Everything we make, in one place.</h2>
    <p class="lede center">From the weekly Shabbos to Yom Tov, from Havdalah to the Yahrtzeit — ${products.length} candles and wicks, made with the same care.</p>

    <p class="ship-banner">
      <strong>Free shipping</strong> on orders over ${money(settings.freeShipOver)}
      <span>· ${money(settings.shippingFlat)} flat rate below that</span>
      <a href="/wholesale">Wholesale? Case prices &amp; free freight terms →</a>
    </p>

    <nav class="cat-strip" aria-label="Jump to a category">
      <a href="#shop" class="on">All ${products.length}</a>
      ${collections.filter((c) => c.n > 0).map((c) =>
        `<a href="/candles/${esc(c.slug)}">${esc(c.name)} <span>${c.n}</span></a>`).join("")}
    </nav>

    <div class="grid cols-${settings.homeColumns}">${products.map(productCard).join("")}</div>
  </div>
</section>

<section class="section band-dark">
  <div class="wrap">
    <p class="eyebrow center gold">Why Ner Shava</p>
    <h2 class="center">Six reasons your Shabbos table deserves it.</h2>
    <div class="reasons">
      ${REASONS.map((r, i) => `<div class="reason">
        <span class="reason-num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(r[0])}</h3><p>${esc(r[1])}</p>
      </div>`).join("")}
    </div>
  </div>
</section>

<section class="wrap section wholesale-band">
  <div>
    <p class="eyebrow">For Retailers</p>
    <h2>Stock the candles your customers ask for by name.</h2>
    <p>Ner Shava is carried in groceries, Judaica stores, seforim stores, mikvahs and by shamashim throughout Williamsburg, Boro Park, Monsey and Kiryas Joel. We'd love to add your shelf to that list.</p>
    <div class="hero-cta">
      <a class="btn btn-gold" href="/wholesale">Wholesale enquiries</a>
      <a class="btn btn-outline" href="/wholesale/login">Wholesale login</a>
    </div>
  </div>
  <img src="/assets/img/products/beeswax-shabbos-7hr.png" alt="A case of Ner Shava beeswax Shabbos candles" loading="lazy" width="500" height="500">
</section>`;

  return layout({ body, path: "/" });
}

async function pageCollections(env) {
  const { results } = await env.DB.prepare(`
    SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.collection = c.slug AND p.retail_active = 1) AS n
    FROM collections c ORDER BY c.sort`).all();

  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Our Candles</p>
    <h1>Ten collections, each made with the same care.</h1>
    <p class="lede">Every candle Ner Shava makes — organised so you can find what your table, your shul or your customers need.</p>
  </div>
</section>
<section class="wrap section">
  <div class="collection-grid lg">
    ${results.map((c) => `<a class="coll" href="/candles/${esc(c.slug)}">
      <span class="coll-media"><img src="${esc(imageUrl(c.image))}" alt="" loading="lazy" width="300" height="300"></span>
      <span class="coll-body">
        <span class="coll-count">${c.n} ${c.n === 1 ? "product" : "products"}</span>
        <span class="coll-name">${esc(c.name)}</span>
        <span class="coll-blurb">${esc(c.blurb)}</span>
        <span class="coll-go">View collection →</span>
      </span>
    </a>`).join("")}
  </div>
</section>`;
  return layout({ title: "Our Candles", body, path: "/candles" });
}

async function pageCollection(env, slug) {
  const coll = await env.DB.prepare("SELECT * FROM collections WHERE slug = ?").bind(slug).first();
  if (!coll) return null;
  const { results } = await env.DB.prepare(
    "SELECT * FROM products WHERE collection = ? AND retail_active = 1 ORDER BY sort").bind(slug).all();

  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow"><a href="/candles">Our Candles</a> / ${esc(coll.name)}</p>
    <h1>${esc(coll.name)}</h1>
    <p class="lede">${esc(coll.blurb)}</p>
  </div>
</section>
<section class="wrap section">
  <div class="grid">${results.map(productCard).join("")}</div>
</section>`;
  return layout({ title: coll.name, description: coll.blurb, body, path: "/candles" });
}

async function pageProduct(env, slug) {
  const p = await env.DB.prepare(
    "SELECT * FROM products WHERE slug = ? AND retail_active = 1").bind(slug).first();
  if (!p) return null;
  const settings = await getSettings(env);
  const coll = await env.DB.prepare("SELECT * FROM collections WHERE slug = ?")
    .bind(p.collection).first();
  const { results: related } = await env.DB.prepare(
    "SELECT * FROM products WHERE collection = ? AND slug != ? AND retail_active = 1 ORDER BY sort LIMIT 4")
    .bind(p.collection, p.slug).all();

  const specs = [
    ["Item number", p.sku],
    ["Pack", p.unit_label],
    ["Burn time", p.burn_time],
    ["Material", p.material === "beeswax" ? "100% pure beeswax"
      : p.material === "paraffin" ? "Handmade paraffin"
      : p.material === "wick" ? "Beeswax-dipped wick" : null],
    ["Case", p.case_qty > 1 ? `${p.case_qty} per case${p.pack ? ` (${p.pack})` : ""}` : null],
  ].filter((r) => r[1]);

  const body = `
<section class="wrap product">
  <div class="product-media">${productImg(p, "product-img")}</div>
  <div class="product-body">
    <p class="eyebrow"><a href="/candles/${esc(p.collection)}">${esc(coll ? coll.name : "Candles")}</a></p>
    <h1>${esc(p.name)}</h1>
    <p class="product-blurb">${esc(p.blurb)}</p>
    <p class="product-price">
      ${money(retailPrice(p))}
      ${onSale(p) ? `<s>${money(p.retail_price_cents)}</s>
        <em class="save-tag">Save ${money(p.retail_price_cents - p.sale_price_cents)}</em>` : ""}
      <span>${esc(p.unit_label || "")}</span>
    </p>
    <form class="add-form" data-add-form="${esc(p.slug)}">
      <label class="qty">
        <span>Qty</span>
        <input type="number" name="qty" value="1" min="1" max="99" inputmode="numeric">
      </label>
      <button class="btn btn-gold" type="submit">Add to cart</button>
    </form>
    <p class="product-desc">${esc(p.description)}</p>
    ${specs.length ? `<dl class="specs">
      ${specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
    </dl>` : ""}
    ${settings.showCasePricing && caseSaving(p) ? (() => {
      const c = caseSaving(p);
      return `<div class="case-box">
      <p class="case-head">Buying for a store?</p>
      <p class="case-line">
        <strong>Case of ${p.case_qty}</strong> — ${money(p.wholesale_price_cents)}
        <span class="case-unit">${money(c.perUnit)} each</span>
      </p>
      ${c.pct > 0 ? `<p class="case-save">That is <strong>${c.pct}% less</strong> than buying singles — you save ${money(c.saves)} a case.</p>` : ""}
      <p class="fineprint quiet">Case prices are for approved wholesale accounts.
        <a href="/wholesale">Apply for one</a> or <a href="/wholesale/login">log in</a>.</p>
    </div>`; })() : `<p class="product-note">Buying for a store? <a href="/wholesale">Case pricing is available to wholesale accounts.</a></p>`}
  </div>
</section>
${related.length ? `<section class="wrap section">
  <h2 class="center">More from ${esc(coll ? coll.name : "this collection")}</h2>
  <div class="grid">${related.map(productCard).join("")}</div>
</section>` : ""}`;

  return layout({ title: p.name, description: p.blurb, body, path: "/candles" });
}

function pageCart() {
  const body = `
<section class="page-head slim">
  <div class="wrap"><h1>Your cart</h1></div>
</section>
<section class="wrap section">
  <div id="cart-root" class="cart-root"><p class="quiet">Loading your cart…</p></div>
</section>`;
  return layout({ title: "Cart", body, path: "/cart" });
}

function pageAbout() {
  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Our Story</p>
    <h1>The candle came first. Then everything else.</h1>
  </div>
</section>
<section class="wrap section split">
  <div class="split-body prose">
    <p>Ner Shava was built around a simple conviction: the candle is the most beautiful thing on the Shabbos table. When you light the ner Shabbos it brightens the whole room — and it brings an oneg to Shabbos and Yom Tov that nothing else can.</p>
    <p>So we set out to make a candle worthy of that moment. Pure beeswax, hand-poured. Wicks that burn steady and don't smoke or drip. A finish so clean your leichter stays beautiful, week after week.</p>
    <p>From day one we made a decision that quietly shaped everything: every step of the work — from the raw wax to the finished box — is done by Shomrei Torah U'Mitzvos. We are, as far as we know, the only candle company in the world where this is true. It is why our candles are the ones you see on so many Shabbos tables in Williamsburg, Boro Park, Monsey and Kiryas Joel.</p>
  </div>
  <div class="split-media"><img src="/assets/img/story-leichter.jpg" alt="A twelve-branch silver leichter with Ner Shava beeswax candles burning" width="853" height="1280"></div>
</section>
<section class="section band-cream">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow">The Craft</p>
      <h2>Hand-poured. On purpose.</h2>
      <p>We could go faster. We choose not to. Every candle in our beeswax and paraffin Shabbos lines is handmade, so the finish, the wick placement and the burn quality are exactly what they should be.</p>
      <p>It's a slower way to make a candle. It's the reason our customers keep coming back.</p>
    </div>
    <div>
      <p class="eyebrow">The Promise</p>
      <h2>One brand, one promise.</h2>
      <p>When a Yiddishe mama or tatte walks into a store and sees the Ner Shava box on the shelf, we want one thought to come to mind: <em>"Ah… these are the beautiful candles."</em></p>
      <p>That's what we've quietly built, candle by candle, Shabbos by Shabbos, for years.</p>
    </div>
  </div>
</section>
${trustStrip()}
<section class="wrap section center">
  <div class="hero-cta center-cta">
    <a class="btn btn-gold" href="/candles">Browse our candles</a>
    <a class="btn btn-outline" href="/contact">Get in touch</a>
  </div>
</section>`;
  return layout({ title: "Our Story", body, path: "/about" });
}

function pageWhy() {
  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Why Ner Shava</p>
    <h1>Six reasons your Shabbos table deserves it.</h1>
    <p class="lede">Every one of these is the reason a family switches to Ner Shava — and the reason they don't switch back.</p>
  </div>
</section>
<section class="wrap section">
  <div class="reasons light">
    ${REASONS.map((r, i) => `<div class="reason">
      <span class="reason-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(r[0])}</h3><p>${esc(r[1])}</p>
    </div>`).join("")}
  </div>
</section>
<section class="section band-dark">
  <div class="wrap center narrow">
    <blockquote class="pull">Ahh… it is Shabbos in the world… lit up with Ner Shava.</blockquote>
    <a class="btn btn-gold" href="/candles">Shop the candles</a>
  </div>
</section>`;
  return layout({ title: "Why Ner Shava", body, path: "/why-ner-shava" });
}

const FAQS = [
  ["What is Ner Shava made from?",
   "Our signature Shabbos line, tea lights, Yahrtzeit, Havdalah, Chanukah, Pesach and Yom Kippur candles are made from 100% pure beeswax. We also make a handmade paraffin Shabbos line — Ner Yufa — as an everyday option."],
  ["Why beeswax instead of paraffin?",
   "Beeswax burns with a warmer, more natural light, it holds its shape, and it leaves your leichter clean. It is also the traditional choice — a ner shel shaava is what the name Ner Shava means."],
  ["How long do the candles burn?",
   "Our Shabbos candles come in four, five and seven hour burns. Yahrtzeit candles run 26 hours, 48 hours, 72 hours or a full seven days. Ma-Nishtanu Seder candles burn 8–9 hours, or 14–15 hours in the large size."],
  ["Do the candles drip or smoke?",
   "No. Our wicks are chosen and placed so the candle burns clean and stays put — even in a draft from an open window or an air-conditioning vent."],
  ["Where are Ner Shava candles made?",
   "In Mountainville, New York. Every step of production, from raw wax to finished box, is done here by Shomrei Torah U'Mitzvos."],
  ["Where can I buy Ner Shava candles?",
   "In groceries, Judaica stores, seforim stores and mikvahs throughout Williamsburg, Boro Park, Monsey and Kiryas Joel — and now directly from us on this site."],
  ["Do you sell direct to consumers online?",
   "Yes. Everything in our catalog can be ordered here and shipped to your door. Orders are packed and dispatched from Mountainville."],
  ["Do you offer wholesale?",
   "Yes. If you run a store we'd love to hear from you. Send a wholesale enquiry and we'll set up an account with case pricing and terms."],
  ["Are your candles under hashgacha?",
   "Every step of production is done by Shomrei Torah U'Mitzvos. For any specific hashgacha question please call the office at " + PHONE + "."],
];

function pageFaq() {
  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Frequently Asked</p>
    <h1>Everything you might want to know.</h1>
  </div>
</section>
<section class="wrap section narrow">
  <div class="faq">
    ${FAQS.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
  </div>
  <p class="center mt quiet">Still have a question? Call <a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a> or email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
</section>`;
  return layout({ title: "FAQ", body, path: "/faq" });
}

function pageContact(sent) {
  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Contact</p>
    <h1>We'd be glad to hear from you.</h1>
  </div>
</section>
<section class="wrap section two-col">
  <div>
    <h2>The office</h2>
    <ul class="contact-list">
      <li><strong>Telephone</strong><a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a> ext. 102</li>
      <li><strong>Cell</strong><a href="tel:${CELL.replace(/-/g, "")}">${CELL}</a></li>
      <li><strong>Fax</strong>${FAX}</li>
      <li><strong>Email</strong><a href="mailto:${EMAIL}">${EMAIL}</a></li>
      <li><strong>Address</strong>${esc(ADDRESS)}</li>
    </ul>
    <p class="quiet">For wholesale and store accounts, please use the <a href="/wholesale">wholesale enquiry form</a> — it reaches the right desk faster.</p>
  </div>
  <div>
    ${sent ? `<div class="notice ok"><strong>Thank you.</strong> Your message has reached the office — we'll be in touch shortly.</div>` : ""}
    <h2>Send a message</h2>
    <form class="form" method="post" action="/contact">
      <label>Your name <span class="req">*</span><input name="name" required autocomplete="name"></label>
      <div class="row">
        <label>Email <span class="req">*</span><input type="email" name="email" required autocomplete="email"></label>
        <label>Phone<input name="phone" autocomplete="tel"></label>
      </div>
      <label>Message <span class="req">*</span><textarea name="message" rows="6" required></textarea></label>
      <button class="btn btn-gold" type="submit">Send message</button>
    </form>
  </div>
</section>`;
  return layout({ title: "Contact", body, path: "/contact" });
}

function pageWholesale(sent) {
  const body = `
<section class="page-head">
  <div class="wrap">
    <p class="eyebrow">Wholesale</p>
    <h1>Carry the candles your customers already trust.</h1>
    <p class="lede">Ner Shava is carried in groceries, Judaica stores, seforim stores, mikvahs and by shamashim in Williamsburg, Boro Park, Monsey and Kiryas Joel. If you'd like to stock our full line, we'd love to hear from you.</p>
  </div>
</section>
<section class="section band-cream">
  <div class="wrap">
    <p class="eyebrow center">Why partner with us</p>
    <h2 class="center">A shelf presence you don't have to sell.</h2>
    <div class="four">
      <div><h3>Recognised name</h3><p>Yiddishe families recognise the Ner Shava box on sight — the brand does the selling for you.</p></div>
      <div><h3>Full-year line</h3><p>Weekly Shabbos, Yahrtzeit, Havdalah, Chanukah, Pesach, Yom Kippur — one supplier, ten collections.</p></div>
      <div><h3>Consistent quality</h3><p>Handmade and hand-checked. Fewer complaints, fewer returns.</p></div>
      <div><h3>Frum-owned &amp; produced</h3><p>The only candle company where every step of production is done by Shomrei Torah U'Mitzvos.</p></div>
    </div>
  </div>
</section>
<section class="wrap section two-col">
  <div>
    <h2>How an account works</h2>
    <ol class="steps">
      <li><strong>Send the enquiry.</strong> Tell us about your store and what you'd like to carry.</li>
      <li><strong>We set up your account.</strong> The office confirms case pricing and terms with you directly.</li>
      <li><strong>Order online, any time.</strong> You get a login here with your case prices, your order history and re-ordering in a few clicks.</li>
    </ol>
    <p class="quiet">Already have an account? <a href="/wholesale/login">Log in to order</a>.</p>
    <div class="callout">
      <p class="eyebrow">Prefer to call?</p>
      <p class="callout-big"><a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a></p>
      <p class="quiet">or email <a href="mailto:${EMAIL}">${EMAIL}</a></p>
    </div>
  </div>
  <div>
    ${sent ? `<div class="notice ok"><strong>Thank you.</strong> Your enquiry is with the office — we'll be in touch to set up your account.</div>` : ""}
    <h2>Wholesale enquiry</h2>
    <p class="quiet">Tell us about your store and we'll be in touch.</p>
    <form class="form" method="post" action="/wholesale">
      <label>Business name <span class="req">*</span><input name="business" required autocomplete="organization"></label>
      <label>Your name <span class="req">*</span><input name="name" required autocomplete="name"></label>
      <div class="row">
        <label>Phone <span class="req">*</span><input name="phone" required autocomplete="tel"></label>
        <label>Email <span class="req">*</span><input type="email" name="email" required autocomplete="email"></label>
      </div>
      <div class="row">
        <label>City / area<input name="city"></label>
        <label>Type of store
          <select name="store_type">
            <option value="">Choose…</option>
            <option>Grocery</option><option>Judaica store</option><option>Seforim store</option>
            <option>Mikvah</option><option>Shul / shamash</option><option>Distributor</option><option>Other</option>
          </select>
        </label>
      </div>
      <label>What would you like to carry?<textarea name="message" rows="5"></textarea></label>
      <button class="btn btn-gold" type="submit">Send enquiry</button>
      <p class="fineprint">By submitting, you agree we may contact you regarding your wholesale enquiry.</p>
    </form>
  </div>
</section>`;
  return layout({ title: "Wholesale", body, path: "/wholesale" });
}

function policyPage(title, sections) {
  const body = `
<section class="page-head"><div class="wrap"><h1>${esc(title)}</h1></div></section>
<section class="wrap section narrow prose">
  ${sections.map(([h, p]) => `${h ? `<h2>${esc(h)}</h2>` : ""}<p>${p}</p>`).join("")}
</section>`;
  return layout({ title, body });
}

/* ── cart / checkout API ───────────────────────────────────────────────── */

async function quoteCart(env, items, kind = "retail", account = null) {
  const clean = (Array.isArray(items) ? items : [])
    .map((i) => ({ slug: String(i.slug || ""), qty: Math.max(1, Math.min(999, parseInt(i.qty, 10) || 0)) }))
    .filter((i) => i.slug && i.qty > 0)
    .slice(0, 60);
  if (!clean.length) return { lines: [], subtotal: 0, shipping: 0, total: 0 };

  const placeholders = clean.map(() => "?").join(",");
  const { results } = await env.DB.prepare(
    `SELECT * FROM products WHERE slug IN (${placeholders})`).bind(...clean.map((i) => i.slug)).all();
  const bySlug = Object.fromEntries((results || []).map((p) => [p.slug, p]));

  const settings = await getSettings(env);
  const wholesale = kind === "wholesale";
  const lines = [];
  for (const item of clean) {
    const p = bySlug[item.slug];
    if (!p) continue;
    if (wholesale ? !p.wholesale_active : !p.retail_active) continue;
    let unit = wholesale ? p.wholesale_price_cents : retailPrice(p);
    if (wholesale && account && account.discount_pct)
      unit = Math.round(unit * (100 - account.discount_pct) / 100);
    if (!unit) continue;
    lines.push({
      slug: p.slug, id: p.id, name: p.name, sku: p.sku, image_url: imageUrl(p.image),
      unit_label: wholesale ? `Case of ${p.case_qty}` : p.unit_label,
      unit_price_cents: unit, qty: item.qty, line_total_cents: unit * item.qty,
    });
  }
  const subtotal = lines.reduce((n, l) => n + l.line_total_cents, 0);
  const shipping = wholesale ? 0
    : subtotal === 0 || subtotal >= settings.freeShipOver ? 0 : settings.shippingFlat;
  return { lines, subtotal, shipping, total: subtotal + shipping, settings };
}

async function stripeCall(env, path, params, method = "POST") {
  const body = params ? new URLSearchParams(params).toString() : undefined;
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || `Stripe ${res.status}`);
  return data;
}

async function createOrder(env, { kind, quote, account, customer }) {
  const code = orderCode();
  const res = await env.DB.prepare(`
    INSERT INTO orders (code, kind, account_id, email, name, phone, business,
      subtotal_cents, shipping_cents, total_cents, status, payment_status)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
    .bind(code, kind, account?.id || null,
      customer?.email || account?.email || null,
      customer?.name || account?.contact || null,
      customer?.phone || account?.phone || null,
      account?.business || customer?.business || null,
      quote.subtotal, quote.shipping, quote.total,
      "pending", kind === "wholesale" && account?.terms === "net30" ? "terms" : "unpaid")
    .run();
  const orderId = res.meta.last_row_id;

  const stmt = env.DB.prepare(`
    INSERT INTO order_items (order_id, product_id, name, sku, unit_label, unit_price_cents, qty, line_total_cents)
    VALUES (?,?,?,?,?,?,?,?)`);
  await env.DB.batch(quote.lines.map((l) =>
    stmt.bind(orderId, l.id, l.name, l.sku, l.unit_label, l.unit_price_cents, l.qty, l.line_total_cents)));

  return { orderId, code };
}

async function apiCheckout(req, env, url) {
  if (!env.STRIPE_SECRET_KEY)
    return json({ error: "Card payment is not configured yet. Please call the office to place your order." }, 503);

  const payload = await req.json().catch(() => ({}));
  const account = payload.wholesale ? await accountFromSession(req, env) : null;
  const kind = account ? "wholesale" : "retail";
  const quote = await quoteCart(env, payload.items, kind, account);
  if (!quote.lines.length) return json({ error: "Your cart is empty." }, 400);

  const settings = await getSettings(env);
  if (kind === "wholesale" && quote.subtotal < settings.wholesaleMin)
    return json({ error: `Wholesale orders have a ${money(settings.wholesaleMin)} minimum.` }, 400);

  const { orderId, code } = await createOrder(env, { kind, quote, account });

  const params = {
    mode: "payment",
    success_url: `${url.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url.origin}/cart?cancelled=1`,
    client_reference_id: code,
    "metadata[order_code]": code,
    "metadata[order_id]": String(orderId),
    "payment_method_types[0]": "card",
    "shipping_address_collection[allowed_countries][0]": "US",
    "shipping_address_collection[allowed_countries][1]": "CA",
    "phone_number_collection[enabled]": "true",
  };
  if (account?.email) params.customer_email = account.email;

  quote.lines.forEach((l, i) => {
    params[`line_items[${i}][quantity]`] = String(l.qty);
    params[`line_items[${i}][price_data][currency]`] = "usd";
    params[`line_items[${i}][price_data][unit_amount]`] = String(l.unit_price_cents);
    params[`line_items[${i}][price_data][product_data][name]`] = l.name;
    if (l.unit_label)
      params[`line_items[${i}][price_data][product_data][description]`] = l.unit_label;
  });

  params["shipping_options[0][shipping_rate_data][type]"] = "fixed_amount";
  params["shipping_options[0][shipping_rate_data][fixed_amount][amount]"] = String(quote.shipping);
  params["shipping_options[0][shipping_rate_data][fixed_amount][currency]"] = "usd";
  params["shipping_options[0][shipping_rate_data][display_name]"] =
    quote.shipping === 0 ? "Free shipping" : "Standard shipping";

  try {
    const session = await stripeCall(env, "checkout/sessions", params);
    await env.DB.prepare("UPDATE orders SET stripe_session_id = ? WHERE id = ?")
      .bind(session.id, orderId).run();
    return json({ url: session.url, code });
  } catch (err) {
    await env.DB.prepare("UPDATE orders SET status = 'cancelled', notes = ? WHERE id = ?")
      .bind(`Stripe error: ${String(err).slice(0, 300)}`, orderId).run();
    return json({ error: "We couldn't start the payment. Please try again or call the office." }, 502);
  }
}

async function markPaid(env, order, session) {
  if (!order || order.payment_status === "paid") return order;
  const ship = session?.shipping_details?.address || session?.customer_details?.address || {};
  await env.DB.prepare(`
    UPDATE orders SET status = 'paid', payment_status = 'paid',
      email = COALESCE(?, email), name = COALESCE(?, name), phone = COALESCE(?, phone),
      ship_line1 = ?, ship_line2 = ?, ship_city = ?, ship_state = ?, ship_zip = ?, ship_country = ?
    WHERE id = ?`)
    .bind(session?.customer_details?.email || null,
      session?.shipping_details?.name || session?.customer_details?.name || null,
      session?.customer_details?.phone || null,
      ship.line1 || null, ship.line2 || null, ship.city || null,
      ship.state || null, ship.postal_code || null, ship.country || "US", order.id)
    .run();
  return env.DB.prepare("SELECT * FROM orders WHERE id = ?").bind(order.id).first();
}

async function orderWithItems(env, order) {
  const { results } = await env.DB.prepare(
    "SELECT * FROM order_items WHERE order_id = ? ORDER BY id").bind(order.id).all();
  return { ...order, items: results || [] };
}

function orderEmailHtml(order) {
  const rows = order.items.map((i) =>
    `<tr><td style="padding:6px 12px 6px 0">${esc(i.name)}${i.unit_label ? `<br><small style="color:#777">${esc(i.unit_label)}</small>` : ""}</td>
     <td style="padding:6px 12px;text-align:center">${i.qty}</td>
     <td style="padding:6px 0;text-align:right">${money(i.line_total_cents)}</td></tr>`).join("");
  const addr = [order.ship_line1, order.ship_line2,
    [order.ship_city, order.ship_state, order.ship_zip].filter(Boolean).join(", ")]
    .filter(Boolean).map(esc).join("<br>");
  return `<div style="font-family:Georgia,serif;max-width:560px;color:#241a17">
  <h2 style="color:#5C1A22;margin:0 0 4px">Ner Shava Candles</h2>
  <p style="margin:0 0 18px;color:#777">Order ${esc(order.code)}</p>
  <table style="width:100%;border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:14px">
    ${rows}
    <tr><td colspan="2" style="padding:10px 12px 2px 0;text-align:right;color:#777">Subtotal</td><td style="padding:10px 0 2px;text-align:right">${money(order.subtotal_cents)}</td></tr>
    <tr><td colspan="2" style="padding:2px 12px 2px 0;text-align:right;color:#777">Shipping</td><td style="padding:2px 0;text-align:right">${order.shipping_cents ? money(order.shipping_cents) : "Free"}</td></tr>
    <tr><td colspan="2" style="padding:8px 12px 0 0;text-align:right;font-weight:bold">Total</td><td style="padding:8px 0 0;text-align:right;font-weight:bold">${money(order.total_cents)}</td></tr>
  </table>
  ${addr ? `<p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;margin-top:20px"><strong>Ship to</strong><br>${addr}</p>` : ""}
  <p style="font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#777;margin-top:24px">
    Questions? Call ${PHONE} ext. 102 or reply to this email.<br>${esc(LEGAL)} · ${esc(ADDRESS)}</p>
</div>`;
}

/* ── fulfilment ────────────────────────────────────────────────────────
   Paid orders are pushed to ShipStation, which is what actually talks to
   the carriers and warehouses. Silently skipped until the keys are set, so
   the shop works fine without it. Failures are logged and mailed to the
   office rather than thrown — a fulfilment outage must never lose an order
   that the customer has already paid for.

   ShipStation can also *pull*: it polls /api/fulfilment/orders (Basic auth,
   FULFILMENT_USER/FULFILMENT_PASS) and posts shipments back to
   /api/fulfilment/shipped, which marks the order shipped and emails the
   customer their tracking number. Push, pull or both — a 3PL that speaks
   neither can be handed the same JSON feed. */

async function pushToShipStation(env, order) {
  if (!env.SHIPSTATION_KEY || !env.SHIPSTATION_SECRET) return { skipped: true };
  const auth = btoa(`${env.SHIPSTATION_KEY}:${env.SHIPSTATION_SECRET}`);
  const name = order.name || order.business || "Customer";
  const payload = {
    orderNumber: order.code,
    orderKey: order.code,
    orderDate: (order.created_at || "").replace(" ", "T") || undefined,
    orderStatus: "awaiting_shipment",
    customerEmail: order.email || undefined,
    amountPaid: order.total_cents / 100,
    shippingAmount: order.shipping_cents / 100,
    billTo: { name },
    shipTo: {
      name,
      company: order.business || undefined,
      street1: order.ship_line1 || "",
      street2: order.ship_line2 || undefined,
      city: order.ship_city || "",
      state: order.ship_state || "",
      postalCode: order.ship_zip || "",
      country: order.ship_country || "US",
      phone: order.phone || undefined,
    },
    items: (order.items || []).map((i) => ({
      sku: i.sku || undefined,
      name: i.name,
      quantity: i.qty,
      unitPrice: i.unit_price_cents / 100,
    })),
    customerNotes: order.kind === "wholesale"
      ? `Wholesale order${order.business ? ` — ${order.business}` : ""}. Quantities are CASES.`
      : undefined,
  };
  try {
    const res = await fetch("https://ssapi.shipstation.com/orders/createorder", {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`ShipStation ${res.status}: ${(await res.text()).slice(0, 300)}`);
    return { ok: true };
  } catch (err) {
    console.error("shipstation push failed", order.code, err);
    await sendMail(env, {
      to: notifyAddress(env),
      subject: `Order ${order.code} did NOT reach ShipStation — ship it manually`,
      html: `<p>Order <strong>${esc(order.code)}</strong> was paid but could not be sent to
        ShipStation, so it will not appear there. Please enter it by hand.</p>
        <p style="color:#777">${esc(String(err.message || err))}</p>`,
    }).catch(() => {});
    return { error: String(err) };
  }
}

// Marks an order shipped and emails the customer their tracking. Shared by
// the JSON fulfilment API and the ShipStation custom-store endpoint, so both
// behave identically and both are idempotent.
async function markShipped(env, orderNumber, carrierRaw, trackingRaw) {
  const code = String(orderNumber || "").trim();
  if (!code) return { missing: true };
  const order = await env.DB.prepare("SELECT * FROM orders WHERE code = ?").bind(code).first();
  if (!order) return { unknown: true };
  if (order.status === "shipped") return { already: true, code };

  const carrier = String(carrierRaw || "").slice(0, 60);
  const tracking = String(trackingRaw || "").slice(0, 120);
  const note = [order.notes, `Shipped ${carrier} ${tracking}`.trim()].filter(Boolean).join("\n");
  await env.DB.prepare("UPDATE orders SET status = 'shipped', notes = ? WHERE id = ?")
    .bind(note, order.id).run();

  if (order.email) {
    const track = tracking
      ? `<p style="font-family:Helvetica,Arial,sans-serif">Carrier: <strong>${esc(carrier || "—")}</strong><br>
           Tracking: <strong>${esc(tracking)}</strong></p>`
      : "";
    await sendMail(env, {
      to: order.email,
      subject: `Your Ner Shava order ${order.code} is on its way`,
      html: `<div style="font-family:Georgia,serif;max-width:560px;color:#241a17">
        <h2 style="color:#5C1A22;margin:0 0 4px">Ner Shava Candles</h2>
        <p style="font-family:Helvetica,Arial,sans-serif">Your order <strong>${esc(order.code)}</strong> has shipped.</p>
        ${track}
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#777">
          Questions? Call ${PHONE} ext. 102.<br>${esc(LEGAL)}</p></div>`,
    }).catch(() => {});
  }
  return { ok: true, code: order.code };
}

/* ── ShipStation custom store ──────────────────────────────────────────
   The integration David can actually use: he picks "Custom Store" in
   ShipStation and pastes one URL. Works on every ShipStation plan and
   needs no API keys — unlike the V1 API, which is deprecated and gated
   behind their higher tiers.

   ShipStation calls this one endpoint with HTTP Basic auth:
     GET  ?action=export&start_date=..&end_date=..&page=N  → XML of orders
     POST ?action=shipnotify&order_number=..&carrier=..&tracking_number=..
   Dates are ShipStation's documented MM/dd/yyyy HH:mm. If orders ever fail
   to import, that format is the first thing to check. */

const ssDate = (sql) => {
  // "2026-08-03 23:42:28" (UTC, from SQLite) → "08/03/2026 23:42"
  const d = new Date(String(sql || "").replace(" ", "T") + "Z");
  if (isNaN(d)) return "";
  const p = (n) => String(n).padStart(2, "0");
  return `${p(d.getUTCMonth() + 1)}/${p(d.getUTCDate())}/${d.getUTCFullYear()} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`;
};

// ShipStation's guide recommends CDATA for free text; strip the one sequence
// that could close it early.
const cdata = (v) => `<![CDATA[${String(v == null ? "" : v).replace(/]]>/g, "]]")}]]>`;

async function shipStationStore(req, env, url, method) {
  const user = env.FULFILMENT_USER, pass = env.FULFILMENT_PASS;
  if (!user || !pass) return new Response("Custom store is not enabled.", { status: 503 });
  const header = req.headers.get("Authorization") || "";
  const expected = "Basic " + btoa(`${user}:${pass}`);
  if (header.length !== expected.length || !timingSafeEqual(header, expected))
    return new Response("Unauthorised.", {
      status: 401, headers: { "WWW-Authenticate": 'Basic realm="shipstation"' },
    });

  const action = (url.searchParams.get("action") || "").toLowerCase();

  if (action === "shipnotify") {
    // ShipStation sends these on the query string; accept a form/JSON body too.
    let body = {};
    if (method === "POST") {
      const raw = await req.text().catch(() => "");
      if (raw.trim().startsWith("{")) { try { body = JSON.parse(raw); } catch {} }
      else if (raw) body = Object.fromEntries(new URLSearchParams(raw));
    }
    const pick = (k) => url.searchParams.get(k) || body[k] || "";
    const result = await markShipped(env, pick("order_number"),
      [pick("carrier"), pick("service")].filter(Boolean).join(" "), pick("tracking_number"));
    if (result.missing) return new Response("Error: order_number is required.", { status: 400 });
    if (result.unknown) return new Response("Error: unknown order.", { status: 404 });
    return new Response("success", { headers: { "Content-Type": "text/plain" } });
  }

  if (action === "export") {
    const from = url.searchParams.get("start_date");
    const to = url.searchParams.get("end_date");
    // ShipStation sends MM/dd/yyyy HH:mm; convert back to SQLite's format.
    const toSql = (v) => {
      const m = String(v || "").match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2}))?/);
      if (!m) return null;
      return `${m[3]}-${m[1]}-${m[2]} ${m[4] || "00"}:${m[5] || "00"}:00`;
    };
    const lo = toSql(from), hi = toSql(to);
    const where = ["payment_status IN ('paid','terms')", "status NOT IN ('shipped','cancelled')"];
    const binds = [];
    if (lo) { where.push("created_at >= ?"); binds.push(lo); }
    if (hi) { where.push("created_at <= ?"); binds.push(hi); }
    const { results } = await env.DB.prepare(
      `SELECT * FROM orders WHERE ${where.join(" AND ")} ORDER BY created_at LIMIT 100`).bind(...binds).all();

    const blocks = [];
    for (const o of results || []) {
      const full = await orderWithItems(env, o);
      const name = full.name || full.business || "Customer";
      const items = full.items.map((i) => `      <Item>
        <SKU>${cdata(i.sku || "")}</SKU>
        <Name>${cdata(i.unit_label ? `${i.name} (${i.unit_label})` : i.name)}</Name>
        <Quantity>${i.qty}</Quantity>
        <UnitPrice>${(i.unit_price_cents / 100).toFixed(2)}</UnitPrice>
      </Item>`).join("\n");
      // Wholesale quantities are CASES — say so where the packer will see it.
      const notes = full.kind === "wholesale"
        ? `WHOLESALE${full.business ? ` — ${full.business}` : ""}. Quantities are CASES, not single boxes.`
        : "";
      blocks.push(`  <Order>
    <OrderNumber>${cdata(full.code)}</OrderNumber>
    <OrderDate>${ssDate(full.created_at)}</OrderDate>
    <OrderStatus>${cdata(full.status === "paid" ? "paid" : full.status)}</OrderStatus>
    <LastModified>${ssDate(full.created_at)}</LastModified>
    <ShippingMethod>${cdata(full.kind === "wholesale" ? "Freight — quoted by office" : "Standard")}</ShippingMethod>
    <OrderTotal>${(full.total_cents / 100).toFixed(2)}</OrderTotal>
    <TaxAmount>0.00</TaxAmount>
    <ShippingAmount>${(full.shipping_cents / 100).toFixed(2)}</ShippingAmount>
    ${notes ? `<InternalNotes>${cdata(notes)}</InternalNotes>` : ""}
    <Customer>
      <CustomerCode>${cdata(full.email || full.code)}</CustomerCode>
      <BillTo>
        <Name>${cdata(name)}</Name>
        <Company>${cdata(full.business || "")}</Company>
        <Phone>${cdata(full.phone || "")}</Phone>
        <Email>${cdata(full.email || "")}</Email>
      </BillTo>
      <ShipTo>
        <Name>${cdata(name)}</Name>
        <Company>${cdata(full.business || "")}</Company>
        <Address1>${cdata(full.ship_line1 || "")}</Address1>
        <Address2>${cdata(full.ship_line2 || "")}</Address2>
        <City>${cdata(full.ship_city || "")}</City>
        <State>${cdata(full.ship_state || "")}</State>
        <PostalCode>${cdata(full.ship_zip || "")}</PostalCode>
        <Country>${cdata(full.ship_country || "US")}</Country>
        <Phone>${cdata(full.phone || "")}</Phone>
      </ShipTo>
    </Customer>
    <Items>
${items}
    </Items>
  </Order>`);
    }

    return new Response(
      `<?xml version="1.0" encoding="utf-8"?>\n<Orders pages="1">\n${blocks.join("\n")}\n</Orders>`,
      { headers: { "Content-Type": "text/xml; charset=utf-8" } });
  }

  // No action, or one we don't know: answer with a valid empty order list
  // rather than an error. ShipStation pings the bare URL when you connect a
  // custom store, and a 400 there reads as "connection failed". Still behind
  // auth, so this leaks nothing.
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>\n<Orders pages="1"></Orders>`,
    { headers: { "Content-Type": "text/xml; charset=utf-8" } });
}

// Pull side: a fulfilment partner polls for orders and posts shipments back.
async function fulfilmentApi(req, env, url, path, method) {
  const user = env.FULFILMENT_USER, pass = env.FULFILMENT_PASS;
  if (!user || !pass) return json({ error: "Fulfilment API is not enabled." }, 503);
  const header = req.headers.get("Authorization") || "";
  const expected = "Basic " + btoa(`${user}:${pass}`);
  if (header.length !== expected.length || !timingSafeEqual(header, expected))
    return json({ error: "Unauthorised." }, 401, { "WWW-Authenticate": 'Basic realm="fulfilment"' });

  if (path === "/api/fulfilment/orders" && method === "GET") {
    const since = url.searchParams.get("since");
    const { results } = await env.DB.prepare(`
      SELECT * FROM orders
      WHERE payment_status IN ('paid','terms') AND status NOT IN ('shipped','cancelled')
        ${since ? "AND created_at >= ?" : ""}
      ORDER BY created_at LIMIT 200`).bind(...(since ? [since] : [])).all();
    const orders = [];
    for (const o of results || []) {
      const full = await orderWithItems(env, o);
      orders.push({
        order_number: full.code,
        order_date: full.created_at,
        kind: full.kind,
        status: full.status,
        email: full.email,
        phone: full.phone,
        ship_to: {
          name: full.name, company: full.business,
          line1: full.ship_line1, line2: full.ship_line2,
          city: full.ship_city, state: full.ship_state,
          postal_code: full.ship_zip, country: full.ship_country || "US",
        },
        // wholesale quantities are CASES, not individual units
        unit_of_measure: full.kind === "wholesale" ? "case" : "each",
        items: full.items.map((i) => ({
          sku: i.sku, name: i.name, unit_label: i.unit_label,
          quantity: i.qty, unit_price: i.unit_price_cents / 100,
        })),
        totals: {
          subtotal: full.subtotal_cents / 100,
          shipping: full.shipping_cents / 100,
          total: full.total_cents / 100,
        },
      });
    }
    return json({ count: orders.length, orders });
  }

  if (path === "/api/fulfilment/shipped" && method === "POST") {
    const body = await req.json().catch(() => ({}));
    const result = await markShipped(env, body.order_number, body.carrier, body.tracking_number);
    if (result.missing) return json({ error: "order_number is required." }, 400);
    if (result.unknown) return json({ error: "Unknown order." }, 404);
    if (result.already) return json({ ok: true, already: true });
    return json({ ok: true, order: result.code, status: "shipped" });
  }

  return json({ error: "Not found." }, 404);
}

async function afterPaid(env, order) {
  const full = await orderWithItems(env, order);
  await pushToShipStation(env, full);
  const body = orderEmailHtml(full);
  const tasks = [sendMail(env, {
    to: notifyAddress(env),
    subject: `New ${full.kind} order ${full.code} — ${money(full.total_cents)}`,
    html: body,
    replyTo: full.email || undefined,
  })];
  if (full.email) tasks.push(sendMail(env, {
    to: full.email,
    subject: `Your Ner Shava order ${full.code}`,
    html: body,
  }));
  await Promise.allSettled(tasks);
}

async function pageOrderSuccess(env, url, ctx) {
  const sessionId = url.searchParams.get("session_id");
  let order = null;
  if (sessionId) {
    order = await env.DB.prepare("SELECT * FROM orders WHERE stripe_session_id = ?")
      .bind(sessionId).first();
    if (order && order.payment_status !== "paid" && env.STRIPE_SECRET_KEY) {
      try {
        const session = await stripeCall(env, `checkout/sessions/${sessionId}`, null, "GET");
        if (session.payment_status === "paid") {
          order = await markPaid(env, order, session);
          ctx.waitUntil(afterPaid(env, order));
        }
      } catch { /* fall through — webhook will catch it */ }
    }
  }
  const full = order ? await orderWithItems(env, order) : null;

  const body = `
<section class="wrap section narrow center order-done">
  <img src="/assets/img/logo.png" alt="" width="60" height="88">
  <h1>A hartzigen dank.</h1>
  ${full ? `<p class="lede">Your order <strong>${esc(full.code)}</strong> is in. A confirmation is on its way to ${esc(full.email || "your inbox")}.</p>
  <div class="order-summary">
    ${full.items.map((i) => `<div class="order-line">
      <span>${esc(i.name)}${i.unit_label ? ` <small>${esc(i.unit_label)}</small>` : ""} × ${i.qty}</span>
      <span>${money(i.line_total_cents)}</span></div>`).join("")}
    <div class="order-line quiet"><span>Shipping</span><span>${full.shipping_cents ? money(full.shipping_cents) : "Free"}</span></div>
    <div class="order-line total"><span>Total</span><span>${money(full.total_cents)}</span></div>
  </div>`
    : `<p class="lede">Your payment went through. If you don't see a confirmation email in a few minutes, please call the office on ${PHONE}.</p>`}
  <p class="mt"><a class="btn btn-outline" href="/candles">Continue shopping</a></p>
</section>
<script>try{localStorage.removeItem('ns_cart')}catch(e){}</script>`;
  return layout({ title: "Order confirmed", body });
}

async function stripeWebhook(req, env, ctx) {
  const secret = env.STRIPE_WEBHOOK_SECRET;
  const sigHeader = req.headers.get("Stripe-Signature") || "";
  const payload = await req.text();
  if (!secret) return json({ error: "webhook not configured" }, 503);

  const parts = Object.fromEntries(sigHeader.split(",").map((p) => p.split("=")));
  const expected = await hmacHex(secret, `${parts.t}.${payload}`);
  if (!parts.v1 || !timingSafeEqual(expected, parts.v1)) return json({ error: "bad signature" }, 400);
  if (Math.abs(Date.now() / 1000 - Number(parts.t)) > 300) return json({ error: "stale" }, 400);

  const event = JSON.parse(payload);
  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    const session = event.data.object;
    const order = await env.DB.prepare("SELECT * FROM orders WHERE stripe_session_id = ? OR code = ?")
      .bind(session.id, session.client_reference_id || "").first();
    if (order && order.payment_status !== "paid" && session.payment_status === "paid") {
      const updated = await markPaid(env, order, session);
      ctx.waitUntil(afterPaid(env, updated));
    }
  }
  return json({ received: true });
}

/* ── wholesale portal ──────────────────────────────────────────────────── */

async function accountFromSession(req, env) {
  const id = await shopSession(req, env);
  if (!id) return null;
  return env.DB.prepare("SELECT * FROM accounts WHERE id = ? AND status = 'approved'")
    .bind(id).first();
}

function pageWholesaleLogin(error, email) {
  const body = `
<section class="wrap section narrow">
  <div class="auth-card">
    <h1>Wholesale login</h1>
    <p class="quiet">For approved Ner Shava store accounts.</p>
    ${error ? `<div class="notice bad">${esc(error)}</div>` : ""}
    <form class="form" method="post" action="/wholesale/login">
      <label>Email<input type="email" name="email" required autocomplete="email" value="${esc(email || "")}"></label>
      <label>Password<input type="password" name="password" required autocomplete="current-password"></label>
      <button class="btn btn-gold" type="submit">Log in</button>
    </form>
    <p class="quiet mt">No account yet? <a href="/wholesale">Send a wholesale enquiry</a> and the office will set one up.<br>
    Forgotten your password? Call <a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a>.</p>
  </div>
</section>`;
  return layout({ title: "Wholesale login", body, path: "/wholesale" });
}

async function pageWholesaleAccount(env, account, url) {
  const settings = await getSettings(env);
  const { results: products } = await env.DB.prepare(
    "SELECT * FROM products WHERE wholesale_active = 1 ORDER BY collection, sort").all();
  const { results: collections } = await env.DB.prepare(
    "SELECT * FROM collections ORDER BY sort").all();
  const { results: orders } = await env.DB.prepare(
    "SELECT * FROM orders WHERE account_id = ? ORDER BY created_at DESC LIMIT 15")
    .bind(account.id).all();

  const collName = Object.fromEntries(collections.map((c) => [c.slug, c.name]));
  const grouped = {};
  for (const p of products) (grouped[p.collection] ||= []).push(p);

  const priceOf = (p) => account.discount_pct
    ? Math.round(p.wholesale_price_cents * (100 - account.discount_pct) / 100)
    : p.wholesale_price_cents;

  const body = `
<section class="page-head slim">
  <div class="wrap head-flex">
    <div>
      <p class="eyebrow">Wholesale account</p>
      <h1>${esc(account.business)}</h1>
      <p class="quiet">${esc(account.contact || "")}${account.discount_pct ? ` · ${account.discount_pct}% account discount` : ""} · Terms: ${account.terms === "net30" ? "Net 30" : "Card on order"}</p>
    </div>
    <form method="post" action="/wholesale/logout"><button class="btn btn-outline btn-sm">Log out</button></form>
  </div>
</section>

<section class="wrap section">
  ${url.searchParams.get("placed") ? `<div class="notice ok"><strong>Order received.</strong> Reference ${esc(url.searchParams.get("placed"))}. The office will confirm and invoice you.</div>` : ""}
  <div class="wholesale-layout">
    <div>
      <h2>Order form</h2>
      <p class="quiet">Prices shown are per case. Minimum order ${money(settings.wholesaleMin)}.</p>
      <form id="wh-form">
      ${Object.entries(grouped).map(([slug, list]) => `
        <h3 class="wh-group">${esc(collName[slug] || slug)}</h3>
        <table class="wh-table">
          <thead><tr><th>Product</th><th>Item #</th><th>Case</th><th>Case price</th><th>Qty</th></tr></thead>
          <tbody>
          ${list.map((p) => `<tr>
            <td data-label="Product"><strong>${esc(p.name)}</strong><br><small class="quiet">${esc(p.unit_label || "")}</small></td>
            <td data-label="Item #"><small class="quiet">${esc(p.sku || "—")}</small></td>
            <td data-label="Case">${p.case_qty}</td>
            <td data-label="Case price"><strong>${money(priceOf(p))}</strong><br><small class="quiet">${money(Math.round(priceOf(p) / Math.max(1, p.case_qty)))}/unit</small></td>
            <td data-label="Qty"><input type="number" min="0" max="999" value="0" data-wh-qty="${esc(p.slug)}" data-price="${priceOf(p)}" inputmode="numeric"></td>
          </tr>`).join("")}
          </tbody>
        </table>`).join("")}
      </form>
    </div>
    <aside class="wh-side">
      <div class="wh-summary">
        <h3>Your order</h3>
        <div id="wh-lines"><p class="quiet">Nothing added yet.</p></div>
        <div class="order-line total"><span>Total</span><span id="wh-total">$0.00</span></div>
        <p class="quiet fineprint" id="wh-min" hidden>Minimum order is ${money(settings.wholesaleMin)}.</p>
        <div class="wh-actions">
          <button class="btn btn-gold" type="button" id="wh-pay">Pay by card</button>
          ${account.terms === "net30" ? `<button class="btn btn-outline" type="button" id="wh-terms">Place on Net 30</button>` : ""}
        </div>
        <p class="fineprint quiet">Freight is quoted separately by the office and is not included above.</p>
      </div>
    </aside>
  </div>
</section>

${orders.length ? `<section class="wrap section">
  <h2>Recent orders</h2>
  <table class="table">
    <thead><tr><th>Order</th><th>Date</th><th>Total</th><th>Status</th></tr></thead>
    <tbody>${orders.map((o) => `<tr>
      <td data-label="Order">${esc(o.code)}</td>
      <td data-label="Date">${esc((o.created_at || "").slice(0, 10))}</td>
      <td data-label="Total">${money(o.total_cents)}</td>
      <td data-label="Status"><span class="pill pill-${esc(o.status)}">${esc(o.status)}</span></td>
    </tr>`).join("")}</tbody>
  </table>
</section>` : ""}
<script>window.NS_WHOLESALE = { min: ${settings.wholesaleMin} };</script>`;

  return layout({ title: "Wholesale account", body, path: "/wholesale", bodyClass: "wholesale" });
}

async function apiWholesaleTerms(req, env) {
  const account = await accountFromSession(req, env);
  if (!account) return json({ error: "Not signed in." }, 401);
  if (account.terms !== "net30") return json({ error: "Your account is set to card payment." }, 403);
  const payload = await req.json().catch(() => ({}));
  const quote = await quoteCart(env, payload.items, "wholesale", account);
  if (!quote.lines.length) return json({ error: "Your order is empty." }, 400);
  const settings = await getSettings(env);
  if (quote.subtotal < settings.wholesaleMin)
    return json({ error: `Wholesale orders have a ${money(settings.wholesaleMin)} minimum.` }, 400);

  const { orderId, code } = await createOrder(env, { kind: "wholesale", quote, account });
  await env.DB.prepare("UPDATE orders SET status = 'processing', payment_status = 'terms' WHERE id = ?")
    .bind(orderId).run();
  const order = await env.DB.prepare("SELECT * FROM orders WHERE id = ?").bind(orderId).first();
  const full = await orderWithItems(env, order);
  await sendMail(env, {
    to: notifyAddress(env),
    subject: `Net 30 wholesale order ${code} — ${esc(account.business)} — ${money(quote.total)}`,
    html: orderEmailHtml(full),
    replyTo: account.email,
  });
  return json({ ok: true, code });
}

/* ── forms ─────────────────────────────────────────────────────────────── */

async function formBody(req) {
  const fd = await req.formData();
  const out = {};
  for (const [k, v] of fd.entries()) out[k] = typeof v === "string" ? v.trim() : v;
  return out;
}

async function handleInquiry(req, env, kind) {
  const f = await formBody(req);
  if (!f.email || !f.name) return null;
  await env.DB.prepare(`
    INSERT INTO inquiries (kind, name, business, email, phone, city, store_type, message)
    VALUES (?,?,?,?,?,?,?,?)`)
    .bind(kind, f.name, f.business || null, f.email, f.phone || null,
      f.city || null, f.store_type || null, f.message || null).run();

  const rows = [["Name", f.name], ["Business", f.business], ["Email", f.email],
    ["Phone", f.phone], ["City", f.city], ["Type", f.store_type], ["Message", f.message]]
    .filter((r) => r[1])
    .map(([k, v]) => `<tr><td style="padding:4px 14px 4px 0;color:#777">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
    .join("");
  await sendMail(env, {
    to: notifyAddress(env),
    subject: kind === "wholesale"
      ? `Wholesale enquiry — ${f.business || f.name}`
      : `Website message — ${f.name}`,
    html: `<div style="font-family:Helvetica,Arial,sans-serif"><h2 style="color:#5C1A22">${kind === "wholesale" ? "Wholesale enquiry" : "Website message"}</h2><table>${rows}</table></div>`,
    replyTo: f.email,
  });
  return true;
}

/* ── admin ─────────────────────────────────────────────────────────────── */

function adminLayout(title, body, active) {
  const tabs = [["/admin/orders", "Orders"], ["/admin/products", "Products"],
    ["/admin/wholesale", "Wholesale"], ["/admin/inquiries", "Enquiries"],
    ["/admin/settings", "Settings"]];
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — Ner Shava admin</title>
<link rel="icon" href="/assets/img/logo.png">
<link rel="stylesheet" href="/assets/site.css?v=${ASSET_VERSION}">
</head><body class="admin">
<header class="admin-head">
  <div class="wrap admin-head-in">
    <a class="admin-brand" href="/admin/orders"><img src="/assets/img/logo.png" alt="" width="24" height="35"> Ner Shava admin</a>
    <nav>${tabs.map(([h, l]) => `<a href="${h}"${active === h ? ' class="on"' : ""}>${l}</a>`).join("")}</nav>
    <form method="post" action="/admin/logout"><button class="btn btn-sm btn-outline">Log out</button></form>
  </div>
</header>
<main class="wrap admin-main">${body}</main>
</body></html>`;
}

function adminLogin(error) {
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ner Shava admin</title><link rel="stylesheet" href="/assets/site.css?v=${ASSET_VERSION}">
<link rel="icon" href="/assets/img/logo.png"></head>
<body class="admin admin-login"><div class="auth-card">
<img src="/assets/img/logo.png" alt="" width="44" height="64">
<h1>Ner Shava admin</h1>
${error ? `<div class="notice bad">${esc(error)}</div>` : ""}
<form class="form" method="post" action="/admin">
  <label>Email<input type="email" name="email" required autocomplete="username"></label>
  <label>Password<input type="password" name="password" required autocomplete="current-password"></label>
  <button class="btn btn-gold" type="submit">Log in</button>
</form></div></body></html>`;
}

async function adminOrders(env, url) {
  const status = url.searchParams.get("status") || "";
  const where = status ? "WHERE status = ?" : "";
  const stmt = env.DB.prepare(
    `SELECT * FROM orders ${where} ORDER BY created_at DESC LIMIT 100`);
  const { results } = await (status ? stmt.bind(status) : stmt).all();
  const paid = await env.DB.prepare(
    "SELECT COUNT(*) n, COALESCE(SUM(total_cents),0) t FROM orders WHERE payment_status IN ('paid','terms')").first();

  const body = `
<div class="admin-topline">
  <h1>Orders</h1>
  <div class="stat"><strong>${paid.n}</strong><span>orders placed</span></div>
  <div class="stat"><strong>${money(paid.t)}</strong><span>total value</span></div>
</div>
<p class="filters"><a href="/admin/orders"${!status ? ' class="on"' : ""}>All</a>
${ORDER_STATUSES.map((s) => `<a href="/admin/orders?status=${s}"${status === s ? ' class="on"' : ""}>${s}</a>`).join("")}</p>
<table class="table">
<thead><tr><th>Order</th><th>Date</th><th>Customer</th><th>Kind</th><th>Total</th><th>Payment</th><th>Status</th></tr></thead>
<tbody>${results.map((o) => `<tr>
  <td data-label="Order"><a href="/admin/orders/${o.id}">${esc(o.code)}</a></td>
  <td data-label="Date">${esc((o.created_at || "").slice(0, 16))}</td>
  <td data-label="Customer">${esc(o.business || o.name || o.email || "—")}</td>
  <td data-label="Kind">${esc(o.kind)}</td>
  <td data-label="Total">${money(o.total_cents)}</td>
  <td data-label="Payment"><span class="pill pill-${esc(o.payment_status)}">${esc(o.payment_status)}</span></td>
  <td data-label="Status"><span class="pill pill-${esc(o.status)}">${esc(o.status)}</span></td>
</tr>`).join("") || `<tr><td colspan="7" class="quiet">No orders yet.</td></tr>`}</tbody></table>`;
  return adminLayout("Orders", body, "/admin/orders");
}

async function adminOrderDetail(env, id) {
  const order = await env.DB.prepare("SELECT * FROM orders WHERE id = ?").bind(id).first();
  if (!order) return null;
  const full = await orderWithItems(env, order);
  const addr = [full.ship_line1, full.ship_line2,
    [full.ship_city, full.ship_state, full.ship_zip].filter(Boolean).join(", "), full.ship_country]
    .filter(Boolean).map(esc).join("<br>");

  const body = `
<p class="crumb"><a href="/admin/orders">← Orders</a></p>
<div class="admin-topline"><h1>${esc(full.code)}</h1>
  <span class="pill pill-${esc(full.status)}">${esc(full.status)}</span>
  <span class="pill pill-${esc(full.payment_status)}">${esc(full.payment_status)}</span></div>
<div class="admin-cols">
  <div>
    <table class="table">
      <thead><tr><th>Item</th><th>Item #</th><th>Unit</th><th>Qty</th><th>Total</th></tr></thead>
      <tbody>${full.items.map((i) => `<tr>
        <td data-label="Item">${esc(i.name)}<br><small class="quiet">${esc(i.unit_label || "")}</small></td>
        <td data-label="Item #"><small class="quiet">${esc(i.sku || "—")}</small></td>
        <td data-label="Unit">${money(i.unit_price_cents)}</td>
        <td data-label="Qty">${i.qty}</td>
        <td data-label="Total">${money(i.line_total_cents)}</td></tr>`).join("")}</tbody>
      <tfoot>
        <tr><td colspan="4" class="ar quiet">Subtotal</td><td>${money(full.subtotal_cents)}</td></tr>
        <tr><td colspan="4" class="ar quiet">Shipping</td><td>${full.shipping_cents ? money(full.shipping_cents) : "Free"}</td></tr>
        <tr><td colspan="4" class="ar"><strong>Total</strong></td><td><strong>${money(full.total_cents)}</strong></td></tr>
      </tfoot>
    </table>
  </div>
  <aside>
    <div class="panel">
      <h3>Customer</h3>
      <p>${esc(full.business || "")}${full.business ? "<br>" : ""}${esc(full.name || "—")}<br>
      ${full.email ? `<a href="mailto:${esc(full.email)}">${esc(full.email)}</a><br>` : ""}
      ${full.phone ? esc(full.phone) : ""}</p>
      ${addr ? `<h3>Ship to</h3><p>${addr}</p>` : ""}
      <h3>Update</h3>
      <form class="form" method="post" action="/admin/orders/${full.id}">
        <label>Status<select name="status">${ORDER_STATUSES.map((s) =>
          `<option${s === full.status ? " selected" : ""}>${s}</option>`).join("")}</select></label>
        <label>Payment<select name="payment_status">${["unpaid", "paid", "terms"].map((s) =>
          `<option${s === full.payment_status ? " selected" : ""}>${s}</option>`).join("")}</select></label>
        <label>Internal notes<textarea name="notes" rows="3">${esc(full.notes || "")}</textarea></label>
        <button class="btn btn-gold btn-sm" type="submit">Save</button>
      </form>
    </div>
  </aside>
</div>`;
  return adminLayout(full.code, body, "/admin/orders");
}

const PRODUCT_SORTS = {
  category: "collection, sort, name",
  name: "name",
  "price-low": "retail_price_cents, name",
  "price-high": "retail_price_cents DESC, name",
  "home-order": "CASE WHEN home_position > 0 THEN 0 ELSE 1 END, home_position, name",
  sale: "CASE WHEN sale_price_cents > 0 AND sale_price_cents < retail_price_cents THEN 0 ELSE 1 END, name",
  newest: "created_at DESC, id DESC",
};

async function adminProducts(env, url) {
  const filter = url.searchParams.get("collection") || "";
  const sortKey = PRODUCT_SORTS[url.searchParams.get("sort")] ? url.searchParams.get("sort") : "category";
  const { results: collections } = await env.DB.prepare(
    "SELECT slug, name FROM collections ORDER BY sort").all();
  const valid = collections.some((c) => c.slug === filter);

  const sql = `SELECT * FROM products ${valid ? "WHERE collection = ?" : ""} ORDER BY ${PRODUCT_SORTS[sortKey]}`;
  const stmt = env.DB.prepare(sql);
  const { results } = await (valid ? stmt.bind(filter) : stmt).all();
  const total = await env.DB.prepare("SELECT COUNT(*) n FROM products").first();
  const settings = await getSettings(env);
  const collName = Object.fromEntries(collections.map((c) => [c.slug, c.name]));
  const qs = (over) => {
    const p = new URLSearchParams();
    const next = { collection: filter, sort: sortKey, ...over };
    if (next.collection) p.set("collection", next.collection);
    if (next.sort && next.sort !== "category") p.set("sort", next.sort);
    const s = p.toString();
    return "/admin/products" + (s ? "?" + s : "");
  };

  const body = `
<div class="admin-topline">
  <h1>Products</h1>
  <span class="quiet">${results.length}${valid ? ` of ${total.n}` : ""} items</span>
  <a class="btn btn-gold btn-sm push-right" href="/admin/products/new">+ Add a product</a>
</div>
${settings.pricesProvisional ? `<div class="notice warn"><strong>Prices are provisional.</strong> The figures below are placeholders put in when the site was built — confirm every retail and case price with the office, then switch this warning off under <a href="/admin/settings">Settings</a>.</div>` : ""}
${url.searchParams.get("saved") ? `<div class="notice ok">Saved.</div>` : ""}
${url.searchParams.get("added") ? `<div class="notice ok">Product added.</div>` : ""}
${url.searchParams.get("deleted") ? `<div class="notice ok">Product deleted.</div>` : ""}

<div class="toolbar">
  <p class="filters">
    <a href="${qs({ collection: "" })}"${!valid ? ' class="on"' : ""}>All categories</a>
    ${collections.map((c) => `<a href="${qs({ collection: c.slug })}"${filter === c.slug ? ' class="on"' : ""}>${esc(c.name)}</a>`).join("")}
    <a href="/admin/collections" class="ghosty">Manage categories →</a>
  </p>
  <p class="sorter">
    <span class="quiet">Sort</span>
    ${[["category", "Category"], ["name", "Name"], ["price-low", "Price ↑"], ["price-high", "Price ↓"], ["home-order", "Home order"], ["sale", "On sale"], ["newest", "Newest"]]
      .map(([k, l]) => `<a href="${qs({ sort: k })}"${sortKey === k ? ' class="on"' : ""}>${l}</a>`).join("")}
  </p>
</div>

<table class="table compact">
<thead><tr><th></th><th>Product</th><th>Item #</th><th>Retail</th><th>Case qty</th><th>Case price</th><th>Home</th><th>Live</th><th></th></tr></thead>
<tbody>${results.map((p) => `<tr>
  <td data-label=""><img class="row-thumb" src="${esc(imageUrl(p.image))}" alt="" loading="lazy" width="46" height="46"></td>
  <td data-label="Product"><strong>${esc(p.name)}</strong><br><small class="quiet">${esc(collName[p.collection] || p.collection)}</small></td>
  <td data-label="Item #"><small class="quiet">${esc(p.sku || "—")}</small></td>
  <td data-label="Retail">${onSale(p)
      ? `<strong>${money(p.sale_price_cents)}</strong> <s class="quiet">${money(p.retail_price_cents)}</s>`
      : money(p.retail_price_cents)}</td>
  <td data-label="Case qty">${p.case_qty}</td>
  <td data-label="Case price">${money(p.wholesale_price_cents)}</td>
  <td data-label="Home">${p.home_position ? `#${p.home_position}` : "<span class='quiet'>—</span>"}</td>
  <td data-label="Live">${p.retail_active ? "Shop" : ""}${p.retail_active && p.wholesale_active ? " · " : ""}${p.wholesale_active ? "Wholesale" : ""}${!p.retail_active && !p.wholesale_active ? "<span class='quiet'>hidden</span>" : ""}</td>
  <td data-label=""><a class="btn btn-sm btn-outline" href="/admin/products/${p.id}">Edit</a></td>
</tr>`).join("") || `<tr><td colspan="9" class="quiet">No products in this category yet.</td></tr>`}</tbody></table>`;
  return adminLayout("Products", body, "/admin/products");
}

async function adminCollections(env, url) {
  const { results } = await env.DB.prepare(`
    SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.collection = c.slug) AS n
    FROM collections c ORDER BY c.sort`).all();
  const msg = url.searchParams.get("msg");
  const body = `
<div class="admin-topline"><h1>Categories</h1><span class="quiet">${results.length} categories</span></div>
${msg ? `<div class="notice ${url.searchParams.get("bad") ? "bad" : "ok"}">${esc(msg)}</div>` : ""}
<p class="quiet">Categories are the collections shoppers browse. The lower the sort number, the earlier it appears. A category has to be empty before it can be deleted.</p>
<table class="table">
<thead><tr><th></th><th>Category</th><th>Blurb</th><th>Products</th><th>Sort</th><th></th></tr></thead>
<tbody>${results.map((c) => `<tr>
  <td data-label=""><img class="row-thumb" src="${esc(imageUrl(c.image))}" alt="" loading="lazy" width="46" height="46"></td>
  <td data-label="Category"><strong>${esc(c.name)}</strong><br><small class="quiet">/candles/${esc(c.slug)}</small></td>
  <td data-label="Blurb"><small class="quiet">${esc(c.blurb || "—")}</small></td>
  <td data-label="Products">${c.n}</td>
  <td data-label="Sort">${c.sort}</td>
  <td data-label="">
    <details class="rowform"><summary class="btn btn-sm btn-outline">Edit</summary>
      <form class="form" method="post" action="/admin/collections">
        <input type="hidden" name="slug" value="${esc(c.slug)}">
        <label>Name<input name="name" value="${esc(c.name)}" required></label>
        <label>Blurb<input name="blurb" value="${esc(c.blurb || "")}"></label>
        <div class="row">
          <label>Image file<input name="image" value="${esc(c.image || "")}"></label>
          <label>Sort<input name="sort" value="${c.sort}" inputmode="numeric"></label>
        </div>
        <div class="btn-row">
          <button class="btn btn-gold btn-sm" type="submit">Save</button>
          ${c.n === 0 ? `<button class="btn btn-sm btn-danger" type="submit" name="action" value="delete"
            onclick="return confirm('Delete the ${esc(c.name)} category?')">Delete</button>` : ""}
        </div>
      </form>
    </details>
  </td>
</tr>`).join("")}</tbody></table>

<h2 class="mt">Add a category</h2>
<form class="form panel narrow" method="post" action="/admin/collections">
  <label>Name <span class="req">*</span><input name="name" required placeholder="e.g. Neronim"></label>
  <label>Blurb<input name="blurb" placeholder="One line shown under the category name"></label>
  <div class="row">
    <label>Image file<input name="image" placeholder="e.g. tealights.png"></label>
    <label>Sort<input name="sort" value="${results.length + 1}" inputmode="numeric"></label>
  </div>
  <button class="btn btn-gold" type="submit">Add category</button>
</form>`;
  return adminLayout("Categories", body, "/admin/products");
}

// Renders the create form when `p` is null, otherwise the edit form.
async function adminProductDetail(env, id) {
  const isNew = id === "new";
  const p = isNew
    ? { id: 0, name: "", sku: "", collection: "", blurb: "", description: "", unit_label: "",
        burn_time: "", retail_price_cents: 0, sale_price_cents: 0, case_qty: 1, wholesale_price_cents: 0, home_position: 0,
        image: "", sort: 0, retail_active: 1, wholesale_active: 1, featured: 0, slug: "" }
    : await env.DB.prepare("SELECT * FROM products WHERE id = ?").bind(id).first();
  if (!p) return null;
  const { results: collections } = await env.DB.prepare(
    "SELECT slug, name FROM collections ORDER BY sort").all();
  const action = isNew ? "/admin/products/new" : `/admin/products/${p.id}`;
  const body = `
<p class="crumb"><a href="/admin/products">← Products</a></p>
<h1>${isNew ? "Add a product" : esc(p.name)}</h1>
<div class="admin-cols">
  <form class="form panel" method="post" action="${action}" enctype="multipart/form-data">
    <label>Name<input name="name" value="${esc(p.name)}" required></label>
    <div class="row">
      <label>Item number<input name="sku" value="${esc(p.sku || "")}"></label>
      <label>Category<select name="collection" required>${isNew ? '<option value="">Choose…</option>' : ""}${collections.map((c) =>
        `<option value="${esc(c.slug)}"${c.slug === p.collection ? " selected" : ""}>${esc(c.name)}</option>`).join("")}</select></label>
    </div>
    <label>Short blurb<input name="blurb" value="${esc(p.blurb || "")}"></label>
    <label>Description<textarea name="description" rows="4">${esc(p.description || "")}</textarea></label>
    <div class="row">
      <label>Unit label<input name="unit_label" value="${esc(p.unit_label || "")}"></label>
      <label>Burn time<input name="burn_time" value="${esc(p.burn_time || "")}"></label>
    </div>
    <div class="row">
      <label>Retail price ($)<input name="retail_price" value="${(p.retail_price_cents / 100).toFixed(2)}" inputmode="decimal"></label>
      <label>Sale price ($)<input name="sale_price" value="${p.sale_price_cents ? (p.sale_price_cents / 100).toFixed(2) : ""}" inputmode="decimal" placeholder="leave empty — not on sale"></label>
    </div>
    <p class="fineprint quiet">Set a sale price below the retail price and the shop charges the sale price, shows the old one crossed out, and puts a “% off” flag on the picture. Clear the box to end the sale.</p>
    <div class="row">
      <label>Units per case<input name="case_qty" value="${p.case_qty}" inputmode="numeric"></label>
      <label>Case price ($)<input name="wholesale_price" value="${(p.wholesale_price_cents / 100).toFixed(2)}" inputmode="decimal"></label>
      <label>Home page position<input name="home_position" value="${p.home_position || ""}" inputmode="numeric" placeholder="1, 2, 3…"></label>
    </div>
    ${(() => { const c = caseSaving(p); return c && c.pct > 0
      ? `<p class="fineprint quiet">That case works out to <strong>${money(c.perUnit)}</strong> each — ${c.pct}% below the shop price, saving ${money(c.saves)} a case. Shoppers see this on the product page.</p>`
      : `<p class="fineprint quiet">Fill in units per case and the case price and the product page will show the per-unit price and the saving.</p>`; })()}
    <label>Photo<input type="file" name="photo" accept="image/*"></label>
    <p class="fineprint quiet">Choose a JPG, PNG or WebP and it will be uploaded when you save. A photo on a plain white background works best.</p>
    <div class="row">
      <label>Or an existing image file<input name="image" value="${esc(p.image || "")}" placeholder="e.g. tealights.png"></label>
      <label>Sort order<input name="sort" value="${p.sort}" inputmode="numeric"></label>
    </div>
    <div class="checks">
      <label class="check"><input type="checkbox" name="retail_active"${p.retail_active ? " checked" : ""}> Sell on the shop</label>
      <label class="check"><input type="checkbox" name="wholesale_active"${p.wholesale_active ? " checked" : ""}> Offer to wholesale</label>
      <label class="check"><input type="checkbox" name="featured"${p.featured ? " checked" : ""}> Feature on the home page</label>
    </div>
    <button class="btn btn-gold" type="submit">${isNew ? "Add product" : "Save product"}</button>
  </form>
  <aside class="panel">
    <h3>Photo</h3>
    <img class="admin-thumb" src="${esc(imageUrl(p.image))}" alt="">
    <p class="quiet fineprint">Uploaded photos are stored on Cloudflare and go live as soon as you save — no developer needed.</p>
    ${isNew ? "" : `
    <h3>On the site</h3>
    <p><a class="btn btn-sm btn-outline" href="/product/${esc(p.slug)}" target="_blank" rel="noopener">View product page</a></p>
    <h3>Remove</h3>
    <p class="quiet fineprint">Unticking both boxes above hides a product without losing it. Deleting is permanent; past orders keep their own record either way.</p>
    <form method="post" action="/admin/products/${p.id}/delete"
          onsubmit="return confirm('Permanently delete ${esc(p.name).replace(/'/g, "\\'")}?')">
      <button class="btn btn-sm btn-danger" type="submit">Delete product</button>
    </form>`}
  </aside>
</div>`;
  return adminLayout(isNew ? "Add a product" : p.name, body, "/admin/products");
}

// Saves an uploaded photo to R2 and returns an "r2:<key>" reference.
async function storePhoto(env, file, slugHint) {
  if (!file || typeof file === "string" || !file.size) return null;
  if (!env.MEDIA) return null;
  if (file.size > 6 * 1024 * 1024) throw new Error("That photo is larger than 6 MB.");
  const type = file.type || "application/octet-stream";
  if (!/^image\/(jpeg|png|webp|gif|avif)$/.test(type)) throw new Error("Please upload a JPG, PNG, WebP, GIF or AVIF.");
  const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp",
                "image/gif": "gif", "image/avif": "avif" }[type];
  const rand = [...crypto.getRandomValues(new Uint8Array(4))]
    .map((b) => b.toString(16).padStart(2, "0")).join("");
  const key = `${slugify(slugHint) || "product"}-${rand}.${ext}`;
  await env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: type } });
  return "r2:" + key;
}

async function uniqueSlug(env, base) {
  const root = slugify(base) || "product";
  for (let i = 0; i < 50; i++) {
    const candidate = i === 0 ? root : `${root}-${i + 1}`;
    const hit = await env.DB.prepare("SELECT 1 FROM products WHERE slug = ?").bind(candidate).first();
    if (!hit) return candidate;
  }
  return `${root}-${Date.now()}`;
}

async function adminWholesale(env, url) {
  const { results } = await env.DB.prepare(
    "SELECT * FROM accounts ORDER BY CASE status WHEN 'pending' THEN 0 ELSE 1 END, created_at DESC").all();
  const flash = url.searchParams.get("msg");
  const body = `
<div class="admin-topline"><h1>Wholesale accounts</h1></div>
${flash ? `<div class="notice ok">${esc(flash)}</div>` : ""}
<p class="quiet">Approve an account and set a password to give a store online ordering at case prices. Enquiries arrive under <a href="/admin/inquiries">Enquiries</a>.</p>
<table class="table">
<thead><tr><th>Business</th><th>Contact</th><th>Status</th><th>Discount</th><th>Terms</th><th></th></tr></thead>
<tbody>${results.map((a) => `<tr>
  <td data-label="Business"><strong>${esc(a.business)}</strong><br><small class="quiet">${esc(a.city || "")}${a.store_type ? ` · ${esc(a.store_type)}` : ""}</small></td>
  <td data-label="Contact">${esc(a.contact || "—")}<br><small class="quiet">${esc(a.email)}${a.phone ? ` · ${esc(a.phone)}` : ""}</small></td>
  <td data-label="Status"><span class="pill pill-${esc(a.status)}">${esc(a.status)}</span></td>
  <td data-label="Discount">${a.discount_pct}%</td>
  <td data-label="Terms">${a.terms === "net30" ? "Net 30" : "Card"}</td>
  <td data-label="">
    <details class="rowform"><summary class="btn btn-sm btn-outline">Manage</summary>
      <form class="form" method="post" action="/admin/wholesale">
        <input type="hidden" name="id" value="${a.id}">
        <div class="row">
          <label>Status<select name="status">${["pending", "approved", "rejected"].map((s) =>
            `<option${s === a.status ? " selected" : ""}>${s}</option>`).join("")}</select></label>
          <label>Discount %<input name="discount_pct" value="${a.discount_pct}" inputmode="numeric"></label>
          <label>Terms<select name="terms"><option value="card"${a.terms === "card" ? " selected" : ""}>Card on order</option><option value="net30"${a.terms === "net30" ? " selected" : ""}>Net 30</option></select></label>
        </div>
        <label>Set / reset password<input name="password" placeholder="leave blank to keep" autocomplete="new-password"></label>
        <label>Office notes<textarea name="notes" rows="2">${esc(a.notes || "")}</textarea></label>
        <button class="btn btn-gold btn-sm" type="submit">Save account</button>
      </form>
    </details>
  </td>
</tr>`).join("") || `<tr><td colspan="6" class="quiet">No wholesale accounts yet.</td></tr>`}</tbody></table>

<h2 class="mt">Add an account</h2>
<form class="form panel narrow" method="post" action="/admin/wholesale">
  <div class="row">
    <label>Business <span class="req">*</span><input name="business" required></label>
    <label>Contact name<input name="contact"></label>
  </div>
  <div class="row">
    <label>Email <span class="req">*</span><input type="email" name="email" required></label>
    <label>Phone<input name="phone"></label>
  </div>
  <div class="row">
    <label>Password <span class="req">*</span><input name="password" required autocomplete="new-password"></label>
    <label>Discount %<input name="discount_pct" value="0" inputmode="numeric"></label>
    <label>Terms<select name="terms"><option value="card">Card on order</option><option value="net30">Net 30</option></select></label>
  </div>
  <input type="hidden" name="status" value="approved">
  <button class="btn btn-gold" type="submit">Create account</button>
</form>`;
  return adminLayout("Wholesale", body, "/admin/wholesale");
}

async function adminInquiries(env) {
  const { results } = await env.DB.prepare(
    "SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 200").all();
  const body = `
<div class="admin-topline"><h1>Enquiries</h1></div>
<table class="table">
<thead><tr><th>Received</th><th>Kind</th><th>From</th><th>Message</th><th>Status</th></tr></thead>
<tbody>${results.map((q) => `<tr>
  <td data-label="Received">${esc((q.created_at || "").slice(0, 16))}</td>
  <td data-label="Kind">${esc(q.kind)}</td>
  <td data-label="From"><strong>${esc(q.business || q.name)}</strong><br>
    <small class="quiet"><a href="mailto:${esc(q.email)}">${esc(q.email)}</a>${q.phone ? `<br>${esc(q.phone)}` : ""}${q.city ? `<br>${esc(q.city)}` : ""}</small></td>
  <td data-label="Message"><div class="msg">${esc(q.message || "—")}</div></td>
  <td data-label="Status">
    <form method="post" action="/admin/inquiries" class="inline">
      <input type="hidden" name="id" value="${q.id}">
      <select name="status" onchange="this.form.submit()">${INQ_STATUSES.map((s) =>
        `<option${s === q.status ? " selected" : ""}>${s}</option>`).join("")}</select>
    </form>
  </td>
</tr>`).join("") || `<tr><td colspan="5" class="quiet">No enquiries yet.</td></tr>`}</tbody></table>`;
  return adminLayout("Enquiries", body, "/admin/inquiries");
}

async function adminSettings(env, url) {
  const s = await getSettings(env);
  const body = `
<div class="admin-topline"><h1>Settings</h1></div>
${url.searchParams.get("saved") ? `<div class="notice ok">Saved.</div>` : ""}
<form class="form panel narrow" method="post" action="/admin/settings">
  <div class="row">
    <label>Flat shipping ($)<input name="shipping_flat" value="${(s.shippingFlat / 100).toFixed(2)}" inputmode="decimal"></label>
    <label>Free shipping over ($)<input name="free_ship_over" value="${(s.freeShipOver / 100).toFixed(2)}" inputmode="decimal"></label>
  </div>
  <label>Wholesale minimum order ($)<input name="wholesale_min" value="${(s.wholesaleMin / 100).toFixed(2)}" inputmode="decimal"></label>
  <p class="fineprint quiet">The flat rate and the free-shipping figure are printed on the home page automatically — change them here and the page follows.</p>
  <label>Products per row on the home page
    <select name="home_columns">${[2, 3, 4, 5].map((n) =>
      `<option value="${n}"${n === s.homeColumns ? " selected" : ""}>${n} across</option>`).join("")}</select></label>
  <div class="checks">
    <label class="check"><input type="checkbox" name="store_live"${s.storeLive ? " checked" : ""}> Shop is open for orders</label>
    <label class="check"><input type="checkbox" name="prices_provisional"${s.pricesProvisional ? " checked" : ""}> Show the "prices are provisional" warning in admin</label>
    <label class="check"><input type="checkbox" name="show_case_pricing"${s.showCasePricing ? " checked" : ""}> Show case prices and the per-case saving on product pages</label>
  </div>
  <button class="btn btn-gold" type="submit">Save settings</button>
</form>
<div class="panel narrow mt">
  <h3>Payments</h3>
  <p class="quiet">Card payment runs through Stripe Checkout. Status: <strong>${env.STRIPE_SECRET_KEY ? "connected" : "not configured"}</strong>${env.STRIPE_WEBHOOK_SECRET ? ", webhook configured" : ", webhook not configured"}.</p>
  <p class="quiet fineprint">Set <code>STRIPE_SECRET_KEY</code> and <code>STRIPE_WEBHOOK_SECRET</code> with <code>npx wrangler secret put</code>. The webhook endpoint is <code>/api/webhooks/stripe</code> listening for <code>checkout.session.completed</code>.</p>
  <h3>Email</h3>
  <p class="quiet">Notifications go to <strong>${esc(notifyAddress(env))}</strong> via Resend. Status: <strong>${env.RESEND_API_KEY ? "connected" : "not configured"}</strong>.</p>
  <h3>ShipStation</h3>
  <p class="quiet">Status: <strong>${env.FULFILMENT_USER && env.FULFILMENT_PASS ? "ready to connect" : "not enabled"}</strong>.</p>
  ${env.FULFILMENT_USER && env.FULFILMENT_PASS ? `
  <p class="quiet">In ShipStation go to <strong>Settings → Selling Channels → Store Setup → Connect a Store</strong>, choose <strong>Custom Store</strong>, and enter:</p>
  <ol class="steps fineprint">
    <li><strong>URL to custom page:</strong><br><code>https://nershava.avrumy95.workers.dev/api/shipstation</code></li>
    <li><strong>Username / Password:</strong> the fulfilment credentials set on the worker.</li>
  </ol>
  <p class="quiet fineprint">ShipStation then pulls new paid orders on its own and, when you ship one, tells the site — which marks the order shipped and emails the customer their tracking number automatically. Wholesale orders carry a note that the quantities are <strong>cases</strong>, not single boxes.</p>`
  : `<p class="quiet fineprint">Set <code>FULFILMENT_USER</code> and <code>FULFILMENT_PASS</code> with <code>npx wrangler secret put</code>, then this panel shows the exact details to paste into ShipStation's Custom Store setup.</p>`}
  <p class="quiet fineprint">A warehouse or 3PL that prefers JSON can use <code>/api/fulfilment/orders</code> and <code>/api/fulfilment/shipped</code> with the same credentials. ShipStation's own V1 API is also supported via <code>SHIPSTATION_KEY</code>/<code>SHIPSTATION_SECRET</code> (status: <strong>${env.SHIPSTATION_KEY && env.SHIPSTATION_SECRET ? "connected" : "not configured"}</strong>), but that API is deprecated and only offered on their higher plans — the Custom Store above is the better route.</p>
</div>`;
  return adminLayout("Settings", body, "/admin/settings");
}

/* ── router ────────────────────────────────────────────────────────────── */

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const method = req.method;
    const secureCookie = url.protocol === "https:";

    // Language: ?lang=yi|en wins and is remembered in a cookie; default en.
    const langParam = url.searchParams.get("lang");
    const lang = langParam === "yi" || langParam === "en"
      ? langParam
      : ((req.headers.get("Cookie") || "").match(/ns_lang=(yi|en)/) || [])[1] || "en";
    const langSet = langParam
      ? { "Set-Cookie": cookie("ns_lang", lang, 60 * 60 * 24 * 365, secureCookie) }
      : undefined;
    // Storefront renderer: applies the Yiddish pass and the lang cookie.
    const R = (markup, status) =>
      html(lang === "yi" ? translateYi(markup) : markup, status || 200, langSet);

    try {
      /* ---- API ---- */
      if (path === "/api/cart/quote" && method === "POST") {
        const payload = await req.json().catch(() => ({}));
        const account = payload.wholesale ? await accountFromSession(req, env) : null;
        const q = await quoteCart(env, payload.items, account ? "wholesale" : "retail", account);
        return json({ lines: q.lines, subtotal: q.subtotal, shipping: q.shipping, total: q.total,
          freeShipOver: q.settings?.freeShipOver ?? 0 });
      }
      // Photos the office uploaded from the admin, served straight out of R2.
      if (path.startsWith("/media/")) {
        const key = decodeURIComponent(path.slice(7));
        if (!env.MEDIA || !key || key.includes("..")) return notFound();
        const object = await env.MEDIA.get(key);
        if (!object) return notFound();
        return new Response(object.body, {
          headers: {
            "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
            "Cache-Control": "public, max-age=31536000, immutable",
            "ETag": object.httpEtag,
          },
        });
      }

      if (path === "/api/checkout" && method === "POST") return apiCheckout(req, env, url);
      if (path === "/api/wholesale/terms" && method === "POST") return apiWholesaleTerms(req, env);
      if (path === "/api/webhooks/stripe" && method === "POST") return stripeWebhook(req, env, ctx);
      if (path === "/api/shipstation") return shipStationStore(req, env, url, method);
      if (path.startsWith("/api/fulfilment/")) return fulfilmentApi(req, env, url, path, method);

      /* ---- admin ---- */
      if (path === "/admin" || path.startsWith("/admin/")) {
        if (path === "/admin" && method === "POST") {
          const f = await formBody(req);
          const ok = env.ADMIN_EMAIL && env.ADMIN_PASSWORD &&
            f.email?.toLowerCase() === env.ADMIN_EMAIL.toLowerCase() &&
            f.password === env.ADMIN_PASSWORD;
          if (!ok) return html(adminLogin("That email and password didn't match."), 401);
          const token = await makeToken(env, "admin", "office");
          return redirect("/admin/orders", { "Set-Cookie": cookie("ns_admin", token, 60 * 60 * 24 * 30, secureCookie) });
        }
        if (path === "/admin/logout")
          return redirect("/admin", { "Set-Cookie": cookie("ns_admin", "", 0, secureCookie) });

        const session = await adminSession(req, env);
        if (!session) return html(adminLogin(path === "/admin" ? null : "Please log in."), path === "/admin" ? 200 : 401);
        if (path === "/admin") return redirect("/admin/orders");

        if (path === "/admin/orders") return html(await adminOrders(env, url));
        const orderMatch = path.match(/^\/admin\/orders\/(\d+)$/);
        if (orderMatch) {
          if (method === "POST") {
            const f = await formBody(req);
            await env.DB.prepare(
              "UPDATE orders SET status = ?, payment_status = ?, notes = ? WHERE id = ?")
              .bind(ORDER_STATUSES.includes(f.status) ? f.status : "pending",
                ["unpaid", "paid", "terms"].includes(f.payment_status) ? f.payment_status : "unpaid",
                f.notes || null, orderMatch[1]).run();
            return redirect(`/admin/orders/${orderMatch[1]}`);
          }
          const page = await adminOrderDetail(env, orderMatch[1]);
          return page ? html(page) : html(adminLayout("Not found", "<h1>Order not found</h1>", ""), 404);
        }

        if (path === "/admin/products") return html(await adminProducts(env, url));

        if (path === "/admin/collections") {
          if (method === "POST") {
            const f = await formBody(req);
            const sort = parseInt(f.sort, 10) || 0;
            if (f.slug) {
              if (f.action === "delete") {
                const inUse = await env.DB.prepare(
                  "SELECT COUNT(*) n FROM products WHERE collection = ?").bind(f.slug).first();
                if (inUse.n > 0)
                  return redirect("/admin/collections?bad=1&msg=" +
                    encodeURIComponent(`That category still has ${inUse.n} product(s) in it.`));
                await env.DB.prepare("DELETE FROM collections WHERE slug = ?").bind(f.slug).run();
                return redirect("/admin/collections?msg=Category+deleted");
              }
              await env.DB.prepare(
                "UPDATE collections SET name=?, blurb=?, image=?, sort=? WHERE slug=?")
                .bind(f.name, f.blurb || null, f.image || null, sort, f.slug).run();
              return redirect("/admin/collections?msg=Category+saved");
            }
            if (!f.name) return redirect("/admin/collections?bad=1&msg=A+name+is+required");
            const slug = slugify(f.name);
            const clash = await env.DB.prepare("SELECT 1 FROM collections WHERE slug = ?").bind(slug).first();
            if (clash) return redirect("/admin/collections?bad=1&msg=A+category+with+that+name+already+exists");
            await env.DB.prepare(
              "INSERT INTO collections (slug, name, blurb, image, sort) VALUES (?,?,?,?,?)")
              .bind(slug, f.name, f.blurb || null, f.image || null, sort).run();
            return redirect("/admin/collections?msg=Category+added");
          }
          return html(await adminCollections(env, url));
        }

        const delMatch = path.match(/^\/admin\/products\/(\d+)\/delete$/);
        if (delMatch && method === "POST") {
          await env.DB.prepare("DELETE FROM products WHERE id = ?").bind(delMatch[1]).run();
          return redirect("/admin/products?deleted=1");
        }

        const prodMatch = path.match(/^\/admin\/products\/(\d+|new)$/);
        if (prodMatch) {
          const isNew = prodMatch[1] === "new";
          if (method === "POST") {
            const f = await formBody(req);
            const cents = (v) => Math.max(0, Math.round(parseFloat(String(v).replace(/[^0-9.]/g, "")) * 100) || 0);
            if (!f.name || !f.collection)
              return html(adminLayout("Add a product",
                `<div class="notice bad">A name and a category are both required. <a href="/admin/products/${prodMatch[1]}">Go back</a>.</div>`,
                "/admin/products"), 400);

            let image = f.image || null;
            try {
              const uploaded = await storePhoto(env, f.photo, f.name);
              if (uploaded) image = uploaded;
            } catch (err) {
              return html(adminLayout("Photo problem",
                `<div class="notice bad">${esc(String(err.message || err))} <a href="/admin/products/${prodMatch[1]}">Go back</a>.</div>`,
                "/admin/products"), 400);
            }

            const fields = [f.name, f.sku || null, f.collection, f.blurb || null, f.description || null,
              f.unit_label || null, f.burn_time || null, cents(f.retail_price),
              cents(f.sale_price), Math.max(1, parseInt(f.case_qty, 10) || 1), cents(f.wholesale_price),
              image, parseInt(f.sort, 10) || 0, Math.max(0, parseInt(f.home_position, 10) || 0),
              f.retail_active ? 1 : 0, f.wholesale_active ? 1 : 0, f.featured ? 1 : 0];

            if (isNew) {
              await env.DB.prepare(`INSERT INTO products
                (name, sku, collection, blurb, description, unit_label, burn_time,
                 retail_price_cents, sale_price_cents, case_qty, wholesale_price_cents,
                 image, sort, home_position, retail_active, wholesale_active, featured, slug)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
                .bind(...fields, await uniqueSlug(env, f.name)).run();
              return redirect("/admin/products?added=1");
            }
            await env.DB.prepare(`UPDATE products SET name=?, sku=?, collection=?, blurb=?, description=?,
              unit_label=?, burn_time=?, retail_price_cents=?, sale_price_cents=?, case_qty=?,
              wholesale_price_cents=?, image=?, sort=?, home_position=?,
              retail_active=?, wholesale_active=?, featured=? WHERE id=?`)
              .bind(...fields, prodMatch[1]).run();
            return redirect("/admin/products?saved=1");
          }
          const page = await adminProductDetail(env, prodMatch[1]);
          return page ? html(page) : html(adminLayout("Not found", "<h1>Product not found</h1>", ""), 404);
        }

        if (path === "/admin/wholesale") {
          if (method === "POST") {
            const f = await formBody(req);
            const discount = Math.max(0, Math.min(90, parseInt(f.discount_pct, 10) || 0));
            const terms = f.terms === "net30" ? "net30" : "card";
            let creds = null;
            if (f.password) creds = await hashPassword(f.password);
            if (f.id) {
              const status = ["pending", "approved", "rejected"].includes(f.status) ? f.status : "pending";
              await env.DB.prepare(`UPDATE accounts SET status=?, discount_pct=?, terms=?, notes=?,
                approved_at = CASE WHEN ?='approved' AND approved_at IS NULL THEN datetime('now') ELSE approved_at END
                ${creds ? ", pass_hash=?, pass_salt=?" : ""} WHERE id=?`)
                .bind(...[status, discount, terms, f.notes || null, status,
                  ...(creds ? [creds.hash, creds.salt] : []), f.id]).run();
              return redirect("/admin/wholesale?msg=Account+updated");
            }
            if (!f.business || !f.email || !creds) return redirect("/admin/wholesale?msg=Business,+email+and+password+are+required");
            await env.DB.prepare(`INSERT INTO accounts
              (business, contact, email, phone, status, discount_pct, terms, pass_hash, pass_salt, approved_at)
              VALUES (?,?,?,?,'approved',?,?,?,?,datetime('now'))
              ON CONFLICT(email) DO UPDATE SET business=excluded.business, contact=excluded.contact,
                phone=excluded.phone, status='approved', discount_pct=excluded.discount_pct,
                terms=excluded.terms, pass_hash=excluded.pass_hash, pass_salt=excluded.pass_salt`)
              .bind(f.business, f.contact || null, f.email.toLowerCase(), f.phone || null,
                discount, terms, creds.hash, creds.salt).run();
            return redirect("/admin/wholesale?msg=Account+created");
          }
          return html(await adminWholesale(env, url));
        }

        if (path === "/admin/inquiries") {
          if (method === "POST") {
            const f = await formBody(req);
            if (f.id && INQ_STATUSES.includes(f.status))
              await env.DB.prepare("UPDATE inquiries SET status = ? WHERE id = ?")
                .bind(f.status, f.id).run();
            return redirect("/admin/inquiries");
          }
          return html(await adminInquiries(env));
        }

        if (path === "/admin/settings") {
          if (method === "POST") {
            const f = await formBody(req);
            const cents = (v) => Math.max(0, Math.round(parseFloat(String(v).replace(/[^0-9.]/g, "")) * 100) || 0);
            await Promise.all([
              setSetting(env, "shipping_flat_cents", cents(f.shipping_flat)),
              setSetting(env, "free_ship_over_cents", cents(f.free_ship_over)),
              setSetting(env, "wholesale_min_cents", cents(f.wholesale_min)),
              setSetting(env, "store_live", f.store_live ? 1 : 0),
              setSetting(env, "prices_provisional", f.prices_provisional ? 1 : 0),
              setSetting(env, "home_columns", Math.min(5, Math.max(2, parseInt(f.home_columns, 10) || 4))),
              setSetting(env, "show_case_pricing", f.show_case_pricing ? 1 : 0),
            ]);
            return redirect("/admin/settings?saved=1");
          }
          return html(await adminSettings(env, url));
        }
        return html(adminLayout("Not found", "<h1>Not found</h1>", ""), 404);
      }

      /* ---- wholesale portal ---- */
      if (path === "/wholesale/login") {
        if (method === "POST") {
          const f = await formBody(req);
          const acct = await env.DB.prepare(
            "SELECT * FROM accounts WHERE lower(email) = ? AND status = 'approved'")
            .bind(String(f.email || "").toLowerCase()).first();
          if (!acct?.pass_hash)
            return html(pageWholesaleLogin("We couldn't find an approved account with that email.", f.email), 401);
          const { hash } = await hashPassword(f.password || "", acct.pass_salt);
          if (!timingSafeEqual(hash, acct.pass_hash))
            return html(pageWholesaleLogin("That password didn't match.", f.email), 401);
          const token = await makeToken(env, "wholesale", String(acct.id));
          return redirect("/wholesale/account", { "Set-Cookie": cookie("ns_wh", token, 60 * 60 * 24 * 30, secureCookie) });
        }
        if (await accountFromSession(req, env)) return redirect("/wholesale/account");
        return html(pageWholesaleLogin());
      }
      if (path === "/wholesale/logout")
        return redirect("/wholesale", { "Set-Cookie": cookie("ns_wh", "", 0, secureCookie) });
      if (path === "/wholesale/account") {
        const account = await accountFromSession(req, env);
        if (!account) return redirect("/wholesale/login");
        return html(await pageWholesaleAccount(env, account, url));
      }

      /* ---- storefront ---- */
      if (path === "/") return R(await pageHome(env));
      if (path === "/candles") return R(await pageCollections(env));
      const collMatch = path.match(/^\/candles\/([a-z0-9-]+)$/);
      if (collMatch) {
        const page = await pageCollection(env, collMatch[1]);
        return page ? R(page) : notFound();
      }
      const prodPage = path.match(/^\/product\/([a-z0-9-]+)$/);
      if (prodPage) {
        const page = await pageProduct(env, prodPage[1]);
        return page ? R(page) : notFound();
      }
      if (path === "/cart") return R(pageCart());
      if (path === "/order/success") return R(await pageOrderSuccess(env, url, ctx));
      if (path === "/about") return R(pageAbout());
      if (path === "/why-ner-shava") return R(pageWhy());
      if (path === "/faq") return R(pageFaq());

      if (path === "/contact") {
        if (method === "POST") {
          await handleInquiry(req, env, "contact");
          return R(pageContact(true));
        }
        return R(pageContact(false));
      }
      if (path === "/wholesale") {
        if (method === "POST") {
          const f = await formBody(req);
          await handleInquiry(new Request(req.url, {
            method: "POST", body: new URLSearchParams(f), headers: req.headers,
          }), env, "wholesale").catch(() => null);
          if (f.email && f.business) {
            await env.DB.prepare(`INSERT INTO accounts (business, contact, email, phone, city, store_type, notes, status)
              VALUES (?,?,?,?,?,?,?, 'pending') ON CONFLICT(email) DO NOTHING`)
              .bind(f.business, f.name || null, f.email.toLowerCase(), f.phone || null,
                f.city || null, f.store_type || null, f.message || null).run();
          }
          return R(pageWholesale(true));
        }
        return R(pageWholesale(false));
      }

      if (path === "/privacy") return html(policyPage("Privacy Policy", [
        [null, `${esc(LEGAL)} collects only the information you give us — your name, contact details, shipping address and order history — and we use it to fulfil your order and to answer your questions. We do not sell or rent your information to anyone.`],
        ["Payments", `Card payments are processed by Stripe. We never see or store your full card number. Stripe's own privacy terms apply to the payment step.`],
        ["Email", `We email you about your order. We will only add you to any mailing list if you ask us to.`],
        ["Questions", `Write to <a href="mailto:${EMAIL}">${EMAIL}</a> or call ${PHONE} and we'll help.`],
      ]));
      if (path === "/terms") return html(policyPage("Terms of Use", [
        [null, `By ordering from this site you agree to these terms. Prices are in US dollars and may change without notice. We do our best to keep the catalog accurate; if an item is out of stock we'll contact you before charging or shipping.`],
        ["Orders", `An order is accepted when we confirm it. We may decline or cancel an order — for example if an item is unavailable or a price was listed in error — and if we do, we refund you in full.`],
        ["Wholesale accounts", `Wholesale pricing, minimums and terms are set for each account by the office and may be changed with notice.`],
        ["Contact", `${esc(LEGAL)}, ${esc(ADDRESS)}. Tel ${PHONE}.`],
      ]));
      if (path === "/shipping") return html(policyPage("Shipping & Returns", [
        ["Shipping", `Orders are packed and dispatched from Mountainville, New York, usually within two business days. Standard shipping is a flat rate, and it's free once your order passes the threshold shown in your cart. Wholesale freight is quoted separately by the office.`],
        ["Damage in transit", `Candles travel well, but if anything arrives broken, call us on ${PHONE} or email <a href="mailto:${EMAIL}">${EMAIL}</a> within seven days with a photo and we'll replace it.`],
        ["Returns", `Unopened boxes can be returned within thirty days in their original condition. Please call the office first so we can give you a return reference.`],
        ["Questions", `Call ${PHONE} ext. 102 — we'd rather sort it out on the phone than leave you waiting.`],
      ]));

      return notFound();
    } catch (err) {
      console.error(err);
      return html(layout({
        title: "Something went wrong",
        body: `<section class="wrap section narrow center">
          <h1>Something went wrong.</h1>
          <p class="lede">Please try again, or call the office on <a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a>.</p>
          <p><a class="btn btn-outline" href="/">Back to the home page</a></p></section>`,
      }), 500);
    }

    function notFound() {
      return html(layout({
        title: "Page not found",
        body: `<section class="wrap section narrow center">
          <img src="/assets/img/logo.png" alt="" width="56" height="82">
          <h1>We couldn't find that page.</h1>
          <p class="lede">It may have moved. Try our candles, or call the office on <a href="tel:${PHONE.replace(/-/g, "")}">${PHONE}</a>.</p>
          <p><a class="btn btn-gold" href="/candles">Browse the candles</a></p></section>`,
      }), 404);
    }
  },
};
