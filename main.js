/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== LIGHT-THEME ===============*/
const themeButton = document.getElementById("theme-button"); /* definition d'une variable qui est l'element avec l'id "theme-button" */
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Theme précédement sélectionné (si il y en a un)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// On obtient le theme actuel que l'interface a en validant la classe light-theme
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// On valide si l'utilisateur a précédemment choisi un theme
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activer / désactiver le theme manuellement avec le bouton
themeButton.addEventListener("click", () => {
  // Ajouter ou retirer le light theme/icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // On sauvegarde le thème et l'icône actuelle que l'utilisateur a choisi
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});