//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль//
let fruit = ['персик', 'абрикос', 'нектарин', 'інжир', 'чорниця', 'ожина', 'малина', 'полуниця', 'суниця', 'слива'];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit[5]);
console.log(fruit[6]);
console.log(fruit[7]);
console.log(fruit[8]);
console.log(fruit[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.//
let Franko = {
    title: 'Каменярі',
    pageCount: 200 ,
    genre: 'проза',};
console.log(Franko);

let Kociubunskyj = {
    title: 'Фата Моргана',
    pageCount: 220,
    genre: 'проза'};
console.log(Kociubunskyj);

let Ykrainka = {
    title: 'Лісова пісня',
    pageCount: 210,
    genre: 'драма'};
console.log(Ykrainka);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age//

let x = {
    title: 'Каменярі',
    pageCount: 200,
    genre: 'проза',
    autor: [
        {
            name: 'Franko',
            age: 59
        }
    ]
}
console.log(x);

let y = {
    title: 'Фата Моргана',
    pageCount: 220,
    genre: 'проза',
    autor: [ {
        name: 'Kociubunskyj',
        age: 49
    }
    ]
};
console.log(y);

let z = {
    title: 'Лісова пісня',
    pageCount: 210,
    genre: 'драма',
    autor: [
        {
         name: 'Ykrainka'  ,
         age: 42
        }
    ]
};
console.log(z);

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача//
let user = [{name: 'ira', username: 's', pasword: '20'},
            {name: 'ira', username: 's', pasword: '21'},
            {name: 'ira', username: 's', pasword: '22'},
            {name: 'ira', username: 's', pasword: '23'},
            {name: 'ira', username: 's', pasword: '24'},
            {name: 'ira', username: 's', pasword: '25'},
            {name: 'ira', username: 's', pasword: '26'},
            {name: 'ira', username: 's', pasword: '27'},
            {name: 'ira', username: 's', pasword: '28'},
            {name: 'ira', username: 's', pasword: '29'},]
console.log(user);
console.log(user [0].pasword);
console.log(user [1].pasword);
console.log(user [2].pasword);
console.log(user [3].pasword);
console.log(user [4].pasword);
console.log(user [5].pasword);
console.log(user [6].pasword);
console.log(user [7].pasword);
console.log(user [8].pasword);
console.log(user [9].pasword);



