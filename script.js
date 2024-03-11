let rubrik = document.querySelector("h1");
let sidfot = document.querySelector("footer");
let men = document.querySelector("main");
let navi = document.querySelector("nav");
let prod = document.querySelector(".produkt");
let bod = document.querySelector("body");
let sö = document.querySelector(".Söt");
let mjö = document.querySelector(".Mjölig");
let sm = document.querySelector(".Små");
let am = document.querySelector(".Amandine");
let ma = document.querySelector(".Mandel");


function change_mode()
{
    console.log("CHNAGE")
    
    rubrik.classList.toggle("dark");

    sidfot.classList.toggle("dark");

    men.classList.toggle("dark");

    navi.classList.toggle("dark");

    prod.classList.toggle("dark");

    bod.classList.toggle("dark");

    sö.classList.toggle("dark");
    mjö.classList.toggle("dark");
    sm.classList.toggle("dark");
    am.classList.toggle("dark");
    ma.classList.toggle("dark");

}