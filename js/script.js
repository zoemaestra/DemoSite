"use strict";

let bgcolour = "#FFFFFF";
let fgcolour = "#000000";

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('open');
});

themeToggler.addEventListener('click', ev => {
  if (bgcolour == "#FFFFFF")
  {
    bgcolour = "#171720";
    fgcolour = "#FFFFFF";
  }
  else
  {
    bgcolour = "#FFFFFF";
    fgcolour = "#000000";
  }
  document.documentElement.style.setProperty('--bg-colour', bgcolour);
  document.documentElement.style.setProperty('--fg-colour', fgcolour);
});
