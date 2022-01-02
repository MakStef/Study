/*
Об'єкт в JS - це змінний кортеж даних, котрий утворюється і записується конструкцією:
    let/const/var <ім'я>{
        <ключ1>:<значення1>,
        <ключ2>:<значення2>,
        <ключ3>:<значення3>
    }
Для створення шаблону об'єкту, всередині класу вписується конструктор:
    class <Ім'я класу> {
        constructor (<значення1>,<значення2>,<значення3>,...) {
            this.<ключ1> = значення1;
            this.<ключ2> = значення2;
            this.<ключ3> = значення3;
        }
    }
Для створення об'єкту з шаблону достатньо конструкції:
    const/let/var <ім'я> = new <Ім'я класу>(<значення1>,<значення2>,<значення3>,...)
*/
const myObject = {
    myString: 'Слово',
    myInt: 321,
    myBool: false
}
class MyObject {
    constructor (myString, myInt, myBool) {
        this.myString = myString;
        this.myInt = myInt;
        this.myBool = myBool;
    }
}
const myObject1 = new MyObject("Hola", 963, true)
const myObject2 = new MyObject("Hello", 20105, false)
alert(myObject);
alert(myObject1);
alert(myObject2);
/*
Щоб отримати від об'єбкту якісь дані слід написати якесь із звернень:
    <ім'я>.<ключ> 
або:
    <ім'я>['<ключ>']
*/
alert(myObject.myString);
alert(myObject['myBool']);
/*
В об'єкти можна записувати функції, це буде мати такий вигляд:
    const/let/var <ім'я> = {
        <ім'я>: function (<параметри>) {
            <код>
        }
    }
*/
myObject.myFunction = function (param) {
    alert(myObject + '\n' + param);
}
myObject.myFunction('Welcome');
/*
Щоби всередині об'єкту звернутися до якоїсь частини об'єкту можна використовувати: 
    <ім'я>.<ключ> 
або ключове слово this:
    this.<ключ>
*/
myObject.myFunction = function () {
    alert(myObject.myInt)
    alert(this.myInt)
}
myObject.myFunction()
/*
for (let <ім'я> in <ім'я об'єкту>) {
    <код>
}
Цикл, що проходить по всім ключам об'єкту, створюючи всередині циклу змінну з якимось ім'ям, котра буде отримувати ключ елементу, по якому цикл на дану мить проходиться.
*/
for (let myKey in myObject) {
    alert(myKey + ':' + myObject[myKey])
}