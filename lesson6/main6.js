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

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},
    {cardSuit: 'clubs', value: 'Joker', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},
    {cardSuit: 'diamonds', value: 'Joker', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {cardSuit: 'hearts', value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {cardSuit: 'spades', value: 'Joker', color: 'black'},
];

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
