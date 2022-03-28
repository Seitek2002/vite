const headerMenu = document.querySelector(".header__burger");
const menuVisible = document.querySelector("body");

headerMenu.addEventListener("click", () =>
  menuVisible.classList.toggle("menu-visible")
);
