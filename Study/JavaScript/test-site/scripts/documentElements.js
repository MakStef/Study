/*
document.createElement('<теґ>') - створює елемент в документі;
element.innerHTML = '<html-код>' - змінює внутрішній html-код елементу;
element.innerText = '<текст>' - змінює текст елементу;
element.append(<елемент>) - вставка всередину елементу іншого елементу;
element.cloneNode(<true/false>) - клонує елемент, взалежності від true або false, з внутрішнім вмістом, або без;
element.remove() - видаляє елемент.
*/
const myDiv = document.querySelector('#toInsert');
myDiv.innerHTML = "<b>Приклад</b>";
const myP = document.createElement('p');
myP.innerText = "Мій параграф!";
const mySecondP = myP.cloneNode(false);
mySecondP.innerText = "Відсутність тексту";
myDiv.append(myP);
myDiv.append(mySecondP);
const myButton = document.createElement("button");
myButton.innerText = "Видалити другий параграф";
myButton.onclick = myFunc = () => mySecondP.remove();
myDiv.append(myButton);