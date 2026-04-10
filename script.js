const data = {
  categories: [
    { ar: "الكل", en: "All", folder: null, items: null },

    { ar: "الأسماك", en: "Fish", folder: "fish", items: [
      { ar: "بلطى (مشوى / مقلي / سنجاري / زيت ولمون)", en: "Tilapia (Grilled / Fried / Sanjari / Oil & Lemon)", price: 35, calories: 220, img: "bolti.jpg" },
      { ar: "دنيس (مشوى / مقلي / سنجاري / زيت ولمون)", en: "Sea Bream (Grilled / Fried / Sanjari / Oil & Lemon)", price: 55, calories: 260, img: "denis.jpg" },
      { ar: "بوري (مشوي / مقلي / سنجاري / زيت ولمون)", en: "Mullet (Grilled / Fried / Sanjari / Oil & Lemon)", price: 55, calories: 280, img: "bouri.jpg" },
      { ar: "قاروص (مشوى / مقلي / سنجاري / زيت ولمون)", en: "Sea Bass (Grilled / Fried / Sanjari / Oil & Lemon)", price: 50, calories: 240, img: "qarous.jpg" },
      { ar: "ماكريل (مشوى / مقلي / سنجاري / زيت ولمون)", en: "Mackerel (Grilled / Fried / Sanjari / Oil & Lemon)", price: 43, calories: 300, img: "mackerel.jpg" },
      { ar: "شعور (مقلي / سنجاري)", en: "Emperor Fish (Fried / Sanjari)", price: 45, calories: 320, img: "shoor.jpg" },
      { ar: "هامور (مقلي / سنجاري)", en: "Grouper (Fried / Sanjari)", price: 55, calories: 350, img: "hamour.jpg" }
    ]},

    { ar: "الجمبري", en: "Shrimp", folder: "shrimp", items: [
      { ar: "جمبري (مقلي / مشوي جريل / مشوي اسكندراني)", en: "Shrimp (Fried / Grilled / Alexandrian Style)", price: 60, calories: 200, img: "gambari.jpg" },
      { ar: "جمبري باتر فلاي", en: "Butterfly Shrimp", price: 80, calories: 320, img: "butterfly.jpg" }
    ]},

    { ar: "البحريات", en: "Seafood", folder: "seafood", items: [
      { ar: "كابوريا (اسكندراني / مشوي)", en: "Crab (Alexandrian / Grilled)", price: 35, calories: 180, img: "kaboria.jpg" },
      { ar: "كابوريا بالبشميل", en: "Crab with Bechamel", price: 50, calories: 350, img: "kaboria_beshamel.jpg" },
      { ar: "حبار مقلي", en: "Fried Calamari", price: 70, calories: 250, img: "habar.jpeg" }
    ]},

    { ar: "وجبات الفليه", en: "Fillet Meals", folder: "fillet", items: [
      { ar: "فليه مقلي", en: "Fried Fillet", price: 60, calories: 350, img: "fillet_maqli.jpg" },
      { ar: "فليه مشوي جريل", en: "Grilled Fillet", price: 60, calories: 220, img: "fillet_mashwi.jpg" }
    ]},

    { ar: "الطواجن", en: "Tagines", folder: "tagines", items: [
      { ar: "طاجن سي فوود أحمر", en: "Seafood Tagine (Red)", price: 30, calories: 280, img: "tagin_seafood_red.jpg" },
      { ar: "طاجن سي فوود بالكريمة", en: "Seafood Tagine (Cream)", price: 35, calories: 420, img: "tagin_seafood_cream.jpg" },
      { ar: "طاجن سي فوود بالبشاميل", en: "Seafood Tagine (Bechamel)", price: 40, calories: 500, img: "tagin_seafood_beshamel.jpg" },
      { ar: "طاجن جمبري أحمر", en: "Shrimp Tagine (Red)", price: 25, calories: 240, img: "tagin_gambari_red.jpg" },
      { ar: "طاجن جمبري بالكريمة", en: "Shrimp Tagine (Cream)", price: 30, calories: 380, img: "tagin_gambari_cream.jpg" },
      { ar: "طاجن جمبري بالبشاميل", en: "Shrimp Tagine (Bechamel)", price: 35, calories: 450, img: "tagin_gambari_beshamel.jpg" },
      { ar: "طاجن فليه أحمر", en: "Fillet Tagine (Red)", price: 20, calories: 260, img: "tagin_fillet_red.jpg" },
      { ar: "طاجن فليه أبيض", en: "Fillet Tagine (White)", price: 25, calories: 350, img: "tagin_fillet_white.jpg" },
      { ar: "طاجن فليه بالبشاميل", en: "Fillet Tagine (Bechamel)", price: 30, calories: 480, img: "tagin_fillet_beshamel.jpg" },
      { ar: "طاجن حبار أحمر", en: "Calamari Tagine (Red)", price: 25, calories: 230, img: "tagin_habar_red.jpg" },
      { ar: "طاجن حبار أبيض", en: "Calamari Tagine (White)", price: 30, calories: 320, img: "tagin_habar_white.jpg" },
      { ar: "طاجن حبار بالبشاميل", en: "Calamari Tagine (Bechamel)", price: 35, calories: 430, img: "tagin_habar_beshamel.jpg" }
    ]},

    { ar: "المكرونات", en: "Pasta", folder: "pasta", items: [
      { ar: "مكرونة سي فوود أحمر", en: "Seafood Pasta (Red)", price: 30, calories: 420, img: "pasta_seafood_red.jpg" },
      { ar: "مكرونة سي فوود أبيض", en: "Seafood Pasta (White)", price: 35, calories: 520, img: "pasta_seafood_white.jpg" },
      { ar: "مكرونة سي فوود بالبشاميل", en: "Seafood Pasta (Bechamel)", price: 40, calories: 650, img: "pasta_seafood_beshamel.jpg" },
      { ar: "مكرونة جمبري صوص أحمر", en: "Shrimp Pasta (Red Sauce)", price: 30, calories: 400, img: "pasta_gambari_red.jpg" },
      { ar: "مكرونة جمبري وايت صوص", en: "Shrimp Pasta (White Sauce)", price: 35, calories: 500, img: "pasta_gambari_white.jpg" },
      { ar: "مكرونة جمبري بالبشاميل", en: "Shrimp Pasta (Bechamel)", price: 40, calories: 620, img: "pasta_gambari_beshamel.jpg" }
    ]},

    { ar: "الشوربات", en: "Soups", folder: "soups", items: [
      { ar: "شوربة كابوريا", en: "Crab Soup", price: 10, calories: 120, img: "shorbet_kaboria.jpg" },
      { ar: "شوربة جمبري", en: "Shrimp Soup", price: 10, calories: 110, img: "shorbet_gambari.jpg" },
      { ar: "شوربة سي فوود", en: "Seafood Soup", price: 20, calories: 150, img: "shorbet_seafood.jpg" },
      { ar: "ملوخية بالجمبري", en: "Molokhia with Shrimp", price: 15, calories: 180, img: "molokhia.jpg" }
    ]},

    { ar: "السلطات", en: "Salads", folder: "salads", items: [
      { ar: "سلطة طحينة", en: "Tahini Salad", price: 1, calories: 90, img: "tahina.jpg" },
      { ar: "سلطة خضراء", en: "Green Salad", price: 2, calories: 35, img: "salata_khadra.jpg" },
      { ar: "سلطة بابا غنوج", en: "Baba Ghanouj", price: 4, calories: 120, img: "baba_ghanouj.jpg" }
    ]},

    { ar: "الأرز", en: "Rice", folder: "rice", items: [
      { ar: "أرز صيادية", en: "Sayadiyya Rice", price: 6, calories: 200, img: "rice2.jpg" },
      { ar: "أرز سي فوود", en: "Seafood Rice", price: 20, calories: 260, img: "rice1.jpg" },
      { ar: "أرز بالجمبري", en: "Shrimp Rice", price: 15, calories: 240, img: "rice3.jpg" }
    ]},

    { ar: "إضافات", en: "Extras", folder: "bread", items: [
      { ar: "عيش بلدي", en: "Baladi Bread", price: 0, calories: 160, img: "bread1.jpg" },
      { ar: "عيش محمص", en: "Toasted Bread", price: 0, calories: 180, img: "bread2.jpg" }
    ]}
  ]
};

let lang = "ar";
let activeCategory = data.categories[0];
let searchQuery = "";

const t = {
  ar: {
    searchPlaceholder: "ابحث عن صنف...",
    free: "مجاناً",
    currency: "ريال",
    calLabel: "سعر حراري",
    noResults: "لا توجد نتائج",
    contactTitle: "تواصل معنا",
    contactSub: "نسعد بخدمتك وننتظر تواصلك",
    wa: "واتساب", fb: "فيسبوك", ph: "اتصل بنا",
    footer: "مطعم أسماك إسكندرية — جميع الأسعار بالريال",
    siteTitle: "أسماك إسكندرية",
    siteSub: "قائمة الأسعار",
    langBtn: "English"
  },
  en: {
    searchPlaceholder: "Search for a dish...",
    free: "Free",
    currency: "EGP",
    calLabel: "kcal",
    noResults: "No results found",
    contactTitle: "Contact Us",
    contactSub: "We're happy to serve you",
    wa: "WhatsApp", fb: "Facebook", ph: "Call Us",
    footer: "Asmak Iskandaria Restaurant — All prices in riyal" ,
    siteTitle: "Asmak Iskandaria",
    siteSub: "Menu & Prices",
    langBtn: "عربي"
  }
};

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  applyLang();
  renderNav();
  renderContent();
}

function applyLang() {
  const tx = t[lang];
  document.getElementById("site-title").textContent = tx.siteTitle;
  document.getElementById("site-sub").textContent = tx.siteSub;
  document.getElementById("search-input").placeholder = tx.searchPlaceholder;
  document.getElementById("contact-title").textContent = tx.contactTitle;
  document.getElementById("contact-sub").textContent = tx.contactSub;
  document.getElementById("lbl-wa").textContent = tx.wa;
  document.getElementById("lbl-fb").textContent = tx.fb;
  document.getElementById("lbl-ph").textContent = tx.ph;
  document.getElementById("footer-text").textContent = tx.footer;
  document.querySelector(".lang-btn").textContent = tx.langBtn;
}

function onSearch() {
  searchQuery = document.getElementById("search-input").value.toLowerCase();
  renderContent();
}

function renderNav() {
  const nav = document.getElementById("nav-list");
  nav.innerHTML = "";
  data.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat[lang];
    btn.className = activeCategory === cat ? "active" : "";
    btn.onclick = () => {
      activeCategory = cat;
      searchQuery = "";
      document.getElementById("search-input").value = "";
      renderNav();
      renderContent();
    };
    nav.appendChild(btn);
  });
}

function makeCard(item, folder) {
  const tx = t[lang];
  const name = item[lang];

  const imgHtml = item.img && folder
    ? `<div class="item-img"><img src="images/${folder}/${item.img}" alt="${name}" onerror="this.parentElement.innerHTML='🍽️'"></div>`
    : `<div class="item-img">🍽️</div>`;

  const priceHtml = item.price === 0
    ? `<span class="price-free">${tx.free}</span>`
    : `<div class="item-price">${item.price}<span>${tx.currency}</span></div>`;

  const calHtml = item.calories !== null
    ? `<div class="item-calories">🔥 ${item.calories} ${tx.calLabel}</div>`
    : `<div class="item-calories" style="opacity:0.4;">🔥 — ${tx.calLabel}</div>`;

  return `<div class="item-card">
    ${imgHtml}
    <div class="item-name">${name}</div>
    <div class="item-meta">${priceHtml}${calHtml}</div>
  </div>`;
}

function renderContent() {
  const content = document.getElementById("content");
  const tx = t[lang];

  if (searchQuery) {
    const allItems = data.categories
      .filter(c => c.items)
      .flatMap(c => c.items.map(i => ({ ...i, _folder: c.folder })));
    const filtered = allItems.filter(i =>
      i.ar.toLowerCase().includes(searchQuery) ||
      i.en.toLowerCase().includes(searchQuery)
    );
    if (filtered.length === 0) {
      content.innerHTML = `<div class="no-results">${tx.noResults}</div>`;
    } else {
      content.innerHTML = `<div class="items-grid">${filtered.map(i => makeCard(i, i._folder)).join("")}</div>`;
    }
    return;
  }

  if (activeCategory.items === null) {
    const cats = data.categories.filter(c => c.items);
    content.innerHTML = cats.map(cat => `
      <div class="section-title">${cat[lang]}</div>
      <div class="items-grid">${cat.items.map(i => makeCard(i, cat.folder)).join("")}</div>
    `).join("");
  } else {
    content.innerHTML = `
      <div class="section-title">${activeCategory[lang]}</div>
      <div class="items-grid">${activeCategory.items.map(i => makeCard(i, activeCategory.folder)).join("")}</div>
    `;
  }
}

renderNav();
renderContent();
