let burgerBtn = document.querySelector(".main-menu__burger");
let dropDown = document.querySelector(".main-menu__nav");


burgerBtn.addEventListener("click", () => {
  dropDown.classList.toggle("showNav");
});

