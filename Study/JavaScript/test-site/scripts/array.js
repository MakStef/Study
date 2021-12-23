/*
Щоб створити масив достатньо конструкції:
    <ім'я> = [<ел0>, <ел1>, <ел2>, <ел3>, ...] 
або:
    const/let/var <ім'я> = [<ел0>, <ел1>, <ел2>, <ел3>, ...];
*/
func = (name="User") => {alert(`Hello, ${name}`)};

massive = [0, 'var', true];
alert(massive)

const myArray = [massive, func()];
alert(myArray[0]);
myArray[1];

/* 
Методи масивів:
    .push(<елемент>) - добавити елемент в кінець масиву;
    .pop() - видаляє останній елемент масиву;
    .shift() - видаляє перший елемент масиву;
    .unshift(<елемент>) - добавляє перший елемент масиву;
    .indexOf(<елемент>) - знаходить індекс елементу;
    .splice(<індекс>, <кількість>, <елемент для вставки 1>, <елемент для вставки 2>) - видаляє елемент на заданому індексі і, якщо задано, якусь кількість елементів після нього, на їх місце може поставити інші <елементи>, якщо їх задано;
*/
myArray.pop()
alert(myArray)
myArray.push('Man')
alert(myArray)
myArray.splice(0, myArray.length, 'item1', 'item2', 'item3')
alert(myArray)
myArray.shift()
alert(myArray)
myArray.unshift('new item1')
alert(myArray)
alert(myArray.indexOf('new item1'))