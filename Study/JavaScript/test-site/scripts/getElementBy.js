/*
Так само, як і querySelector, знаходить в документі об'єкт по його селектору.
Опис селектора відбувається в залежності від того, який з getElementBy використовувати:
    document.getElementById(<ідентифікатор>) - шукає по id елемента;
    document.getElementsByName(<ім'я>) - повертає мета-масив елементів із name = "ім'я";
    document.getElementsByClassName(<ім'я класу>) - повертає мета-масив елементів із class="ім'я класу";
    document.getElementsByTagName(<теґ>) - повертає мета-масив елементів заданого теґу;
*/
myFunc = (massive) => {for (let item of massive) {myDiv.classList.toggle("border__blue")}}

let myDivs = document.getElementsByTagName('div');
myFunc(myDivs)
myDivs = document.getElementsByName('miDiv')
myFunc(myDivs)
myDivs = document.getElementsByClassName('ourDiv')
myFunc(myDivs)
let myDiv = document.getElementById('myDiv1')
myDiv.classList.add('border__red')