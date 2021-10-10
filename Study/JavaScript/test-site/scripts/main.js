/* Щоби почати розглядати приклади, почни знімати коментування з функцій( а саме: //), котре виставлене в початку рядку. */
$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');
})

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';


function plus(num1, num2) { //Функція
    result = num1+num2;
    return result;    
}

alert(plus(2, 5));

document.querySelector('html').onclick = function() {
    alert('Click has been detected!');
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wow.png') {
      myImage.setAttribute ('src','images/horse.png');
    } else {
      myImage.setAttribute ('src','images/wow.png');
    }
}

