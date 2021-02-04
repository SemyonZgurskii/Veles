const menuContainer = document.querySelector(".main-header");
const menuButton = menuContainer.querySelector(".main-header__menu-button");

const MenuClassName = {
  OPEN: "main-header--menu-opened",
  CLOSED: "main-header--menu-closed",
}


menuContainer.classList.remove("main-header--no-js");
menuContainer.classList.remove(MenuClassName.OPEN);
menuContainer.classList.add(MenuClassName.CLOSED);

menuButton.addEventListener("click", function() {
  if (menuContainer.classList.contains(MenuClassName.CLOSED)) {
    menuContainer.classList.remove(MenuClassName.CLOSED);
    menuContainer.classList.add(MenuClassName.OPEN);
  } else {
    menuContainer.classList.remove(MenuClassName.OPEN);
    menuContainer.classList.add(MenuClassName.CLOSED);
  }
})
