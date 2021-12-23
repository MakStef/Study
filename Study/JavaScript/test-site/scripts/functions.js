/*
Є два види створення функцій і два види її виклику. Види створення:
    1. Об'явлення функції:
        function <ім'я>(<параметри>) {КОД}
    2. Вираження функції:
        <ім'я> = function(<параметри>) {КОД}
Види виклику:
    1. Звичайний виклик:
        <ім'я>(<аргументи>)
    2. Самовикликання функції (стандарт ES5):
        (створення функції)(<аргументи>)
*/

const summ = function (a, b) {
    return a + b;
}

function diff(a, b) {
    return (a > b) ? a - b : b - a;
}

function help(func) {
    return alert(func.toString());
}

function todo(func, x, y) {
    return alert(func(x, y));
}

alert(summ(10, 5)); // Один момент: параметр - це запитана змінна всередині функції, тобто в summ - це є: a, b; аргумент - це вже задане для параметра значення: 10, 5.
alert(diff(10, 5));
alert(summ(diff(10, 5), summ(10, 10)));
help(summ);
help(diff);
todo(summ, 10, 10);

/*
Ще є стрілкові функції:
    <ім'я> = (<параметри>) => {<код>}
або:
    <ім'я> = (<параметри>) => <код>
*/

let greets = (name) => {
    return alert(`Welcome, ${name}`);
}
welcome = (name) => alert(`Welcome, ${name}`);

greets('userName');
welcome('userName');