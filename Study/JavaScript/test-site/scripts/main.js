/* Щоби почати розглядати приклади, почни знімати коментування з функцій( а саме: //), котре виставлене в початку рядку. */

//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello, world!';
//
//let myVar1 = String('Текст'); /* Вказувати, що це за тип змінної НЕ обов'язково, тобто цей рядок - це те ж саме, що і 
//let myVar1='Текст' */
//let myVar2 = Number(100); //Тут і нижче так само! 
//let myVar3 = Boolean(true);
//let myVar4 = Array(['Слово', 12]);
//let myVar5 = Object(myVar1);
//
//alert('Слово'+'1'); //Повідомлення від сайту
//alert('Слово'+1);
//alert(1+1);
//
//if (myVar2 === 100) { //Ворота if, else
//    alert('myVar2 рівне 100');
//} else {
//    alert('myVar2 не рівне 100');
//}
//
//function plus(num1, num2) { //Функція
//    result = num1+num2;
//    return result;    
//}
//
//alert(plus(2, 5));
//
//document.querySelector('html').onclick = function() {
//    alert('Click has been detected!');
//}
//
var myImage=document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute(src);
    if (mySrc === 'images/wow.png') {
        mySrc = 'images/horse.png'
    } else {
        mySrc = 'images/wow.png'
    }
}