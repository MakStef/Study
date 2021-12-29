/*
element.classList - список класів елементу.
Методи:
    .add(<клас>) - додає елементу новий клас;
    .remove(<клас>) - видаляє клас елементу;
    .toggle(<клас>) - перемикає клас (якщо клас є, то його видаляється, якщо немає, то додається);
    .item(<номер>) - видає назву класа, що знаходиться на місці індексу з заданим номером.
    .contains(<клас>) - перевіряє, чи є заданий клас у елемента.
*/

const myElement = document.querySelector("#div1")
myElement.classList.add('border__red')
myElement.classList.remove('border__red')
myElement.classList.toggle('border__blue') // підключив border__blue
myElement.classList.toggle('border__blue') // відключив border__blue
myElement.classList.toggle('border__blue') // знову підключив border__blue до класів
alert(myElement.classList.contains('border__blue'))
alert(myElement.classList.item(0))