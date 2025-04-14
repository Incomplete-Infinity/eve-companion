// Constants and Destructuring
const { body, documentElement, getElementsByName } = document;
const widthBreakpoint = 768;

// Local Storage Functions
const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");

// Theme-related Functions
const getThemeElements = () => [...document.getElementsByName("theme")];
const getSelectedTheme = () => getThemeElements()?.filter(element => element?.checked)[0]?.value;


const applyTheme = (theme) => {
  const attribute = "data-theme";
  documentElement.setAttribute(attribute, theme);
  saveSelectedTheme(theme);
};

// Theme Mode Functions
const getThemeMode = () => {
  const mode = documentElement.getAttribute("data-theme");
  const isDark = () => (mode >= 5);

  return isDark() ? "dark" : "light";
};

// Initialization
const applyMode = (mode) => {
  const attribute = "data-bs-theme";
  document.documentElement.setAttribute(attribute, mode);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getSavedTheme();

  if (savedTheme)
  {
    applyTheme(savedTheme);
  } else
  {
    // If no saved theme, use the user's preferred color scheme
    applyMode(getThemeMode());
  }

  // Event listener for theme selection
  document.getElementsByName("theme").forEach((element) => {
    element.addEventListener("click", () => {
      applyTheme(getSelectedTheme());
      applyMode(getThemeMode());
    });
  });
});