"use strict"
let enter = document.querySelector('#enter')
let calcul = document.querySelector('#calcul') 
let offBtn = document.querySelector('#off')
let onBtn = document.querySelector('#on') 

const off = (obj) => {
    calcul.innerHTML = "";
    enter.innerHTML = "";
    obj.style.display = "none"
    onBtn.style.display = "block";
}

const on = (obj) => {
    calcul.innerHTML = "0";
    enter.innerHTML = "0";
    obj.style.display = "none"
    offBtn.style.display = "block";
}

const second = () => {
    
}