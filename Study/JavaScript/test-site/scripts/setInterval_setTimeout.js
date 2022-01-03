/*
setInterval(<функція>, <мілісекунди>) - функція буде виконуватись щоразу після заданого інтервалу, поки не спинять setInterval;
setTimeout(<функція>, <мілісекунди>) - після заданого часу функція виконається один раз;
clearInterval(<інтервал>) - зупиняє виконання заданого setInterval або скасовує setTimeout.
*/

const everySecond = setInterval(function(){console.log('Marked')}, 1000);
const afterSeconds = setTimeout(function(){console.log('Marked too')}, 3000);

setTimeout(function(){clearInterval(everySecond)}, 10000);