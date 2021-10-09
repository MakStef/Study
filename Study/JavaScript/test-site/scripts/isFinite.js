/*
    isFinite(ЗНАЧЕННЯ) - перевіряє, чи є число звичайним(тобто не NaN, не безкінечність, не мінус бескінечність і т.п.),
    повертає true, якщо число звичайне або false, якщо ні.
*/

let myVar1 = Infinity
let myVar2 = -Infinity
let myVar3 = "Рядок"
let myVar4 = 15

if (isFinite(myVar1) === false) {
    alert(`${myVar1} is not Finite`)
}
else {
    alert(`${myVar1} is Finite`)
}

if (isFinite(myVar2) === false) {
    alert(`${myVar2} is not Finite`)
}
else {
    alert(`${myVar3} is Finite`)
}

if (isFinite(myVar3) === false) {
    alert(`${myVar3} is not Finite`)
}
else {
    alert(`${myVar3} is Finite`)
}

if (isFinite(myVar4) === false) {
    alert(`${myVar4} is not Finite`)
}
else {
    alert(`${myVar4} is Finite`)
}