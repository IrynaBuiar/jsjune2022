// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = 'name';
//     this.surname = 'surname';
//     this.email = 'email';
//     this.phone = phone;
//     console.log(this);
// }
//
// let user1 = new User(1, 'vasja', 'V', '@@@@', 1111);
// let user2 = new User(2, 'petja', 'P', '@@@@', 2222);
// let user3 = new User(3, 'kolja', 'K', '@@@@', 3333);
// let user4 = new User(4, 'oleh', 'O', '@@@@', 4444);
// let user5 = new User(5, 'anja', 'A', '@@@@', 5555);
// let user6 = new User(6, 'ira', 'I', '@@@@', 6666);
// let user7 = new User(7, 'pavlo', 'P', '@@@@', 7777);
// let user8 = new User(8, 'jura', 'J', '@@@@', 8888);
// let user9 = new User(9, 'ivan', 'I', '@@@@', 9999);
// let user10 = new User(10, 'olja', 'O', '@@@@', 1010);
//
// let users=[user1,user2,user3,user4,user5,user6, user7,user8,user9,user10] ;
// console.log(users);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//console.log(users.filter(item => item.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//console.log(users.sort((a, b) => b.id - a.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = 'name';
//         this.surname = 'surname';
//         this.email = 'email';
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'vasja', 'V', '@@@@', 1111, ['water', 'milk', 'tea', 'juice']);
// console.log(client1);
// let client2 = new Client(2, 'petja', 'P', '@@@@', 2222, ['water',  'tea', 'juice']);
// console.log(client2);
// let client3 = new Client(3, 'kilja', 'K', '@@@@', 3333, ['water']);
// console.log(client3);
// let client4 = new Client(4, 'olja', 'O', '@@@@', 4444, ['water', 'milk']);
// console.log(client4);
// let client5 = new Client(5, 'ira', 'I', '@@@@', 5555, ['water',  'tea', 'juice']);
// console.log(client5);
// let client6 = new Client(6, 'oleh', 'O', '@@@@', 6666, ['water', 'milk', 'tea', 'juice']);
// console.log(client6);
// let client7 = new Client(7, 'pavlo', 'P', '@@@@', 7777, ['water', 'milk']);
// console.log(client7);
// let client8 = new Client(8, 'anja', 'A', '@@@@', 8888, ['water', 'milk', 'tea', 'juice']);
// console.log(client8);
// let client9 = new Client(9, 'kostja', 'k', '@@@@', 9999, [ 'milk', 'tea', 'juice']);
// console.log(client9);
// let client10 = new Client(10, 'lena', 'L', '@@@@', 1010, [ 'juice']);
// console.log(client10);
//

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let client=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10]
// console.log(client);
//
// console.log(client.sort((a, b) => a.order.toString().length - b.order.toString().length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function car (model,vyrobnyk,year,maxspeed,volume,drive) {
//     this.model=model;
//     this.vyrobnyk=vyrobnyk;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.volume=volume;
//     this.drive='';
//         this.driver = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function (){
//         console.log(`
//         model= ${this.model}
//         vyrobnyk=${this.vyrobnyk}
//         year=${this.year}
//         maxspeed=${this.maxspeed}
//         volume=${this.volume}
//         drive=${this.drive}
//             `);
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//  		this.maxspeed += newSpeed;
//     };
//  	this.changeYear = function (newValue){
// 		this.year = newValue;
// };
//  	this.addDriver = function (driver){
// 		this.drive = driver;
// 	};
// }
//
// let car1 = new car ('opel', 'germany',2008,180,1.4)
// console.log(car1);
// car1.driver();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2009);
// car1.addDriver('vasja');
// car1.info()

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class cars {
//     constructor(model,vyrobnyk,year,maxspeed,volume,drive) {
//         this.model=model;
//         this.vyrobnyk=vyrobnyk;
//         this.year=year;
//         this.maxspeed=maxspeed;
//         this.volume=volume;
//     }
//     driver (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     info (){
//         console.log(`
//         model= ${this.model}
//         vyrobnyk=${this.vyrobnyk}
//         year=${this.year}
//         maxspeed=${this.maxspeed}
//         volume=${this.volume}
//         drive=${this.drive}
//             `);
//     };
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed += newSpeed;
//     };
//     changeYear (newValue){
//         this.year = newValue;
//     };
//     addDriver (driver){
//         this.drive = driver;
//     }
// }
// let car2=new car('opel','germany',2008,180,1.7)
// console.log(car2);
// car2.driver();
// car2.info();
// car2.increaseMaxSpeed(20);
// car2.changeYear(2009);
// car2.addDriver('vasja');
// car2.info()
//

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Princes (name,year,size){
//     this.name=name;
//     this.year=year;
//     this.size=size;
//     console.log(this);
// }
//
// let princes1 = new Princes('ira',20,36);
// let princes2 = new Princes('olja',21,37);
// let princes3 = new Princes('anja',22,38);
// let princes4 = new Princes('oksana',23,39);
// let princes5 = new Princes('katja',24,40);
// let princes6 = new Princes('halja',25,41);
// let princes7 = new Princes('natalja',26,40);
// let princes8 = new Princes('vira',27,39);
// let princes9 = new Princes('julja',28,38);
// let princes10 = new Princes('kira',29,39);
//
// let princes =[princes1,princes2,princes3,princes4,princes5,princes6,princes7,princes8,princes9,princes10]
// console.log(princes);
//
// class Princ {
//     constructor(name,year,size) {
//         this.name = name;
//         this.year=year;
//         this.size=size;
//            }
// }
//
// let princ= new Princ ('Vasja',29,42)
// console.log(princ);
//
// for (let her of princes){
//     if (princ.year === her.year){
//         console.log(her.name)
//     }else{
//         console.log(`look for her again`)
//     }
// }
//
// console.log(princes.find(her=>her.year===princ.year));
//
// function back (value) {
//     return value.year===princ.year
// }
//
// console.log(princes.find(her=>back(her)))
