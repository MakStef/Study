/*
Є три способи створення змінних:
    const <ім'я> - незмінна, котру видно в її блоці коду і нижче;
    let <ім'я> - змінна, котру видно в її блоці коду і нижче;
    var <ім'я> - змінна, котру видно в її функції.
*/

/*
Основні типи змінних:
Number - число;
String - рядок, текст;
Boolean - true або false;
BigInt - число, котре більше за Number.MAX_SAFE_INTEGER;
null - значення немає;
undefined - значення не знайдене;
object - список ключів:значень.
*/

const myName = "Maksym"
let myAge = 16
var studying = false
var anyTroubles = false
alert(`${myName} ${myAge} ${studying}`)
myName = "not a Maksym" // скрипт не буде продовжуватись після цього рядка, бо виникає проблема - спроба зміни незмінної.
myAge = 16 + 1
studying = (anyTroubles == true) ? false : true;
alert(`${myName}, ${myAge}, ${studying}`)