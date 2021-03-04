"use strict";

let bgcolour = localStorage.getItem("Theme");
let fgcolour = "";
let navcolour = "";

function themeSet(theme) {
  if (theme == "#171720")
  {
    bgcolour = "#171720";
    fgcolour = "#E8E8DF";
    navcolour = "#2B2B3B";
  }
  else
  {
    bgcolour = "#E8E8DF";
    fgcolour = "#171720";
    navcolour = "#171720";
  }
  bgcolour = theme;
  document.documentElement.style.setProperty('--bg-colour', bgcolour);
  document.documentElement.style.setProperty('--fg-colour', fgcolour);
  document.documentElement.style.setProperty('--nav-colour', navcolour);
  localStorage.setItem("Theme", bgcolour);
}

themeSet(bgcolour);

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('open');
});

themeToggler.addEventListener('click', ev => {
  if (bgcolour == "#171720"){themeSet("#E8E8DF");}
  else {themeSet("#171720");}
});

window.addEventListener('storage', () => {
  themeSet(localStorage.getItem("Theme"));
});
