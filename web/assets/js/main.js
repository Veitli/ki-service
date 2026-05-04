(() => {
  const CONTENT_PATH = "assets/data/content.json";
  const LANG_KEY = "ai_learning_lang";
  const defaultLang = "de";

  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);

  const applyTranslations = (dictionary) => {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      const value = getByPath(dictionary, key);
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const definitions = node.dataset.i18nAttr.split(";");
      definitions.forEach((definition) => {
        const [attr, key] = definition.split(":");
        const value = getByPath(dictionary, key);
        if (attr && typeof value === "string") {
          node.setAttribute(attr.trim(), value);
        }
      });
    });
  };

  const setupMobileNavigation = () => {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("is-open"));
    });
  };

  const setupFaqAnimation = () => {
    document.querySelectorAll("details").forEach((detail) => {
      detail.addEventListener("toggle", () => {
        detail.style.transition = "all 180ms ease";
      });
    });
  };

  const initI18n = async () => {
    try {
      const response = await fetch(CONTENT_PATH);
      const content = await response.json();
      let currentLang = localStorage.getItem(LANG_KEY) || defaultLang;
      if (!content[currentLang]) currentLang = defaultLang;
      applyTranslations(content[currentLang]);
      document.documentElement.lang = "de";
    } catch (error) {
      console.error("Uebersetzungen konnten nicht geladen werden", error);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupMobileNavigation();
    setupFaqAnimation();
    initI18n();
  });
})();
