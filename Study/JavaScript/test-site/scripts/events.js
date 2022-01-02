/* 
element.addEventListener(<тип>, <функція>, <опції>) - створює прослуховувач подій, котрому задається тип прослуховування, функція, котрій будуть передані дані і (необов'язково) деякі опції.
*/
myFunc = () => console.log('myFunc');
const myButton = document.querySelector("#myButton");
myButton.addEventListener('click', myFunc);
myButton.addEventListener('click', function () { console.log('anon1') });
myButton.addEventListener('click', function () { console.log('anon2') });
/*
element.onclick = <функція> - обробник для нажимання на елемент. Може приймати як задану функцію, так і анонімну.
*/
myButton.onclick = myFunc; //Задаємо для onclick функцію myFunc.
myButton.onclick = function () { console.log('anon3') }; //Перезаписуємо функцію для onclick, в результаті відтвориться не myFunc, а третя анонімна функція.

//Контент input-у буде виведено в showInput
function showInput() {myDiv.innerText = myInput.value}
const myInput = document.querySelector('#myInput')
const myDiv = document.querySelector('#showInput')
myInput.addEventListener('input', showInput)