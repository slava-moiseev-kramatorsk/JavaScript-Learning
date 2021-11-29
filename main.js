//1. Создайте функцию, которая проверяет является ли значние числом. Функция должна возвращать Boolean.
/*
function isInt(x) {
    if (!x || !Number(x)){
        alert("Это не число");
        return false;

    } else {
        alert("Это число");
        return true;
    }
}
isInt("Проверка");
isInt(4);
isInt();

 */

//2. Создайте фукнцию, которая принимает 3 числа. Возвращать должна среднее из этих 3х чисел. (Не забудьте добавить проверки на
//то, что аргументы не пустые и являются числами).

/*
function threeNumbers(a, b,c) {
    if(!a || !b || !c || !Number(a, b, c)){
        alert("Неверный ввод");
    } else if ((a > b && a < c) || (a > c && a < b)) {
        alert("Среднее число " + " " + a);
    } else if ((b > a && b < c) || (b > a && b < c)){
        alert("среднее число" + " " + b);
    } else {
        alert("Среднее число" + " " + c);
    }
}
threeNumbers(2, 4, 1);

 */

//3. Создайте фукнцию, которая принимает объект и проверяет есть ли в нем свойство 'name'. Вернуть Boolean тип.

/*
const person = {name : "Слава", age : 32};
 function isName(obj) {
     alert( "name" in obj)
 }
isName(person);

 */

//4. Создайте функцию, которая принимает объект со свойствами name и username и возвращает строку в формате Имя Фамилия.

/*
const user = {name : "Jhon", surName : "Smith"};

function userInfo(obj) {
    alert(user.name + " " + user.surName);
}
userInfo(user);


 */

//5. Создайте функцию, которая принимает объекте типа {name1: 200, name2: 500, name3: 400}. Функция должна вернуть сумму всех
//свойств объекта.

/*

const numbers = {first : 20, second : 10, therd : 30};
function sumObj(obj) {
    let sum = 0;
    for( let int of Object.values(obj)){
        sum += int;
    }
    return sum;
}
alert( sumObj(numbers) );

*/

// 6. Создайте функцию, которая принимает объект. Все ЧИСЛОВЫЕ свойства объекта нужно поделить на 2,
//     если получилось НЕ целое число - округлить его по математическим правилами, а текстовые поменять на строку
// Hello, Palmo. Если свойство не числовое или не текстовое - удалить его из объекта. Функция должна вернуть переделанный объект.

let thing = {say : "Привет", int1 : 31, int : true,  double : 27.4 };
function changeObj(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'number' && typeof obj[key] !== 'string'){
            delete obj[key];
        } else if (typeof obj[key] === 'number'){
            obj[key] = obj[key] / 2;
            if(!Number.isInteger(obj[key])){
                obj[key] = Math.round(obj[key]);
            }
        } else if (typeof obj[key] === 'string'){
            obj[key] = "Hello, Palmo";
        }
    }
    return obj;

}
changeObj(thing)
console.log(thing);

// 7. Создайте игру "Викторина". Опираясь на ваши знания по JS, создайте игру, которая поочередно задаст пользователю 10 вопросов.
//     За каждый правильный ответ начисляйте пользователю 1 балл. После ответа на все вопросы выведите сколько баллов заработал пользователь.

/*
let count = 0;
function totalCount(x){
    return count++;
}
const ask1 = prompt("Какой сейчас год ?");
if (ask1 === "2021"){
    totalCount();
}
const ask2 = prompt("Сколько будет 2 + 2 ?");
if (ask2 === "4"){
    totalCount();
}
const ask3 = prompt("Сколько будет 1 + 1 ?");
if (ask3 === "2"){
    totalCount();
}
const ask4 = prompt("Шуршит, но не шуршунчик ?");
if (ask4 === "брат шуршунчика"){
    totalCount();
}
const ask5 = prompt("Дед мороз существует ?");
if (ask5 === "нет"){
    totalCount();
} else if (ask5 === "да"){
    alert("Вынужден огорчить тебя, дружок. Пора взрослеть!")
}
const ask6 = prompt("Зима близко ?");
if (ask6 === "да"){
    totalCount();
}
const ask7 = prompt("Столица Украины ?");
if (ask7 === "киев"){
    totalCount();
}
const ask8 = prompt("Какой официальный второй язык Канады ?");
if (ask8 === "французский"){
    totalCount();
}
const ask9 = prompt("Сколько звезд в солнечной системе ?");
if (ask9 === "1"){
    totalCount();
}
const ask10 = prompt("Основа жизни  ?");
if (ask10 === "вода"){
    totalCount();
}
alert("Ваш счет :" + " " + count);


 */