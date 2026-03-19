"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/app.ts
  (() => {
    const STORAGE = {
      lang: "ganit-lang",
      theme: "ganit-theme",
      familyTheme: "sathi-family-theme",
      familyThemeMode: "sathi-family-theme-mode",
      reminderTime: "ganit-reminder",
      reminderEnabled: "ganit-reminder-enabled",
      reminderLastShown: "ganit-reminder-last-shown",
      installMarker: "sathi-installed-ganit-sathi",
      history: "ganit-history",
      cloudSyncedAt: "ganit-cloud-synced-at",
      currencyCache: "ganit-currency-cache"
    };
    const FIREBASE_CONFIG = {
      apiKey: "AIzaSyC6Cpg83N8fBuvY7YOSwTWsfM9DUsaVc3E",
      authDomain: "pariksha-sathi.firebaseapp.com",
      projectId: "pariksha-sathi",
      storageBucket: "pariksha-sathi.firebasestorage.app",
      messagingSenderId: "921721697043",
      appId: "1:921721697043:web:dada90a420c40e11ae60e6",
      measurementId: "G-NC7955J7KV"
    };
    const CURRENCIES = {
      USD: "US Dollar",
      INR: "Indian Rupee",
      EUR: "Euro",
      GBP: "British Pound",
      AED: "UAE Dirham",
      SAR: "Saudi Riyal",
      JPY: "Japanese Yen",
      CAD: "Canadian Dollar",
      AUD: "Australian Dollar",
      SGD: "Singapore Dollar",
      CNY: "Chinese Yuan",
      CHF: "Swiss Franc"
    };
    const UNIT_DEFINITIONS = {
      length: {
        label: { hi: "Length", en: "Length" },
        units: {
          meter: { hi: "\u092E\u0940\u091F\u0930", en: "Meter", factor: 1 },
          kilometer: { hi: "\u0915\u093F\u0932\u094B\u092E\u0940\u091F\u0930", en: "Kilometer", factor: 1e3 },
          centimeter: { hi: "\u0938\u0947\u0902\u091F\u0940\u092E\u0940\u091F\u0930", en: "Centimeter", factor: 0.01 },
          inch: { hi: "\u0907\u0902\u091A", en: "Inch", factor: 0.0254 },
          foot: { hi: "\u092B\u0941\u091F", en: "Foot", factor: 0.3048 },
          mile: { hi: "\u092E\u093E\u0907\u0932", en: "Mile", factor: 1609.344 }
        }
      },
      weight: {
        label: { hi: "Weight", en: "Weight" },
        units: {
          kilogram: { hi: "\u0915\u093F\u0932\u094B\u0917\u094D\u0930\u093E\u092E", en: "Kilogram", factor: 1 },
          gram: { hi: "\u0917\u094D\u0930\u093E\u092E", en: "Gram", factor: 1e-3 },
          pound: { hi: "\u092A\u093E\u0909\u0902\u0921", en: "Pound", factor: 0.45359237 },
          ounce: { hi: "\u0914\u0902\u0938", en: "Ounce", factor: 0.0283495231 }
        }
      },
      area: {
        label: { hi: "Area", en: "Area" },
        units: {
          sqmeter: { hi: "\u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930", en: "Square meter", factor: 1 },
          sqft: { hi: "\u0935\u0930\u094D\u0917 \u092B\u0941\u091F", en: "Square foot", factor: 0.092903 },
          acre: { hi: "\u090F\u0915\u0921\u093C", en: "Acre", factor: 4046.8564224 },
          hectare: { hi: "\u0939\u0947\u0915\u094D\u091F\u0947\u092F\u0930", en: "Hectare", factor: 1e4 }
        }
      },
      speed: {
        label: { hi: "Speed", en: "Speed" },
        units: {
          mps: { hi: "\u092E\u0940\u091F\u0930/\u0938\u0947\u0915\u0902\u0921", en: "Meters/sec", factor: 1 },
          kph: { hi: "\u0915\u093F\u092E\u0940/\u0918\u0902\u091F\u093E", en: "Km/hour", factor: 0.2777777778 },
          mph: { hi: "\u092E\u0940\u0932/\u0918\u0902\u091F\u093E", en: "Miles/hour", factor: 0.44704 }
        }
      },
      data: {
        label: { hi: "Data", en: "Data" },
        units: {
          byte: { hi: "\u092C\u093E\u0907\u091F", en: "Byte", factor: 1 },
          kilobyte: { hi: "\u0915\u093F\u0932\u094B\u092C\u093E\u0907\u091F", en: "Kilobyte", factor: 1024 },
          megabyte: { hi: "\u092E\u0947\u0917\u093E\u092C\u093E\u0907\u091F", en: "Megabyte", factor: 1048576 },
          gigabyte: { hi: "\u0917\u0940\u0917\u093E\u092C\u093E\u0907\u091F", en: "Gigabyte", factor: 1073741824 }
        }
      },
      time: {
        label: { hi: "Time", en: "Time" },
        units: {
          second: { hi: "\u0938\u0947\u0915\u0902\u0921", en: "Second", factor: 1 },
          minute: { hi: "\u092E\u093F\u0928\u091F", en: "Minute", factor: 60 },
          hour: { hi: "\u0918\u0902\u091F\u093E", en: "Hour", factor: 3600 },
          day: { hi: "\u0926\u093F\u0928", en: "Day", factor: 86400 }
        }
      },
      temperature: {
        label: { hi: "Temperature", en: "Temperature" },
        units: {
          celsius: { hi: "\u0938\u0947\u0932\u094D\u0938\u093F\u092F\u0938", en: "Celsius" },
          fahrenheit: { hi: "\u092B\u093E\u0930\u0947\u0928\u0939\u093E\u0907\u091F", en: "Fahrenheit" },
          kelvin: { hi: "\u0915\u0947\u0932\u094D\u0935\u093F\u0928", en: "Kelvin" }
        }
      }
    };
    const UI_COPY = {
      hi: {
        menuLabel: "Quick Controls",
        menuTitle: "Ganit menu",
        languageLabel: "Language",
        languageTitle: "Hindi aur English",
        themeLabel: "Theme",
        themeTitle: "Alive studio mode",
        themeAction: "Theme badlo",
        installLabel: "Install",
        installTitle: "App ko phone par rakho",
        installAction: "Install app",
        authLabel: "Family login",
        authTitle: "Ek login, poori family",
        authLoading: "Login status load ho raha hai...",
        authSignIn: "Login with Google",
        authSignOut: "Logout",
        authSignedAs: "Signed in as",
        authLoggedOut: "Abhi family login active nahi hai.",
        reminderLabel: "Reminder",
        reminderTitle: "Daily utility nudge",
        reminderField: "Preferred reminder time",
        reminderSave: "Reminder save karo",
        pagesLabel: "Pages",
        pagesTitle: "Family links aur info",
        pageAbout: "About",
        pageResources: "Resources",
        pageContact: "Contact",
        pagePrivacy: "Privacy Policy",
        pageTerms: "Terms & Conditions",
        pageFamily: "Aapka-Sathi Family",
        brandTag: "Precision utility desk",
        familyChip: "Aapka-Sathi family ka hissa",
        heroHeadline: "Normal, scientific, currency, units, aur age tools ek premium studio me.",
        heroText: "Fast calculation, real exchange-rate sync, useful converters, aur cloud-saved preferences ek hi jagah milte hain.",
        rateCardLabel: "Currency pulse",
        cloudCardLabel: "Cloud save",
        cloudMetaIdle: "Login karte hi settings aur history sync ho jayegi.",
        normalLabel: "Normal calculator",
        scientificLabel: "Scientific calculator",
        currencyLabel: "Currency converter",
        currencyTitle: "Daily synced market reference",
        refreshRates: "Refresh rates",
        amountLabel: "Amount",
        fromLabel: "From",
        toLabel: "To",
        convertedValue: "Converted value",
        syncRuleLabel: "Daily sync rule",
        syncRuleTitle: "11 baje ke baad smart refresh",
        syncRuleText: "App 11:00 AM ke baad khulte hi latest available official reference rate ko refresh karta hai aur local cache save kar deta hai.",
        rateSourceLink: "Rate source docs",
        unitLabel: "Unit converter",
        unitTitle: "Length se data tak sab",
        categoryLabel: "Category",
        unitCoverageLabel: "Coverage",
        ageLabel: "Age calculator",
        ageTitle: "Years, months, days, next birthday",
        dobLabel: "Date of birth",
        compareDateLabel: "Calculate till date",
        calculateAge: "Calculate age",
        ageSummaryLabel: "Age summary",
        lifeClockLabel: "Life clock",
        daysAlive: "days alive",
        historyLabel: "Recent history",
        historyTitle: "Quick pick",
        clearHistory: "Clear",
        focusLabel: "Utility stack",
        focusTitle: "Built for mobile pace",
        stackNormal: "Normal + Scientific",
        stackConverters: "Converters",
        stackCloud: "Cloud sync",
        stackCloudValue: "Ready",
        footerNote: "Precision tools ko beautiful aur pocket-friendly banane ke liye.",
        historyEmpty: "Abhi tak koi history nahi bani.",
        reminderSaved: (time) => `Daily reminder ${time} par save ho gaya.`,
        reminderBlocked: "Notification permission off hai, isliye sirf time save hua hai.",
        installUnavailable: "Install prompt abhi available nahi hai. Browser menu se install try karo.",
        cloudReady: "Family sync ready",
        cloudUser: "Synced with family account",
        cloudSavedAt: (text) => `Last cloud save: ${text}`,
        currencyUpdated: (text) => `Last rate refresh: ${text}`,
        currencyFormula: (from, to, rate) => `1 ${from} = ${rate} ${to}`,
        ageStatYears: "Years",
        ageStatMonths: "Months",
        ageStatDays: "Days",
        ageStatNextBirthday: "Next birthday in",
        ageInvalid: "Sahi dates enter kijiye.",
        deg: "DEG",
        rad: "RAD",
        modes: {
          normal: "Normal",
          scientific: "Scientific",
          currency: "Currency",
          units: "Units",
          age: "Age"
        }
      },
      en: {
        menuLabel: "Quick Controls",
        menuTitle: "Ganit menu",
        languageLabel: "Language",
        languageTitle: "Hindi and English",
        themeLabel: "Theme",
        themeTitle: "Alive studio mode",
        themeAction: "Change theme",
        installLabel: "Install",
        installTitle: "Keep the app on your phone",
        installAction: "Install app",
        authLabel: "Family login",
        authTitle: "One login, whole family",
        authLoading: "Loading login status...",
        authSignIn: "Login with Google",
        authSignOut: "Logout",
        authSignedAs: "Signed in as",
        authLoggedOut: "No family login is active right now.",
        reminderLabel: "Reminder",
        reminderTitle: "Daily utility nudge",
        reminderField: "Preferred reminder time",
        reminderSave: "Save reminder",
        pagesLabel: "Pages",
        pagesTitle: "Family links and info",
        pageAbout: "About",
        pageResources: "Resources",
        pageContact: "Contact",
        pagePrivacy: "Privacy Policy",
        pageTerms: "Terms & Conditions",
        pageFamily: "Aapka-Sathi Family",
        brandTag: "Precision utility desk",
        familyChip: "Part of Aapka-Sathi family",
        heroHeadline: "Normal, scientific, currency, unit, and age tools in one premium studio.",
        heroText: "Fast calculation, real exchange-rate sync, useful converters, and cloud-saved preferences live in one place.",
        rateCardLabel: "Currency pulse",
        cloudCardLabel: "Cloud save",
        cloudMetaIdle: "Sign in to sync settings and history across devices.",
        normalLabel: "Normal calculator",
        scientificLabel: "Scientific calculator",
        currencyLabel: "Currency converter",
        currencyTitle: "Daily synced market reference",
        refreshRates: "Refresh rates",
        amountLabel: "Amount",
        fromLabel: "From",
        toLabel: "To",
        convertedValue: "Converted value",
        syncRuleLabel: "Daily sync rule",
        syncRuleTitle: "Smart refresh after 11:00 AM",
        syncRuleText: "When the app opens after 11:00 AM, it refreshes to the latest available official reference rate and stores it locally.",
        rateSourceLink: "Rate source docs",
        unitLabel: "Unit converter",
        unitTitle: "Everything from length to data",
        categoryLabel: "Category",
        unitCoverageLabel: "Coverage",
        ageLabel: "Age calculator",
        ageTitle: "Years, months, days, next birthday",
        dobLabel: "Date of birth",
        compareDateLabel: "Calculate until date",
        calculateAge: "Calculate age",
        ageSummaryLabel: "Age summary",
        lifeClockLabel: "Life clock",
        daysAlive: "days alive",
        historyLabel: "Recent history",
        historyTitle: "Quick pick",
        clearHistory: "Clear",
        focusLabel: "Utility stack",
        focusTitle: "Built for mobile pace",
        stackNormal: "Normal + Scientific",
        stackConverters: "Converters",
        stackCloud: "Cloud sync",
        stackCloudValue: "Ready",
        footerNote: "Built to make precision tools beautiful and pocket-friendly.",
        historyEmpty: "No history yet.",
        reminderSaved: (time) => `A daily reminder was saved for ${time}.`,
        reminderBlocked: "Notification permission is off, so only the time was saved locally.",
        installUnavailable: "The install prompt is not available yet. Try the browser install option.",
        cloudReady: "Family sync ready",
        cloudUser: "Synced with family account",
        cloudSavedAt: (text) => `Last cloud save: ${text}`,
        currencyUpdated: (text) => `Last rate refresh: ${text}`,
        currencyFormula: (from, to, rate) => `1 ${from} = ${rate} ${to}`,
        ageStatYears: "Years",
        ageStatMonths: "Months",
        ageStatDays: "Days",
        ageStatNextBirthday: "Next birthday in",
        ageInvalid: "Please enter valid dates.",
        deg: "DEG",
        rad: "RAD",
        modes: {
          normal: "Normal",
          scientific: "Scientific",
          currency: "Currency",
          units: "Units",
          age: "Age"
        }
      }
    };
    const NORMAL_KEYS = ["AC", "\u232B", "%", "\xF7", "7", "8", "9", "\xD7", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "()"];
    const SCIENTIFIC_KEYS = ["sin(", "cos(", "tan(", "\u221A(", "\xF7", "ln(", "log(", "\u03C0", "^", "\xD7", "7", "8", "9", "(", ")", "4", "5", "6", "-", "e", "1", "2", "3", "+", "%", "0", ".", "AC", "\u232B", "="];
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function safeJsonParse(value, fallback) {
      try {
        return value ? JSON.parse(value) : fallback;
      } catch {
        return fallback;
      }
    }
    function getInitialCurrencyState() {
      const cached = safeJsonParse(localStorage.getItem(STORAGE.currencyCache), null);
      if (cached) return cached;
      return { amount: 1, from: "USD", to: "INR", lastFetchedAt: null, values: {}, sourceBase: "USD" };
    }
    function getThemePreference() {
      return localStorage.getItem(STORAGE.familyThemeMode) || localStorage.getItem(STORAGE.familyTheme) || localStorage.getItem(STORAGE.theme) || "system";
    }
    function resolveTheme(themePreference) {
      if (themePreference === "night" || themePreference === "dawn") return themePreference;
      const base = themePreference === "system" ? systemThemeQuery.matches ? "dark" : "light" : themePreference;
      return base === "light" ? "dawn" : "night";
    }
    const state = {
      lang: localStorage.getItem(STORAGE.lang) || "hi",
      theme: resolveTheme(getThemePreference()),
      mode: "normal",
      angleMode: "DEG",
      reminderTime: localStorage.getItem(STORAGE.reminderTime) || "11:00",
      authUser: null,
      normalExpression: "0",
      normalResult: "0",
      scientificExpression: "0",
      scientificResult: "0",
      history: safeJsonParse(localStorage.getItem(STORAGE.history), []),
      currency: getInitialCurrencyState(),
      units: { category: "length", amount: 1, from: "meter", to: "kilometer" },
      age: { dob: "", compareDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) },
      deferredPrompt: null
    };
    const firebaseContext = { auth: null, db: null, provider: null, sdk: null, saveTimer: null };
    function $(id) {
      return document.getElementById(id);
    }
    function inputEl(id) {
      return document.getElementById(id);
    }
    function selectEl(id) {
      return document.getElementById(id);
    }
    function t(key) {
      return UI_COPY[state.lang][key];
    }
    function formatDateTime(value) {
      if (!value) return "--";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "--";
      return new Intl.DateTimeFormat(state.lang === "hi" ? "hi-IN" : "en-IN", {
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit"
      }).format(date);
    }
    function formatNumber(value, digits = 6) {
      return new Intl.NumberFormat(state.lang === "hi" ? "hi-IN" : "en-IN", {
        maximumFractionDigits: digits
      }).format(value);
    }
    function setTheme(themePreference, persist = true) {
      const resolvedTheme = resolveTheme(themePreference);
      state.theme = resolvedTheme;
      document.body.dataset.theme = resolvedTheme;
      if (persist) {
        localStorage.setItem(STORAGE.theme, resolvedTheme);
        localStorage.setItem(STORAGE.familyTheme, resolvedTheme === "dawn" ? "light" : "dark");
        localStorage.setItem(STORAGE.familyThemeMode, resolvedTheme === "dawn" ? "light" : "dark");
      }
    }
    function toggleTheme() {
      setTheme(state.theme === "night" ? "dawn" : "night");
    }
    function syncAuthUi() {
      const authStateText = $("authStateText");
      const authBtn = $("authBtn");
      if (state.authUser) {
        authStateText.textContent = `${t("authSignedAs")} ${state.authUser.displayName || state.authUser.email || "User"}`;
        authBtn.textContent = t("authSignOut");
      } else {
        authStateText.textContent = t("authLoggedOut");
        authBtn.textContent = t("authSignIn");
      }
    }
    function applyTextContent() {
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (!key) return;
        const value = UI_COPY[state.lang][key];
        if (typeof value === "string") node.textContent = value;
      });
      document.getElementById("angleModeBtn").textContent = state.angleMode === "DEG" ? t("deg") : t("rad");
      $("langHiBtn").classList.toggle("active", state.lang === "hi");
      $("langEnBtn").classList.toggle("active", state.lang === "en");
      syncAuthUi();
    }
    function setLanguage(lang) {
      state.lang = lang;
      localStorage.setItem(STORAGE.lang, lang);
      document.documentElement.lang = lang;
      applyTextContent();
      renderModeTabs();
      renderUnitCoverage();
      renderUnitOptions();
      renderAge();
      renderHistory();
      renderCloudState();
      renderCurrency();
    }
    function renderHeroBadges() {
      const badges = ["PWA ready", "Family login", "Cloud preferences", "Daily FX cache"];
      $("heroBadges").innerHTML = badges.map((badge) => `<span class="hero-badge">${badge}</span>`).join("");
    }
    function renderModeTabs() {
      const tabs = [
        { id: "normal", label: t("modes").normal },
        { id: "scientific", label: t("modes").scientific },
        { id: "currency", label: t("modes").currency },
        { id: "units", label: t("modes").units },
        { id: "age", label: t("modes").age }
      ];
      $("modeTabs").innerHTML = tabs.map((tab) => `
      <button class="tab-btn ${state.mode === tab.id ? "active" : ""}" type="button" data-mode="${tab.id}" role="tab" aria-selected="${state.mode === tab.id}">
        ${tab.label}
      </button>
    `).join("");
      document.querySelectorAll(".tool-view").forEach((view) => {
        view.classList.toggle("active", view.id === `view-${state.mode}`);
      });
    }
    function setMode(mode) {
      state.mode = mode;
      renderModeTabs();
    }
    function createPad(containerId, keys, scientific = false) {
      $(containerId).innerHTML = keys.map((key) => {
        const classNames = ["pad-btn"];
        if (["\xF7", "\xD7", "-", "+", "^", "%"].includes(key)) classNames.push("operator");
        if (key === "=") classNames.push("equal");
        if (key === "0" && !scientific) classNames.push("wide");
        return `<button class="${classNames.join(" ")}" type="button" data-pad="${key}" data-sci="${scientific ? "1" : "0"}">${key}</button>`;
      }).join("");
    }
    function renderCalculator() {
      $("normalExpression").textContent = state.normalExpression;
      $("normalResult").textContent = state.normalResult;
      $("scientificExpression").textContent = state.scientificExpression;
      $("scientificResult").textContent = state.scientificResult;
    }
    function addHistory(entry) {
      state.history = [entry, ...state.history.filter((item) => item !== entry)].slice(0, 10);
      localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
      renderHistory();
    }
    function renderHistory() {
      const list = $("historyList");
      if (!state.history.length) {
        list.innerHTML = `<div class="history-empty">${t("historyEmpty")}</div>`;
        return;
      }
      list.innerHTML = state.history.map((item) => `
      <button class="history-item" type="button" data-history="${encodeURIComponent(item)}">
        <strong>${item.split(" = ")[0] || item}</strong>
        <small>${item}</small>
      </button>
    `).join("");
    }
    function renderCloudState() {
      $("cloudHeadline").textContent = state.authUser ? t("cloudUser") : t("cloudReady");
      const synced = localStorage.getItem(STORAGE.cloudSyncedAt);
      $("cloudMeta").textContent = state.authUser && synced ? t("cloudSavedAt")(formatDateTime(synced)) : t("cloudMetaIdle");
    }
    function appendExpression(current, value) {
      if (current === "0" && ![".", "%", ")", "^"].includes(value)) return value;
      if (value === "()") {
        const openCount = (current.match(/\(/g) || []).length;
        const closeCount = (current.match(/\)/g) || []).length;
        return current + (openCount > closeCount ? ")" : "(");
      }
      return current + value;
    }
    function safeEvaluate(expression) {
      const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/π/g, "PI").replace(/\be\b/g, "E").replace(/√\(/g, "sqrt(").replace(/\^/g, "**").replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
      if (!/^[0-9+\-*/().,%\sA-Za-z_*]+$/.test(sanitized)) {
        throw new Error("Unsafe expression");
      }
      const radians = (value) => state.angleMode === "DEG" ? value * Math.PI / 180 : value;
      const scope = {
        PI: Math.PI,
        E: Math.E,
        sqrt: Math.sqrt,
        sin: (value) => Math.sin(radians(value)),
        cos: (value) => Math.cos(radians(value)),
        tan: (value) => Math.tan(radians(value)),
        log: (value) => Math.log10(value),
        ln: (value) => Math.log(value)
      };
      const result = Function(...Object.keys(scope), `return (${sanitized});`)(...Object.values(scope));
      if (!Number.isFinite(result)) throw new Error("Invalid result");
      return result;
    }
    function handlePadInput(value, scientific = false) {
      const expressionKey = scientific ? "scientificExpression" : "normalExpression";
      const resultKey = scientific ? "scientificResult" : "normalResult";
      const current = state[expressionKey];
      if (value === "AC") {
        state[expressionKey] = "0";
        state[resultKey] = "0";
        renderCalculator();
        return;
      }
      if (value === "\u232B") {
        state[expressionKey] = current.length <= 1 ? "0" : current.slice(0, -1);
        renderCalculator();
        return;
      }
      if (value === "=") {
        try {
          const result = safeEvaluate(current);
          state[resultKey] = formatNumber(result, 10);
          state[expressionKey] = String(result);
          addHistory(`${current} = ${state[resultKey]}`);
        } catch {
          state[resultKey] = "Error";
        }
        renderCalculator();
        queueCloudSave();
        return;
      }
      state[expressionKey] = appendExpression(current, value);
      try {
        state[resultKey] = formatNumber(safeEvaluate(state[expressionKey]), 8);
      } catch {
        state[resultKey] = "\u2026";
      }
      renderCalculator();
    }
    function shouldRefreshCurrency() {
      const lastFetched = state.currency.lastFetchedAt ? new Date(state.currency.lastFetchedAt) : null;
      if (!lastFetched) return true;
      const now = /* @__PURE__ */ new Date();
      const todayRefresh = /* @__PURE__ */ new Date();
      todayRefresh.setHours(11, 0, 0, 0);
      return now >= todayRefresh && lastFetched < todayRefresh;
    }
    async function refreshCurrency(force = false) {
      if (!force && !shouldRefreshCurrency() && state.currency.values[state.currency.to]) {
        renderCurrency();
        return;
      }
      try {
        const targets = Object.keys(CURRENCIES).filter((code) => code !== state.currency.from).join(",");
        const response = await fetch(`https://api.frankfurter.app/latest?from=${state.currency.from}&to=${targets}`);
        const data = await response.json();
        state.currency.values = data.rates;
        state.currency.sourceBase = data.base;
        state.currency.lastFetchedAt = (/* @__PURE__ */ new Date()).toISOString();
        localStorage.setItem(STORAGE.currencyCache, JSON.stringify(state.currency));
        renderCurrency();
        queueCloudSave();
      } catch (error) {
        console.error("Currency refresh failed", error);
        renderCurrency();
      }
    }
    function renderCurrencyOptions() {
      const currencyOptions = Object.entries(CURRENCIES).map(([code, label]) => `<option value="${code}">${code} \xB7 ${label}</option>`).join("");
      selectEl("currencyFrom").innerHTML = currencyOptions;
      selectEl("currencyTo").innerHTML = currencyOptions;
      selectEl("currencyFrom").value = state.currency.from;
      selectEl("currencyTo").value = state.currency.to;
    }
    function renderCurrency() {
      const amount = Number(inputEl("currencyAmount").value || state.currency.amount || 1);
      state.currency.amount = amount;
      const rate = state.currency.from === state.currency.to ? 1 : state.currency.values[state.currency.to];
      const result = rate ? amount * rate : NaN;
      $("currencyResult").textContent = Number.isFinite(result) ? `${formatNumber(result, 6)} ${state.currency.to}` : "--";
      $("currencyMeta").textContent = rate ? t("currencyFormula")(state.currency.from, state.currency.to, formatNumber(rate, 6)) : "--";
      $("rateHeadline").textContent = `${state.currency.from} \u2192 ${state.currency.to}`;
      $("rateValue").textContent = rate ? formatNumber(rate, 6) : "--";
      $("rateMeta").textContent = t("currencyUpdated")(formatDateTime(state.currency.lastFetchedAt));
    }
    function convertTemperature(value, from, to) {
      let celsius = value;
      if (from === "fahrenheit") celsius = (value - 32) * (5 / 9);
      if (from === "kelvin") celsius = value - 273.15;
      if (to === "celsius") return celsius;
      if (to === "fahrenheit") return celsius * 9 / 5 + 32;
      return celsius + 273.15;
    }
    function convertUnits() {
      const category = UNIT_DEFINITIONS[state.units.category];
      const value = Number(inputEl("unitAmount").value || 0);
      state.units.amount = value;
      if (state.units.category === "temperature") {
        return convertTemperature(value, state.units.from, state.units.to);
      }
      const fromUnit = category.units[state.units.from];
      const toUnit = category.units[state.units.to];
      return value * fromUnit.factor / toUnit.factor;
    }
    function renderUnitCoverage() {
      $("unitCoverageChips").innerHTML = Object.values(UNIT_DEFINITIONS).map((item) => `<span class="coverage-chip">${item.label[state.lang]}</span>`).join("");
      $("converterCount").textContent = String(Object.keys(UNIT_DEFINITIONS).length + 2);
    }
    function renderUnitOptions() {
      const categories = Object.entries(UNIT_DEFINITIONS).map(([key, def]) => `<option value="${key}">${def.label[state.lang]}</option>`).join("");
      selectEl("unitCategory").innerHTML = categories;
      selectEl("unitCategory").value = state.units.category;
      const category = UNIT_DEFINITIONS[state.units.category];
      const unitOptions = Object.entries(category.units).map(([key, def]) => `<option value="${key}">${def[state.lang]}</option>`).join("");
      selectEl("unitFrom").innerHTML = unitOptions;
      selectEl("unitTo").innerHTML = unitOptions;
      if (!(state.units.from in category.units)) state.units.from = Object.keys(category.units)[0];
      if (!(state.units.to in category.units)) state.units.to = Object.keys(category.units)[1] || Object.keys(category.units)[0];
      selectEl("unitFrom").value = state.units.from;
      selectEl("unitTo").value = state.units.to;
      renderUnitResult();
    }
    function renderUnitResult() {
      const category = UNIT_DEFINITIONS[state.units.category];
      const result = convertUnits();
      $("unitResult").textContent = `${formatNumber(result, 6)} ${category.units[state.units.to][state.lang]}`;
      $("unitMeta").textContent = `${formatNumber(state.units.amount, 6)} ${category.units[state.units.from][state.lang]}`;
    }
    function calculateAgeData() {
      if (!state.age.dob || !state.age.compareDate) return null;
      const dob = new Date(state.age.dob);
      const compare = new Date(state.age.compareDate);
      if (Number.isNaN(dob.getTime()) || Number.isNaN(compare.getTime()) || compare < dob) return null;
      let years = compare.getFullYear() - dob.getFullYear();
      let months = compare.getMonth() - dob.getMonth();
      let days = compare.getDate() - dob.getDate();
      if (days < 0) {
        const previousMonth = new Date(compare.getFullYear(), compare.getMonth(), 0).getDate();
        days += previousMonth;
        months -= 1;
      }
      if (months < 0) {
        months += 12;
        years -= 1;
      }
      const totalDays = Math.floor((compare.getTime() - dob.getTime()) / 864e5);
      const nextBirthday = new Date(compare.getFullYear(), dob.getMonth(), dob.getDate());
      if (nextBirthday < compare) nextBirthday.setFullYear(compare.getFullYear() + 1);
      const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - compare.getTime()) / 864e5);
      return { years, months, days, totalDays, nextBirthdayDays };
    }
    function renderAge() {
      inputEl("dobInput").value = state.age.dob;
      inputEl("ageCompareInput").value = state.age.compareDate;
      const result = calculateAgeData();
      if (!result) {
        $("ageResult").textContent = t("ageInvalid");
        $("ageStats").innerHTML = "";
        $("lifeDays").textContent = "--";
        return;
      }
      $("ageResult").textContent = `${result.years}y ${result.months}m ${result.days}d`;
      $("lifeDays").textContent = formatNumber(result.totalDays, 0);
      $("ageStats").innerHTML = `
      <div class="detail-card"><strong>${formatNumber(result.years, 0)}</strong><div>${t("ageStatYears")}</div></div>
      <div class="detail-card"><strong>${formatNumber(result.months, 0)}</strong><div>${t("ageStatMonths")}</div></div>
      <div class="detail-card"><strong>${formatNumber(result.days, 0)}</strong><div>${t("ageStatDays")}</div></div>
      <div class="detail-card"><strong>${formatNumber(result.nextBirthdayDays, 0)}</strong><div>${t("ageStatNextBirthday")}</div></div>
    `;
    }
    async function initFamilyAuth() {
      try {
        const firebaseApp = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js");
        const firebaseAuth = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js");
        const firebaseStore = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js");
        const app = firebaseApp.initializeApp(FIREBASE_CONFIG, "ganit-sathi-family-app");
        const auth = firebaseAuth.getAuth(app);
        const provider = new firebaseAuth.GoogleAuthProvider();
        const db = firebaseStore.getFirestore(app);
        firebaseContext.auth = auth;
        firebaseContext.db = db;
        firebaseContext.provider = provider;
        firebaseContext.sdk = { ...firebaseAuth, ...firebaseStore };
        $("authBtn").addEventListener("click", async () => {
          if (state.authUser) {
            await firebaseAuth.signOut(auth);
          } else {
            await firebaseAuth.signInWithPopup(auth, provider);
          }
        });
        firebaseAuth.onAuthStateChanged(auth, async (user) => {
          state.authUser = user ? { uid: user.uid, displayName: user.displayName, email: user.email } : null;
          syncAuthUi();
          renderCloudState();
          if (state.authUser) {
            await loadCloudState();
            queueCloudSave();
          }
        });
      } catch (error) {
        console.error("Family auth unavailable", error);
        syncAuthUi();
      }
    }
    async function loadCloudState() {
      if (!state.authUser || !firebaseContext.db || !firebaseContext.sdk) return;
      try {
        const { doc, getDoc } = firebaseContext.sdk;
        const ref = doc(firebaseContext.db, "users", state.authUser.uid, "apps", "ganit-sathi", "state", "default");
        const snapshot = await getDoc(ref);
        if (!snapshot.exists()) return;
        const data = snapshot.data();
        if (Array.isArray(data.history)) state.history = data.history.slice(0, 10);
        if (typeof data.normalExpression === "string") state.normalExpression = data.normalExpression;
        if (typeof data.scientificExpression === "string") state.scientificExpression = data.scientificExpression;
        if (typeof data.reminderTime === "string") state.reminderTime = data.reminderTime;
        if (typeof data.angleMode === "string" && (data.angleMode === "DEG" || data.angleMode === "RAD")) state.angleMode = data.angleMode;
        if (typeof data.mode === "string" && ["normal", "scientific", "currency", "units", "age"].includes(data.mode)) {
          state.mode = data.mode;
        }
        localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
        renderHistory();
        renderCalculator();
        renderModeTabs();
        applyTextContent();
        inputEl("reminderTime").value = state.reminderTime;
      } catch (error) {
        console.error("Cloud load failed", error);
      }
    }
    function queueCloudSave() {
      if (!state.authUser || !firebaseContext.db || !firebaseContext.sdk) return;
      if (firebaseContext.saveTimer) window.clearTimeout(firebaseContext.saveTimer);
      firebaseContext.saveTimer = window.setTimeout(() => {
        void saveCloudState();
      }, 700);
    }
    async function saveCloudState() {
      if (!state.authUser || !firebaseContext.db || !firebaseContext.sdk) return;
      try {
        const { doc, setDoc } = firebaseContext.sdk;
        const ref = doc(firebaseContext.db, "users", state.authUser.uid, "apps", "ganit-sathi", "state", "default");
        await setDoc(ref, {
          history: state.history,
          normalExpression: state.normalExpression,
          scientificExpression: state.scientificExpression,
          reminderTime: state.reminderTime,
          angleMode: state.angleMode,
          mode: state.mode,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }, { merge: true });
        localStorage.setItem(STORAGE.cloudSyncedAt, (/* @__PURE__ */ new Date()).toISOString());
        renderCloudState();
      } catch (error) {
        console.error("Cloud save failed", error);
      }
    }
    async function saveReminder() {
      state.reminderTime = inputEl("reminderTime").value || "11:00";
      localStorage.setItem(STORAGE.reminderTime, state.reminderTime);
      localStorage.setItem(STORAGE.reminderEnabled, "true");
      const notificationSupported = "Notification" in window;
      if ("Notification" in window && Notification.permission === "default") {
        try {
          await Notification.requestPermission();
        } catch (error) {
          console.error("Notification permission failed", error);
        }
      }
      $("reminderStatus").textContent = notificationSupported && Notification.permission === "granted" ? t("reminderSaved")(state.reminderTime) : t("reminderBlocked");
      queueCloudSave();
    }
    async function maybeShowReminder() {
      if (localStorage.getItem(STORAGE.reminderEnabled) !== "true") return;
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      if (!("serviceWorker" in navigator)) return;
      const reminderTime = localStorage.getItem(STORAGE.reminderTime) || "11:00";
      const [hours, minutes] = reminderTime.split(":").map((part) => Number(part));
      const now = /* @__PURE__ */ new Date();
      const dueToday = /* @__PURE__ */ new Date();
      dueToday.setHours(hours, minutes, 0, 0);
      const lastShown = localStorage.getItem(STORAGE.reminderLastShown);
      if (lastShown && new Date(lastShown) >= dueToday) return;
      if (now < dueToday) return;
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.showNotification("Ganit Sathi", {
          body: state.lang === "hi" ? "Aaj ka quick utility check kar lo. Rates aur tools ready hain." : "Your daily utility check is ready. Rates and tools are synced."
        });
        localStorage.setItem(STORAGE.reminderLastShown, now.toISOString());
      }
    }
    function initInstallFlow() {
      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        state.deferredPrompt = event;
      });
      window.addEventListener("appinstalled", () => {
        localStorage.setItem(STORAGE.installMarker, "true");
        state.deferredPrompt = null;
      });
      $("installBtn").addEventListener("click", async () => {
        if (!state.deferredPrompt) {
          alert(t("installUnavailable"));
          return;
        }
        await state.deferredPrompt.prompt();
        await state.deferredPrompt.userChoice;
        state.deferredPrompt = null;
      });
    }
    function openDrawer() {
      $("drawer").classList.add("open");
      $("drawer").setAttribute("aria-hidden", "false");
    }
    function closeDrawer() {
      $("drawer").classList.remove("open");
      $("drawer").setAttribute("aria-hidden", "true");
    }
    function bindEvents() {
      $("openDrawerBtn").addEventListener("click", openDrawer);
      $("closeDrawerBtn").addEventListener("click", closeDrawer);
      $("drawer").addEventListener("click", (event) => {
        if (event.target === $("drawer")) closeDrawer();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeDrawer();
      });
      document.querySelectorAll("#drawer a").forEach((link) => {
        link.addEventListener("click", closeDrawer);
      });
      $("themeBtn").addEventListener("click", toggleTheme);
      $("langHiBtn").addEventListener("click", () => setLanguage("hi"));
      $("langEnBtn").addEventListener("click", () => setLanguage("en"));
      $("saveReminderBtn").addEventListener("click", () => void saveReminder());
      $("modeTabs").addEventListener("click", (event) => {
        const target = event.target;
        const mode = target.dataset.mode;
        if (!mode) return;
        setMode(mode);
        queueCloudSave();
      });
      document.addEventListener("click", (event) => {
        const target = event.target;
        const pad = target.dataset.pad;
        if (pad) handlePadInput(pad, target.dataset.sci === "1");
        const historyExpression = target.dataset.history;
        if (historyExpression) {
          state.normalExpression = decodeURIComponent(historyExpression).split(" = ")[0] || "0";
          state.normalResult = "0";
          setMode("normal");
          renderCalculator();
        }
      });
      $("clearHistoryBtn").addEventListener("click", () => {
        state.history = [];
        localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
        renderHistory();
        queueCloudSave();
      });
      $("angleModeBtn").addEventListener("click", () => {
        state.angleMode = state.angleMode === "DEG" ? "RAD" : "DEG";
        document.getElementById("angleModeBtn").textContent = state.angleMode === "DEG" ? t("deg") : t("rad");
        queueCloudSave();
      });
      inputEl("currencyAmount").addEventListener("input", renderCurrency);
      selectEl("currencyFrom").addEventListener("change", async () => {
        state.currency.from = selectEl("currencyFrom").value;
        state.currency.sourceBase = state.currency.from;
        await refreshCurrency(true);
      });
      selectEl("currencyTo").addEventListener("change", () => {
        state.currency.to = selectEl("currencyTo").value;
        renderCurrency();
      });
      $("swapCurrencyBtn").addEventListener("click", async () => {
        const from = state.currency.from;
        state.currency.from = state.currency.to;
        state.currency.to = from;
        renderCurrencyOptions();
        await refreshCurrency(true);
      });
      $("currencyRefreshBtn").addEventListener("click", () => void refreshCurrency(true));
      selectEl("unitCategory").addEventListener("change", () => {
        state.units.category = selectEl("unitCategory").value;
        renderUnitOptions();
      });
      inputEl("unitAmount").addEventListener("input", renderUnitResult);
      selectEl("unitFrom").addEventListener("change", () => {
        state.units.from = selectEl("unitFrom").value;
        renderUnitResult();
      });
      selectEl("unitTo").addEventListener("change", () => {
        state.units.to = selectEl("unitTo").value;
        renderUnitResult();
      });
      $("swapUnitBtn").addEventListener("click", () => {
        const from = state.units.from;
        state.units.from = state.units.to;
        state.units.to = from;
        renderUnitOptions();
      });
      inputEl("dobInput").addEventListener("change", () => {
        state.age.dob = inputEl("dobInput").value;
        renderAge();
        queueCloudSave();
      });
      inputEl("ageCompareInput").addEventListener("change", () => {
        state.age.compareDate = inputEl("ageCompareInput").value;
        renderAge();
        queueCloudSave();
      });
      $("ageCalcBtn").addEventListener("click", () => {
        state.age.dob = inputEl("dobInput").value;
        state.age.compareDate = inputEl("ageCompareInput").value;
        renderAge();
        queueCloudSave();
      });
      window.addEventListener("storage", (event) => {
        if (event.key === STORAGE.familyTheme || event.key === STORAGE.familyThemeMode) {
          setTheme(getThemePreference(), false);
        }
      });
      systemThemeQuery.addEventListener("change", () => {
        if ((localStorage.getItem(STORAGE.familyThemeMode) || "system") === "system") {
          setTheme("system", false);
        }
      });
    }
    async function registerServiceWorker() {
      if ("serviceWorker" in navigator) {
        try {
          let refreshing = false;
          window.__sathiSwManaged = true;
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
          });
          const registration = await navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" });
          registration.addEventListener("updatefound", () => {
            const worker = registration.installing;
            if (!worker) return;
            worker.addEventListener("statechange", () => {
              if (worker.state === "installed" && navigator.serviceWorker.controller) {
                worker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
          await registration.update();
        } catch (error) {
          console.error("Service worker registration failed", error);
        }
      }
    }
    function renderEverything() {
      document.body.dataset.theme = state.theme;
      inputEl("reminderTime").value = state.reminderTime;
      createPad("normalPad", NORMAL_KEYS);
      createPad("scientificPad", SCIENTIFIC_KEYS, true);
      renderHeroBadges();
      renderModeTabs();
      renderCalculator();
      renderCurrencyOptions();
      renderCurrency();
      renderUnitCoverage();
      renderUnitOptions();
      renderAge();
      renderHistory();
      renderCloudState();
      applyTextContent();
    }
    void (async function init() {
      renderEverything();
      bindEvents();
      initInstallFlow();
      await registerServiceWorker();
      await initFamilyAuth();
      await refreshCurrency();
      await maybeShowReminder();
    })();
  })();
})();
