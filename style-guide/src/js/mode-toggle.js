/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
(() => {
  "use strict";
  const storedMode = localStorage.getItem("mode");
  const getPreferredMode = () => {
    if (storedMode) {
      return storedMode;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const setMode = (mode) => {
    const elements = () => document.querySelectorAll("[data-bs-theme]");
        if (elements().length === 0) {
      document.documentElement.setAttribute("data-bs-theme", mode);
    }
    const set = (e, mode) => {
      e.setAttribute("data-bs-theme", mode);
    };
    const setElements(mode) => {
      elements().forEach((e) => {
        set(e, mode);
      });
    }

    if (
      mode === 'auto' &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
setElements('dark');
    } else {
setElements('light');
    }
  };
  setMode(getPreferredMode());
  const showActiveMode = (mode, focus = false) => {
    const themeSwitcher = document.querySelector("#bd-theme");
    if (!themeSwitcher) {
      return;
    }
    const themeSwitcherText = document.querySelector("#bd-theme-text");
    const activeModeIcon = document.querySelector(".theme-icon-active use");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${mode}"]`
    );
    const svgOfActiveBtn = btnToActive
      .querySelector("svg use")
      .getAttribute("href");
    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });
    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeModeIcon.setAttribute("href", svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);
    if (focus) {
      themeSwitcher.focus();
    }
  };
  function activateStylesheet(device, mode) {
    const links = document.querySelectorAll("link[id^='topcoat-']");
    links.forEach(link => link.disabled = true);
  
    const targetId = `topcoat-${device}-${mode}`;
    const match = document.querySelector(`#${targetId}`);
    if (match) match.disabled = false;
    else console.warn(`Shadow stylesheet not found: #${targetId}`);
  }
  
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (storedMode !== "light" || storedMode !== "dark") {
        setMode(getPreferredMode());
      }
    });
  window.addEventListener("DOMContentLoaded", () => {
    showActiveMode(getPreferredMode());
    document.querySelectorAll("[data-bs-theme]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const mode = toggle.getAttribute("data-bs-theme");
        localStorage.setItem("mode", mode);
        setMode(mode);
        showActiveMode(mode, true);
      });
    });
  });
})();
