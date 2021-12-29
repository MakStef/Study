/* 
document.querySelector(<селектор>) - знаходить в документі об'єкт по його селектору. 
Опис селектора відбувається так само, як і в css, з усіма знаками, що вказують атрибут пошуку.
Обирає тільки один елемент (якщо заданий селектор має вигляд: "a", то обере тільки перший елемент цього виду).
*/
const myElement = document.querySelector("#myDiv1");
myElement.classList.add('border__red');
myElement.classList.add('border__blue');

/*
document.querySelectorAll(<селектор>) - знаходить в документі усі елементи по селектору, і утворює з них мета-масив.
*/
const myElements = document.querySelectorAll('div');
for (let element of myElements) {
    element.classList.toggle('border__blue');
}