var swich = document.getElementById('switch');
var cover = document.getElementById("cover");
var maincard = document.getElementById("main_container");
var display = document.getElementById("display");
var input = document.getElementById("input_container");
var toggleText = document.getElementById("bottom_container");    
var logo = document.getElementById("logo");

swich.onclick = function() {
    cover.classList.toggle("cover_dark_theme");
    maincard.classList.toggle("dark_main_container");
    display.classList.toggle("display_dark");
    input.classList.toggle("input_container_dark");
    toggleText.classList.toggle("bottom_container_dark");
    logo.classList.toggle("logo_dark");
}