/*
let a = 20;  
let x = 40;
let g = a + x;
console.log(g);          
a = 200;
g = a + x;
console.log(g);

let plus = [a = 20, b = 100, c = 250,]
console.log(plus)
let f = a+b+c
console.log(f)
a = 800;
console.log(f)
 
let w = 20;  
console.log(w);
w = 100;
console.log(w);
let goIT;
goIT = "Їбаш і будуть бабки";
console.log(goIT);
*/

/*
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
console.log(COLOR_RED, COLOR_ORANGE, COLOR_GREEN, COLOR_BLUE);
*/


// DATA TYPES
// Примітиви

/*
let myFirstNumber = 090999; // Number 
const bigInt = 5984983098520952859285925092502500n; // BigInt використовується, щоб всі числа були видимі програмі

let str = "Hello"; // String
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; //  `` зворотні лапки дають можливість вбудовувати змінні та вирази у рядок, загортаючи їх у ${…}
console.log(phrase);

let isGreater = 4 > 1; // Boolean
console.log(isGreater);
let isNumberMore = 1999 > 2022;
console.log(isNumberMore);
let isUkrWin = true;
console.log(isUkrWin);

let discountForIphone13 = null; // Null (знаємо, що значення може в майбутньому змінитися)
console.log(discountForIphone13);

let sameNameVale; // Undefined (значення не присвоєно)
console.log(sameNameVale);
*/


/*
const dogVilli = {}
dogVilli.Age = 10;
dogVilli.Height = 50;
dogVilli.Weight = 30;
dogVilli.Breed = 'Labrador Retrieverr';
console.log(dogVilli);

const Age = Symbol('Age'); // Symbol
dogVilli[Age] = 12; // Додає нове значення рядка, не змінюючи попередній
console.log(dogVilli);
*/


/*alert(11 % 2); 
prompt(150 % 3);*/

// Object
/*const kol = {
    name: "Lana", // перший вид синтаксису
    age: 23,
    sity: 'Ivano-Frankivsk',
};
console.log(kol);

let kol2 = {}
kol2.name = "Ana"; // Другий вид 
kol2.age = '61';
kol2.sity = 'Malaga';

kol2['hobby'] = 'animals'; // третій вид
console.log(kol2);

let ffff;
const gggg = 136;
console.log(ffff + '\n' + gggg);
console.log(`${ffff}\n${gggg}`);

const objectA = {
    a: 112,
    d: 'phone',
    c: 'alarm amargency',
}
console.log(objectA)

const copyOFA = objectA
copyOFA.a = 113;
console.log(copyOFA)
console.log(objectA)
copyOFA.b = 'good',
    console.log(objectA)

const user = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
}
console.log(user)

user.firstName = 'Ляна',
    console.log(user)

delete user.surName
console.log(user)

user.address = 'Івано-Франківськ';
console.log(user)

console.log(Object.keys(kol));

user['age'] = kol.age;
console.log(user)*/


/*function a() {
    console.log('Hellow my user')
}
a()

a = 100;
console.log(a)
a()*/ /* ми використали "а" у назві функції, та потім ми знову використали "а" і присвоїли значення, 
тому у наступному рядку викликаючи функцію, яку ми створили раніше ми не можемо її викликати, оскільки "а" уже має нове значення, 
щоб не виникало такої помилки найзручніше оголошення функцій здійснювати через змінні, як наведено нижче */

/*const b = () => {
    console.log('Hellow my user!!!!!!')
}
b()*/

/*const user2 = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
}
console.log(user2);

user2.age = kol.age;
console.log(user2);

const favoriteCar = {
    mark: "Jeep",
    model: 'Renegade',
    color: 'red',
    yearOfTheCar: 2020,
    motor: 2.4 ,
    checkup: {
        NumberOfOwners: 1,
        isWanted: 'No',
        roadAccident: 'Yes',
    }
}
console.log(favoriteCar)

delete favoriteCar.checkup.isWanted
console.log(favoriteCar)

favoriteCar.checkup.NumberOfOwners = 3;
console.log(favoriteCar.checkup.NumberOfOwners)
console.log(favoriteCar)

const animals = 'Джеккі Лорд та Рижик';
const flowers = 'Троянди';
console.log(animals, flowers) 

const favorite = {
    animals,
    flowers,
}
console.log(favorite)*/

/*
const phone = {
    modelName: 'IPhone 11',
    brand: 'Apple',
    formFactor: 'Smart Phone',
    memoryStorageCapacity: '256 GB',
    operatingSystem: 'IOS 12',
    color: 'White',
    test: {
        cellularTechnology: '4G',
        includedComponents: 'Charging cable and block ',
        displayType: 'LED',
    }
}
console.log(phone);

const phone3 = Object.assign({}, phone); 
console.log(phone3);
const phone4 = { ...phone };
console.log(phone4);
const phone5 = JSON.parse(JSON.stringify(phone)); // даний метод дозволяє змінювати вкладені об'єкти не змінюючи оригінальний об'єкт (deep copy)
console.log(phone5);

const phone6 = structuredClone(phone); // даний метод дозволяє змінювати вкладені об'єкти не змінюючи оригінальний об'єкт (deep copy)
console.log(phone6);

phone6.test.cellularTechnology = '8G';
console.log(phone6);

console.log(phone);

let a = 190;
let b = 560;
function sum(a, b) { // для того, щоб зробити код оптимізованим, ми для отримання результату створили функцію, яка обчислює і при зміні значень змінної, ми просто ще раз викликаємо функцію
const c = a + b  
console.log(c)
console.dir(sum)
}
sum(a, b);

a = 1900;
b = 5600;
sum(a, b); */
/*
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
let c = myFn(10, 3)
console.log(c)
console.log(myFn(10,4))


function myn(h, g) {
let c = (h + g) * 1.2
return c
}
let zil = myn(1000, 100);
console.log(zil + " грн. без ПДВ")*/

/*const user2 = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
    birthYear: 1999,
    birthDay: new Date(1999, 04, 02).getTime()
}

let today = Date.now();
let birthDate = user2.birthDay;
let age = (today - birthDate)/(31556952000.00043) //(1000*60*60*24*365.25);  //31536000000;31557600000 /31556952000,00043
let fullYear = Math.floor(age)
console.log(fullYear)*/


// function getAge(birth) {
//     let today = Date.now();
//     let birthDate = birth;
//     let age = today.getFullYear() - birthDate.getFullYear();
//     return age;
// }
// let age = getAge(user2.birthYear)
// console.log(age)
// let today = Date.now();
// console.log(Date.now())

/*const phone = {
modelName: 'IPhone 11',
brand: 'Apple',
year: 2019,
formFactor: 'Smart Phone',
memoryStorageCapacity: '256 GB',
operatingSystem: 'IOS 12',
color: 'White',
test: {
    cellularTechnology: '4G',
    includedComponents: 'Charging cable and block ',
    displayType: 'LED',
}
}
console.log(phone);

function increaseYear (sameobj) {
const updateYear = Object.assign({}, sameobj)
updateYear.year += 1
console.log(updateYear.year)
return updateYear                 
}
const updatePhone = increaseYear(phone)
console.log(phone.year)
console.log(updatePhone.year)*/

//OPERATORS
//Арифметичні (+, -, *, /)
/*const num1 = 10;
const num2 = 9;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);  

let num3 = 50; 
num3 = num3+30;
console.log(num3);
num3 += 30; //Addition assignment
console.log(num3);
num3 -= 30;// Subtraction assignment
console.log(num3);
num3 *= 30; //Multiplication assignment
console.log(num3);
num3 /= 30; //Division assignment
console.log(num3);*/

//Comparison operators (===, <, >, >=, <=, !==)
// const isUserLogIn = true;
// const age = 23;
// const name = 'Lana';

/*if(isUserLogIn){
    alert('Hello')
}
console.log(isUserLogIn)
if(age === 18){  // === знак який означає рівність 
    alert('Congrets!')
}
console.log(age)*/

/*if(age !== 16) { //не дорівнює, перевіряє на нерівність, тобто якщо age (!== не рівне 16)тоді виводиться alert
    alert('Wow!')
}*/

//LOGICAL OPERATORS

// AND  &&
// OR   ||
// NOT  !

/*if(age >= 18 && isUserLogIn){
    alert('welcome')
    console.log(age, isUserLogIn)
}
if(age <= 18 || !isUserLogIn){
    alert('you can`t use our site')
    console.log(age, isUserLogIn, name)
}*/

/*//STRING OPERATORS
let firstName = 'Kasiv';
let lastName = ' Lana'
firstName += ' Yulianna'
console.log(firstName)
console.log(firstName + lastName)
console.log('kasiv' + ' laana')//конкатинація це злиття рядків

// UNARY 
const userLOL = {
    isUserLogIn: true,
    age: 23,
    name: 'Lana',
}
delete userLOL.age //унарний оператор
console.log(userLOL)
//delete
//typeof
//console

//Relational operators
console.log('age' in userLOL)
console.log('name' in userLOL)*/

//умовні оператори

/*//IF ELSE
const isUserLogIn = true;
if (isUserLogIn) {
    alert ('Welcom my love!');
 } 
 else {
    alert ('You didn`t logg in!');
}
console.log(isUserLogIn)

//Tearnary
isUserLogIn ? alert('Welcom my love!') : alert('You didn`t logg in!');
console.log(isUserLogIn)

//Switch
const age = 20;

switch(age){
    case 10:
        alert('Go stady, now!');
        break
    case 20:
        alert('How are you');
        break
    default:
        alert('tytytytytyty');
}
console.log(age)*/

/*
let num = 34;
let num1 = '54';
let sum = num + num1;
console.log(typeof sum);

console.log(num1 - num) // *, /
console.log(num1 === num)// false бо перевірено на значення і на тип даних
*/
// TODO
/*let years = new Date(1999, 03, 02).getTime();
let now = Date.now();
let r = new Date().getFullYear();
console.log(r);
console.log(now);
console.log(years);
let test = new Date (now - years);
console.log(test);
let age = test.getTime();
console.log(age);

var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
console.log(sameAsBigDay)*/


//logical operations (!, ||, &&) 
/*const plate = {
    number: 250,
    category: 'kitchen',
    weight: '200 g',
    color: 'Red',
    r: 0,
}

console.log(plate.number || plate.category)
console.log(plate.number && plate.category && plate.r && plate.weight)
console.log(plate.number || !plate.category)
console.log(plate && plate.category)
console.table(plate);
*/

//FUNCTIONS

/*const userData1 = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
    birthDate: {
        day: 02,
        month:04,
        year: 1999,
    },  
}
const userData2 = {
    lastName: "Бойко",
    firstName: 'Любов',
    surName: 'Василівна',
    birthDate: {
        day: 29,
        month:04,
        year: 1993,
    },  
} 
const userData3 = {
    lastName: "Христан",
    firstName: 'Марія',
    surName: 'Іванівна',
    birthDate: {
        day: 07,
        month:11,
        year: 2015,
    },  
} 

function sayHello(name, year){ 
    alert('Hello dear ' + name.toUpperCase())
    if (year > 2004){
        alert('Sorry, '+ name + ' you can`t use our page!')
    }
}
// sayHello(userData1.firstName, userData1.birthDate.year);
// sayHello(userData2.firstName, userData2.birthDate.year);
// sayHello(userData3.firstName, userData3.birthDate.year);


// function sayHelloMe(greetings){ // function declaration
//     alert(greetings);
// }
// sayHelloMe('Hello User')

const exampl = function(greatings){ // function expression
   return console.log(greatings);

}
exampl('HOLA')

const test = {

}
console.log(test)*/

// const plateInfo = {
//     ...plate,
//     color: 'vvvvv', // створюючи новий об'єкт за допомогою оператора "..." ми створюємо об'єкт не мутуючи батьківський об'єкт, тільки якщо нема вкладених об'єктів.
//     madeIn: 'French',
// }
// console.table(plateInfo);

// const plateUSE = {
//     clean: '70 C',
//     time: '2 minutes'
// }

// const plateFull = {
//     ...plate,
//     ...plateInfo,
//     ...plateUSE
// }
// console.table(plateFull);

// const n1 = 'Kasiv';
// const n2 = 'Yulianna';

// const greatings = `Hello my name is ${n1} ${n2}! `;
// console.log(greatings);

// const TAX_PERCENT = 20;
// const getProductPrice = function (netPrice) {
//     let taxSum = (netPrice * TAX_PERCENT) / 100;
//     let grosPrice = taxSum + netPrice;
//     return grosPrice;
// }
// console.log(getProductPrice(100));

// function multByFactor(value, multiplier = 1){
//     return value * multiplier;
// }
// console.log(multByFactor (10, 2));
// console.log(multByFactor (10));

// const mult2 = function(value, multiplier = 100){
//     return value * multiplier;
// }
// console.log(mult2 (100, 2));
// console.log(mult2 (10));

// const mult3 = (value, multiplier = 1000) => {return value * multiplier;}
// console.log(mult3 (155, 2));
// console.log(mult3 (1550));

// Значення параметрів функції за замовчуванням
// /*const newPost = (post, addedAT = Date()) => ({ // невидиме повернення об'єкта за допомогою "()
//     ...post,
//     addedAT,
// })

// const firsrPost = {
//     id: 1,
//     autor: 'Yulianna',
// }
// console.table(newPost(firsrPost))

// const newPost = (post, addedAT = Date()) => {return {...post, addedAT}} // видиме повернення об'єкта за допогою "return"
// const firsrPost = {
//     id: 1,
//     autor: 'Yulianna',
// }
// console.table(newPost(firsrPost));
// console.log(typeof newPost(firsrPost));
// */

// let testStringFunction = 'Kasiv Yulianna';
// console.log(testStringFunction);
// let s = testStringFunction.toUpperCase


//Опрацювання помилок

// const fnWithError = () => {
//     throw new Error('Bla bla bla');
// }

// try {
//     fnWithError();
// } catch (err) {
//     console.error(err);
//     console.log(err.massage);
// }

// console.log('Countinue');


//МАСИВИ

/*const subscribers = [
    { name: 'Оля', age: 17, profession: 'вчителька', haveCreditCard: true },
    { name: 'Юля', age: 15, profession: 'фінанасовий аналітик', haveCreditCard: true },
    { name: 'Вася', age: 25, profession: 'волонтер', haveCreditCard: false },
    { name: 'Олександр', age: 21, profession: 'бухгалтер', haveCreditCard: true },
    { name: 'Віталіна', age: 30, profession: 'фармацевт', haveCreditCard: false },
    { name: 'Фанасій', age: 34, profession: 'психотерапевт', haveCreditCard: true },
    { name: 'Гафія', age: 50, profession: 'вчителька', haveCreditCard: true },
]

// const condratsIFMoreThan100 = function(followers) {
// if (followers.length >= 100) {
//  alert('Hello my followers')}
//  else {alert ('Ho-ho-ho')}
// }
// condratsIFMoreThan100(subscribers);

for (let subscriber of subscribers) {
    subscriber.age = subscriber.age + 1;
}
console.log(subscribers[0].age);

subscribers[0].name = 'Ростік';
console.log(subscribers[0].age);

//METHODS ARRAY
// push - це метод масивів, який дадає елемент масиву в кінець, 
const haveYouCotNewSubscribers = true;
if (haveYouCotNewSubscribers) {
    subscribers.push({ name: 'Софія', age: 19, profession: 'студент', haveCreditCard: true })
}
console.log(subscribers);

//unshift - метод, який додає елемент на початок масиву
// shift - метод, який ВИДАЛЄ елемент на початок масиву
// pop - видаляє останній елемент****subscribers.pор() видалений елемент може присвоюватись окремій змінній

// splice - видаляє елемент масиву, вказавши порядковий номер елемента, одночасно може додавати нове значення
subscribers.splice(0, 1); //0 це початковий номер елеменнта масиву, 1 кількість елементів (рядків, які видаляємо)
console.log(subscribers);

// forEach - ітерує кожний окремий елемент, з можливістю вносити зміни в нього не змінюючи початковий масив
subscribers.forEach(elArr => {
    elArr.date = new Date;
    console.log(elArr);
})
console.log(subscribers);

//map - можемо створювати новий масив із використанням елементів попереднього масива (витягти окремі дані, дадати параметри тд)
const newSubscribers = subscribers.map(elArr => elArr.name);
console.log(newSubscribers);

const newSubscribers2 = subscribers.map(A => `${A.name} (${A.age})`);
console.log(newSubscribers2);

//filter - метод, який допомагає відфільтрувати масив за певними критеріями
const adults = subscribers.filter(person => person.age >= 18);
console.log(adults)

//redus - повертає фінальне значення по масиву
const amount = subscribers.reduce((total, array) => {
    return (total + array.age)
}, 0)
console.log(amount)

// find - слугує для пошуку елемента за певною умовою
const sofy = subscribers.find(array => array.name === 'Софія')
console.log(sofy)

// findIndex
const sofyIndex = subscribers.findIndex(array => array.name === 'Софія')
console.log(sofyIndex)

const newA = subscribers
    .filter(array => array.age > 18)
    .map(array => {
        return {
            info: `${array.name} (${array.profession}, ${array.age})`

        }
    })
console.table(newA)

//Деструктуризація даних .. Destructuring of data
//destructing of object
const userData1 = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
    birthDate: {
        day: 02,
        month: 04,
        year: 1999,
    },
}

const {lastName, firstName, birthDate,} = userData1
console.table(firstName);
console.table(lastName);
console.table(birthDate);

const {day, month, year} = userData1.birthDate
console.table(day);
console.table(month);
console.table(year);

//destructing of array
console.table(subscribers);

const [zero, one] = subscribers
console.table(zero);
console.table(one);

const [{name, age}] = subscribers
console.table(name);
console.table(age);

//destructing of functions
const subscriberHaveCreditCard = subscribers.filter(array => array.haveCreditCard)
console.log(subscriberHaveCreditCard)

const subscribersInfo = (subscribers) => {
    const subscriberHaveCreditCard = subscribers.filter(array => array.haveCreditCard)
    const ff = subscriberHaveCreditCard.map(array => `${array.name} (${array.profession})`)
    return ff
}
console.log(subscribersInfo(subscribers));

const userInfo = (({firstName, surName}) => `Раді вітати ${firstName} ${surName} на нашому сайті!`);
console.log(userInfo(userData1));*/

//Умовні інструкції ....Conditional instructions
/*
let val = 10;
if (val > 5) {
    val += 20
}
console.log(val)

const userData1 = {
    lastName: "Касів",
    firstName: 'Юліанна',
    surName: 'Миколаївна',
    birthDate: {
        day: 02,
        month: 12,
        year: 1999,
    },
}

let month = userData1.birthDate.month;
if (month > 0 && month < 13) {
    if (month <= 2 || month == 12) {
        console.log("Ти народився зимою");
    } else if (month >= 3 && month <= 5) {
        console.log("Ти народився весною");
    } else if (month >= 6 && month <= 8) {
        console.log("Ти народився літом");
    } else if (month >= 9 && month <= 11) {
        console.log("Ти народився осінню");
    }
} else {
    console.log("Ти довбойоб");
}

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments isn`t a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Number aren`t positive'
    }
    return a + b
}
console.log(sumPositiveNumbers(-1, 11111)) */

//Swich instructions

const month = 4;

switch (month) {
    case 03:
        console.log('Березень');
        break
    case 04:
        console.log('Квітень');
        break
    case 05:
        console.log('Травень');
        break
    default:
        console.log('Це не весняний місяць');
}

// Тернарний оператор.... Ternary operator
//example 1
const value = 11;
value
    ? console.log('Умова вірна')
    : console.log('Умова фальшива');

// //example 2
// const value1 = 11;
// const value2 = 115;
// value1 && value2
//     ? myFanction1(value1, value2)
//     : myFanction2()

//example 3
const val = 11;
console.log(val >= 0 ? val : -val)

const valR = -112;
const res = valR >= 0
    ? valR
    : -valR;
console.log(res);