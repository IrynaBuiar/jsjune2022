// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (i=0 ; i<10 ; i++){
    document.write(`<div>Hello</div>`)
}
 //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let r = [1,2,3,4,5,6,7,8,9,10];
for (i=0 ; i<10; i++)
{
    document.write(`<div> 
<h1>hello ${r[i]}</h1>
</div>`)
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let k=0;
while (k<20 ){
document.write(`<h1> hello</h>`);
 k++}

 //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let d=0;
while (d<20){
document.write(`<h1> hello ${d}</h1>`);
d++}

// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']
    document.write(`<ul>`)
for (const list of listOfItems){
    document.write(`<li>${list}</li>`)
    }
document.write(`</ul>`)

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масив

//  Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let  products = [
  //  {
    //    title: 'milk',
      //  price: 22,
        //image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//    },
  //  {
      //  title: 'juice',
 //       price: 27,
   //     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    //},
   // {
     //   title: 'tomato',
       // price: 47,
        //image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//    },
  //  {
    //    title: 'tea',
    //    price: 15,
      //  image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    //},
//]
 //for (const product of products)
//{    document.write(` <div class="product-card">
  //      <h3 class="product-title">${product.title} ${product.price} </h3>;
 //       <img src="${product.image}" alt="помилка" class="product-image"> ;
        
  //  </div>`);
//}

//    є масив
//let users = [
 //   {name: 'vasya', age: 31, status: false},
  //  {name: 'petya', age: 30, status: true},
   // {name: 'kolya', age: 29, status: true},
   // {name: 'olya', age: 28, status: false},
    //{name: 'max', age: 30, status: true},
    //{name: 'anya', age: 31, status: false},
   // {name: 'oleg', age: 28, status: false},
   // {name: 'andrey', age: 29, status: true},
    //{name: 'masha', age: 30, status: true},
   // {name: 'olya', age: 31, status: false},
   // {name: 'max', age: 31, status: true}
//];
//за допомоги циклу вивести:
 //   - користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років
//let users = [
  //  {name: 'vasya', age: 31, status: false},
    //{name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
  //  {name: 'olya', age: 28, status: false},
    //{name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
  //  {name: 'oleg', age: 28, status: false},
    //{name: 'andrey', age: 29, status: true},
//    {name: 'masha', age: 30, status: true},
  //  {name: 'olya', age: 31, status: false},
    //{name: 'max', age: 31, status: true}
//];
//for (const user of users) {
 //   if (user.status){
   //     console.log(user)
 //   }
//};
//for (const user of users) {
   // if (!user.status){
      //  console.log(user)
   // }
    //for (const user of users){
        //if (user.age >30) {
      //      console.log(user)
    //    }
  //  }

//}
//створити масив з:
 //   - з 5 числових значень
//let a = [1 ,2,3,4,5,]
//console.log(a);
//- з 5 стічкових значень
//let b =['a', 's','d','f','h']
//console.log(b);
//- з 5 значень стрічкового, числового та булевого типу
//let a=['a',6,'d',9,true]
//console.log(a)
//- та вивести його в консоль
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let a=[];
//a[0]=true;
//a[1]=false;
//a[2]=1;
//a[3]='p';
//let array=[a[0],a[1]]
//console.log(array);

//є масив
//let a=[2,17,13,6,22,31,45,66,100,-18]
//перебрати його циклом while
//i=0;
//while ( i<a.length){
    //console.log(a)
    //i++;
//}
//перебрати його циклом for

//for (i=0; i<a.length; i++){
  //  console.log(a);
//}

//перебрати циклом for та вивести  числа тільки з непарним індексом
// for(i=0; i<a.length; i++){
//     if (a[i]%2 !==0){
//         console.log(a[i]);
//     }
// }
//перебрати циклом while та вивести  числа тільки з непарним індексом
// i=0;
// while (i<a.length){
//     if( a[i] % 2 !==0){
//         console.log(a[i])
//     }
//     i++
// }
//перебрати циклом while та вивести  числа тільки парні  значення
// i=0;
// while (i<a.length){
//     if(a[i]%2===0){
//         console.log(a[i]);
//     }
//     i++;
// }
//перебрати циклом for та вивести  числа тільки парні  значення
// for(i=0; i<a.length;i++){
//     if (a[i]%2===0){
//         console.log(a[i])
//    }
//}
//замінити кожне число кратне 3 на слово "okten"
// for(i=0; i<a.length; i++){
//    if(a[i]%3===0){
//         a[i]='okten';
//       console.log(a[i]);
//     }
//  }
//  console.log(a);
// for(i=a.length; i>=0; i--){
//    console.log(a[i]);
//  }
//
//вивести масив в зворотньому порядку.
//  for(i=a.length; i>=0; i--){
//    console.log(a[i]);
//  }
//
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(i=0; i<a.length; i++) {
//     console.log(a[i])
// }
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let a=['a','s','d','f','g','h','j','k']
// for (i=0; i<a.length;i++){
//     console.log(a[i]);
//}
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки булеві елементи
//let a=['a',5,6,true, 'r',false,false]
//for (i=0; i<a.length; i++){
//     if(typeof a[i]===`boolean`){
//         console.log(a[i])
//     }
// }
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// for (i=0; i<a.length; i++){
//     if(typeof a[i]===`number`){
//         console.log(a[i])
//     }
//}
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести
// тільки рядкові елементи
// for (i=0; i<a.length; i++){
//     if(typeof a[i]===`string`){
//         console.log(a[i]);
//     }
//}
//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//Вивести в консоль всі його елементи в циклі.
 a=[];
a[0]=2;
a[1]=true;
a[2]=false;
a[3]=6;
a[4]='rak';
a[5]='water';
a[6]=8;
a[7]=false;
a[8]='tir'
a[9]=9
for (i=0;i<a.length; i++){
    console.log(a[i])
}
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i=0; i<10; i++){
//    console.log(a[i])
//}
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i+=2){
//     console.log(`step`, i)
//     }


























