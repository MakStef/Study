/* 
element.addEventListener(<тип>, <функція>, <опції>) - створює прослуховувач подій, котрому задається тип прослуховування, функція, котрій будуть передані дані і (необов'язково) деякі опції.
*/
myFunc = (toPrint) => console.log(toPrint);
let myButton = document.querySelector("#myButton1");
myButton.addEventListener("click", myFunc);

/*
element.onclick = <функція> - обробник для нажимання на елемент. Може приймати як задану функцію, так і анонімну.
*/
myButton = document.querySelector("#myButton2");
myButton.onclick = myFunc;