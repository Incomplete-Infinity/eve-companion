const extractMode = (str) => str.split(" ")[0].toLowerCase();
const defineAntiMode = (str) =>
  str.toLowerCase() === "light" ? "dark" : "light";
const makeTitleCase = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
function toggleMode(e) {
  const mode = extractMode(e.value);
  const antiMode = defineAntiMode(mode);
  document
    .querySelector("body")
    .setAttribute("data-bs-theme", mode);
  localStorage.setItem("mode", mode);
  e.value = `${makeTitleCase(antiMode)} Mode`;
  e.classList.remove(
    `bg-${mode}`,
    `text-${antiMode}`,
    `border-${antiMode}`,
    `btn-${mode}`
  );
  e.classList.add(
    `bg-${antiMode}`,
    `text-${mode}`,
    `border-${mode}`,
    `btn-${antiMode}`
  );
}
