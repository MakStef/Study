/* 
    let НАЗВА = ЗНАЧЕННЯ - створює блочну змінну, тобто таку, котра не виходить вище свого блоку, але котра 
    може бути визвана одразу в кількох блоках. Вона носить якесь своє ЗНАЧЕННЯ і звернутись до неї можна по її НАЗВІ.
*/
let myVar1 = 'Привіт';
let myVar2 = 'світ!';
let myVar3 = 'чувак!';
function hello() {
    let myVar1 = 'Hello';
    let myVar2 = 'World!';
    let myVar4 = 'Dude!';
    alert(`${myVar1} ${myVar2}`);
    alert(`${myVar1} ${myVar3}`);
}

hello();
alert(`${myVar1} ${myVar2}`);
alert(`${myVar1} ${myVar4}`);