"use strict";

let bgcolour = "#E8E8DF";
let fgcolour = "#171720";

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('open');
});

themeToggler.addEventListener('click', ev => {
  if (bgcolour == "#E8E8DF")
  {
    bgcolour = "#171720";
    fgcolour = "#E8E8DF";
  }
  else
  {
    bgcolour = "#E8E8DF";
    fgcolour = "#171720";
  }
  document.documentElement.style.setProperty('--bg-colour', bgcolour);
  document.documentElement.style.setProperty('--fg-colour', fgcolour);
});
