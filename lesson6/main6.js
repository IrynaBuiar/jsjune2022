// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello word';
// console.log(a.length);
//
// let b= 'lorem ipsum'
// console.log(b.length);
//
// let c = 'javascript is cool'
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello word';
// console.log(a.toUpperCase());
//
// let b= 'lorem ipsum';
// console.log(b.toUpperCase());
//
// let c = 'javascript is cool'
// console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// console.log(a.toLowerCase());
//
// let b ='LOREM IPSUM';
// console.log(b.toLowerCase());
//
// let c = 'JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split= str.split(' ');
// console.log(split);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let x = [10,8,-7,55,987,-1011,0,1050,0]
// let b=x.map(value => value+());
// console.log(b);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
// nums.sort(function (a, b) {
//     return b - a;
// })
// console.log(nums);
// nums.sort(function (a, b) {
//     return a - b;
// })
// console.log(nums);


//
//
// - є масив  -- відсортувати його за спаданням за monthDuration.
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //
// let cour = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// cour.sort((cour1, cour2) => cour1.monthDuration - cour2.monthDuration);
// console.log(cour);
//
// let c= cour.filter(value => value.monthDuration>5);
// console.log(c);

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//

// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color: 'black'},
//     {cardSuit: 'clubs', value: 2, color: 'black'},
//     {cardSuit: 'clubs', value: 3, color: 'black'},
//     {cardSuit: 'clubs', value: 4, color: 'black'},
//     {cardSuit: 'clubs', value: 5, color: 'black'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'Jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'Queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'King', color: 'black'},
//     {cardSuit: 'clubs', value: 'Joker', color: 'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
//     {cardSuit: 'diamonds', value: 2, color: 'red'},
//     {cardSuit: 'diamonds', value: 3, color: 'red'},
//     {cardSuit: 'diamonds', value: 4, color: 'red'},
//     {cardSuit: 'diamonds', value: 5, color: 'red'},
//     {cardSuit: 'diamonds', value: 6, color: 'red'},
//     {cardSuit: 'diamonds', value: 7, color: 'red'},
//     {cardSuit: 'diamonds', value: 8, color: 'red'},
//     {cardSuit: 'diamonds', value: 9, color: 'red'},
//     {cardSuit: 'diamonds', value: 10, color: 'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
//     {cardSuit: 'diamonds', value: 'King', color: 'red'},
//     {cardSuit: 'diamonds', value: 'Joker', color: 'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color: 'red'},
//     {cardSuit: 'hearts', value: 2, color: 'red'},
//     {cardSuit: 'hearts', value: 3, color: 'red'},
//     {cardSuit: 'hearts', value: 4, color: 'red'},
//     {cardSuit: 'hearts', value: 5, color: 'red'},
//     {cardSuit: 'hearts', value: 6, color: 'red'},
//     {cardSuit: 'hearts', value: 7, color: 'red'},
//     {cardSuit: 'hearts', value: 8, color: 'red'},
//     {cardSuit: 'hearts', value: 9, color: 'red'},
//     {cardSuit: 'hearts', value: 10, color: 'red'},
//     {cardSuit: 'hearts', value: 'Jack', color: 'red'},
//     {cardSuit: 'hearts', value: 'Queen', color: 'red'},
//     {cardSuit: 'hearts', value: 'King', color: 'red'},
//     {cardSuit: 'hearts', value: 'Joker', color: 'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color: 'black'},
//     {cardSuit: 'spades', value: 2, color: 'black'},
//     {cardSuit: 'spades', value: 3, color: 'black'},
//     {cardSuit: 'spades', value: 4, color: 'black'},
//     {cardSuit: 'spades', value: 5, color: 'black'},
//     {cardSuit: 'spades', value: 6, color: 'black'},
//     {cardSuit: 'spades', value: 7, color: 'black'},
//     {cardSuit: 'spades', value: 8, color: 'black'},
//     {cardSuit: 'spades', value: 9, color: 'black'},
//     {cardSuit: 'spades', value: 10, color: 'black'},
//     {cardSuit: 'spades', value: 'Jack', color: 'black'},
//     {cardSuit: 'spades', value: 'Queen', color: 'black'},
//     {cardSuit: 'spades', value: 'King', color: 'black'},
//     {cardSuit: 'spades', value: 'Joker', color: 'black'},
// ];

// // - знайти піковий туз
// let c = cards.filter(value => {
//         if (value.value === 'Ace' && value.cardSuit === 'spades') {
//             return true;
//         }
//     }
// )
// console.log(c);
//
// //- всі шістки
// let a = cards.filter(value => value.value === 6)
// console.log(a);
//
// // - всі червоні карти
// let b = cards.filter(value => value.color === "red")
// console.log(b);
//
// // - всі буби
// let h = cards.filter(value => value.cardSuit = 'clubs')
// console.log(h);
//
// //всі трефи від 9 та більше
// let d = cards.filter(value => {
//     if (value.cardSuit === 'clubs' && value.value >= 9+"") {
//         return true;
//     }
// })
// console.log(d)
// //
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = cards.reduce ( function (acumul ,card) {
//     if (card.cardSuit === 'clubs') {
//         acumul.clubs.push(card);
//     }
//     if (card.cardSuit === 'spades') {
//         acumul.spades.push(card);
//     }
//     if (card.cardSuit === 'hearts') {
//         acumul.hearts.push(card);
//     }
//     if (card.cardSuit === 'diamonds') {
//         acumul.diamonds.push(card);
//     }
//     return acumul;
// },
//   {clubs:[],   spades:[],   hearts:[],  diamonds:[]});
// console.log(reduce)
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let array =' Каждый охотник желает знать';
// function delete_characters(str, length){
// let x=[];
// let slice = array.slice(str,7);
//  for ( let i=0; i<array.length; i++) {
//      let slicelement = slice[i] ;
//          if ( slice.length===length){
//              x.push(slicelement);
//      }
//  }
//  return  x.join();
// }
// document.write(delete_characters(` Каждый охотник желает знать`,7));
// console.log(delete_characters(array,7));


// function delete_characters (str,n) {
//     return str.substring(0,n );}
// console.log(delete_characters(` Каждый охотник желает знать`,7));

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str)=>{
//     let tyre = str.replaceAll(' ', '-')
//     let up = tyre.toUpperCase()
//     return up
// }
// console.log(insert_dash(str));

// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let array = []
// function cutString(str, n) {
//     for (let i = 0; i < str.length; i += n) {
//         let cut = str.substring(i,   i + n
//     )
//         array.push(cut)
//     }
//     return array
// }
//
// console.log(cutString(`наслаждения`,3));
//

// Напишіть функцію, яка приймає рядок як аргумент і претворює регістр першого символу рядка з нижнього регістру у верхній.
// let str='hello'
// let str2=str.charAt(0).toUpperCase()+str.slice(1);
// console.log(str2);

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'hello java script'
// let array= str.split(' ');
// for (let i =0; i<array.length; i++){
//     array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
// }
// let str2=array.join(' ');
// console.log(str2);


// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let array = n1.split('..');
// for (let i=0; i<array.length; i++) {
//     array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1,array[i].length)
// }
// let n11=array.join(' ')
// console.log(n11);

// let n2 = 'Ron---Whisley'
// let array2=n2.split('---');
// for (let i=0; i<array2.length; i++) {
//     array2[i]=array2[i].charAt(0).toUpperCase()+array2[i].slice(1,array2[i].length)
// }
// let n21=array2.join(' ');
// console.log(n21);

// let n3 = 'Hermione__Granger'
// let array3=n3.split('__');
// for (let i=0; i<array3.length; i++){
//     array3[i]=array3[i].charAt(0).toUpperCase()+array3[i].slice(1,array3[i].length)
// }
// let n31=array3.join(' ');
// console.log(n31);

//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о";
//      let str = "Астрономия это наука о небесных объектах";
//      let count = (element, str)=>{
//          let count=0;
//          for ( let i of str){
//              if (i===element){
//                  count++
//              }
//          }
//          return count
//      }
// console.log(count(str,symb));


//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let array = "Сила тяжести приложена к центру масс тела";
// let n=5;
// let cutString = (array, n)=> {
// //    let array = str.split(' ');
//  //for (let i = 0; i < array.length; i ++) {
//         if (array.length > n) {
//             let x= array.length;
//           let cut =x.slice(0,n++)
//       }
//                    return cut;
//  //    }
// }
// console.log(cutString(array,n));

//створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let funRandom = () => {
// let array = [];
//
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.floor((Math.random() * (100 - 1)) + 1);
//     }
// return array }
// console.log(funRandom(1,100));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
//let array=[95, 91, 96, 97, 26, 76, 88, 67, 47, 64]
// let sorted = array.sort((a,b) => {
// 	if (a < b){
// 		return 1
// 	}else {
// 		return -1
// 	};
// });
//console.log(sorted);
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let filter = array.filter(function (a) {
// 	if (a%2 === 0){
// 		return a
// 	}else {
// 		return
// 	}
// });
// console.log(filter);

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
// let books = [
//     {name: 'Привіт всім', page: 220, autors: ['павло', 'назар'], genre: ['проза', 'поезія']},
//     {name: 'Привіт', page: 30, autors: ['павло'], genre: ['проза']},
//     {name: 'Привіт, скоро буду', page: 125, autors: ['назар'], genre: ['проза', 'поезія']},
//     {name: 'вдома', page: 600, autors: ['павло', 'назар'], genre: ['проза', 'поезія', 'пєса']}
// ]

// -знайти наібльшу книжку.
// let max = books[0];
// books.forEach(book => {
//     if (book.page > max.page) {
//         max = book;
//     }
// });
// console.log(max);
//
//    - знайти книжку/ки з найбільшою кількістю жанрів
//  let a= books[0];
// books.forEach(book => {
//     if (book.genre > a.genre) {
//         a=book;
//     }
// });
// console.log(a);

//знайти книжку/ки з найдовшою назвою
// let a= books[0];
//  books.forEach(book => {
//    if (book.name.length > a.name.length) {
//          a=book;
//      }
// });
//  console.log(a);
//
// //
// // // - знайти книжку/ки які писали 2 автори

// let a =[];
// books.forEach(book1 => {
//     if (book1.autors.length===2){
//         a.push(book1)
//     }
// });
// console.log(a);

//знайти книжку/ки які писав 1 автор

// let a =[];
//  books.forEach(book2 => {
//   if (book2.autors.length===1){
//         a.push(book2)
//     }
//  });
//  console.log(a);

//- вісортувати книжки по кількості сторінок по зростанню
// let sort = books.sort ((book1,book2)=> book1.page-book2.page)
// console.log(sort);
