// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function plosha (a,b){
//     let res =a*b;
//     return res;
// }
// let x= plosha(2,4)
// console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function kolo(pi, r) {
//     let res = 2*pi*r;
//     return res;
// }
// let x= kolo (3.14,5)
// console.log(x);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylindr (pi, h,r){
//     let res = 2*pi*r*h;
//     return res;
// }let x= cylindr(3.14 ,6,9)
// console.log(x);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array1(array){
//     for (let item of array){
//         console.log(item);
//     }
// }
//array1([1,2,3])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf (text){
//     document.write(`<p>${text}</p>`)
// }
// let x = 'hello';
// paragraf(x)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function spysok (text){
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>
//     `)
// }
// let x= 'hello';
// spysok(x)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function spysok1 (text, count){
//     document.write(`<ul>`)
//     for (i=0; i<count; i++) {
//     document.write (`<li>${text}</li>`)
//    }
//    document.write(`</ul>`)
// }
// spysok1('hello', 3)
    
//     

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function spysok2(array) {
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         let arrayof = array[i];
//         document.write(`<li>${arrayof}</li>`)
//     }
//     document.write(`</ul>`)
// }
//     let x = [1, 'r', 's', true, 9, false, 8];
//     spysok2(x);
//


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.
// let x = {
//     id: +'1',name:'ira',age:+'5',
//     fun1: function () {
//         document.write(`<div>id:${this.id}</div>`)
//         document.write(`<div>name:${this.name}</div>`)
//         document.write(`<div>age:${this.age}</div>`)
//     },
// }
// x.fun1();


// - створити функцію яка повертає найменьше число з масиву
// let funmin =(array)=>{
//     let min=array[0];
//     for (let funminel of array){
//         if (funminel<min) min=funminel;
//     }
//     return min;
//     }
// let funminreturn=funmin([1,56,12,3])
// console.log(funminreturn);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let plus =(array)=>{
//     let i=0;
//     for( let plusel of array){
//         i+=plusel;
//     }
//     return i;
// }
// let suma=plus([1,2,10]);
// console.log(suma);

