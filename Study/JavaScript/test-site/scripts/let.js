/*
    let НАЗВА = ЗНАЧЕННЯ;
    Створює змінну, звернутись до котрої можна по її НАЗВІ.
*/
let currentTempC = 22; // градуси Цельсія
alert(currentTempC);
currentTempC = 22.5; // оновили значення змінної, вже не використовуємо ключове слово let
alert(currentTempC);

let myRandomVal; // оикликаючи змінну, їй не обов'язкове якесь значення, якщо нічого не задавати - створиться змінна зі значенням undefined

let myVal1 = "1", myVal2 = 3, myVal3 = myVal1+myVal2;
alert(myVal1 + myVal2 + myVal3);

myVal1 = "5";
alert(myVal3)