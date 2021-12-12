class MobileMenu {
  constructor() {
    this.openMenuBtn = document.querySelector("#open-menu-btn-js");
    this.closeMenuBtn = document.querySelector("#close-menu-btn-js");
    this.menuContent = document.querySelector("#mobile-menu-js");
    this.menuOverlay = document.querySelector("#mobile-menu-overlay-js");
    this.body = document.querySelector("body");
    this.events();
  }

  events() {
    this.openMenuBtn.addEventListener("click", () => this.menuOpen());
    this.closeMenuBtn.addEventListener("click", () => this.menuClose());
  }

  menuOpen() {
    this.menuContent.classList.add("mobile-menu--open");
    this.menuOverlay.classList.add("mobile-menu__overlay--open");
    this.body.style.overflowY = "hidden";
    this.menuOverlay.addEventListener("click", () => this.menuClose());
  }

  menuClose() {
    this.menuContent.classList.remove("mobile-menu--open");
    this.menuOverlay.classList.remove("mobile-menu__overlay--open");
    this.body.style.overflowY = "auto";
  }
}

new MobileMenu();
