const menu = document.querySelector(".nav-links");
const nav = document.querySelector("nav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector("#hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (nav.classList.contains("showMenu")) {
    nav.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
  } else {
    nav.classList.add("showMenu");
    closeIcon.style.display = "inline";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)