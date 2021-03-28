"use strict";

let bgcolour = localStorage.getItem("Theme");
let fgcolour = "";
let navcolour = "";
let url = "";
let currentImage = 1;

function themeSet(theme) {
  if (theme == "#171720")
  {
    bgcolour = "#171720";
    fgcolour = "#E8E8DF";
    navcolour = "#2B2B3B";
    document.getElementById("themeToggler").innerHTML = "<a href='#'>☀️</a>";
  }
  else
  {
    bgcolour = "#E8E8DF";
    fgcolour = "#171720";
    navcolour = "#171720";
    document.getElementById("themeToggler").innerHTML = "<a href='#'>🌑</a>";
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

function gallery(direction) {
  let max = 2;
  if (direction == 1){
    if (currentImage == max){currentImage = 1;}
    else{currentImage++;}
  }
  else{
    if (currentImage == 1){currentImage = max;}
    else{currentImage--;}
  }
  document.getElementById("galleryImg").src = `images/${document.getElementById("script").getAttribute('class')}/${currentImage}.png`
}

async function loadObject() {
  if (document.getElementById("script").getAttribute('class') == "home")
  {url = 'https://api.github.com/users/zoemaestra';}
  else {url = `https://api.github.com/repos/zoemaestra/${document.currentScript.getAttribute('class')}`;}
  let response = await fetch(url);
  return response.json();
}

async function insertUserDetails(obj){
  if (document.getElementById("script").getAttribute('class') == "home"){
    document.getElementById("headerimg").src = await obj.avatar_url;
    document.getElementById("bio").innerHTML = await obj.bio;
    document.getElementById("stats").innerHTML = await `${obj.followers} followers`;
  }
  else{
    document.getElementById("bio").innerHTML = await obj.description;
    document.getElementById("stats").innerHTML =await `${obj.stargazers_count} stars`;
  }
  document.getElementById("gitUrl").href = await obj.html_url;
}
loadObject().then(insertUserDetails);
