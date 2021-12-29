/*
.getAtrribute(<атрибут>) - надає значення вказаного атрибуту;
.setAtrribute(<атрибут>, <значеня>) - додає або змінює атрибут і його значення;
.hasAtrribute(<атрибут>) - вертає true, якщо в елемента присутній заданий атрибут;
.removeAtrribute(<атрибут>) - видаляє вказаний атрибут;
.toggleAtrribute(<атрибут>) - перемикає атрибут (якщо елемент його не має, то він додається, а якщо він був, то видаляється);
.hasAtrributes() - перевірка, чи елемент має хоч один атрибут;
.getAtrributesNames() - вертає назви усіх атрибутів елементу.
*/

const myElement = document.getElementsByTagName("img")[0]
myElement.removeAttribute("src")
alert(myElement.hasAttributes())
myElement.setAttribute("alt", "Не коняку, а хрін тобі!")
myElement.setAttribute("src", "images/hrin.jpg")
myElement.toggleAttribute('alt')
alert(myElement.getAttribute("src"))
alert(myElement.getAttributeNames())