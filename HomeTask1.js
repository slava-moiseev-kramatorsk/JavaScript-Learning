// 1. Создайте HTML документ и подключите в него созданный JS файл.

// 2. Создайте переменную num и присвойте ей значение 10. Выведите значение этой переменной с помощью console.log()
let num = 10;
console.log(num);

// 3. Создайте переменные first = 5 и second = 10. Выведите в console.log() их сумму, разность, произведение и частность (деление)
let first = 5;
let second = 10;
console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(first / second);

// 4. Создайте переменные a = 3 и b = 10, их сумму присвойте в переменную result
let a = 3;
let b = 10;
let result;       // or   let result = (a + b); both options are correct.
result = (a + b);
console.log(result);

// 5. Создайте переменную bar = 20 и qwerty = 5. В переменную res присвойте разность bar - qwerty и отнемите 10.
let bar = 20;
let qwerty = 5;
let res;          //   or let res = (bar - qwerty) - 10;
res = (bar - qwerty) - 10;
console.log(res);

// В переменную end присвойте разность значения res и переменной qwerty
let end = res - qwerty;
console.log(end);

// 6. Создайте переменную str и присвойте ей значение Hello, Palmo. Результат выведите в alert()
let str = 'Hello';
alert(str);

// 7. Создайте переменную name с вашим имененем и age с возрастом. В alert() выведите результат Я (имя), мне (возраст). (значения подставить из переменных)
let name = 'Slava';
let age = 32;
alert("Я" + " " + name + ", " + "мне" + " " + age);

// 8. Напишите скрипт, который считает количество секунд в часе, сутках и месяце. В console.log() выведите результат
let seconds,hour,day,month;
seconds = 1;
hour = 3600 * seconds;
day = 24 * hour;
month = 30 * day;
console.log(month);

// 9. Создайте переменную с числом и возведите в квадрат
let sqr = 3;
sqr = Math.pow(sqr,2);
console.log(sqr);

// 10. Создайте переменную d и присвойте ей значение 8. В переменную n поместите квадрат значения переменной d, а в переменную x - куб значения переменной d
let d = 8;
let n = Math.pow(d,2);
let x = Math.pow(d,3);
console.log(n, x);



//Объявите две переменные: admin и name.
let admin,name1;  // name1 т.к. выше в коде уже инициализирована переменная name.

//Запишите строку "Джон" в переменную name.
name1 = 'Джон';
//Скопируйте значение из переменной name в admin.
admin = name1;

//Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
alert(admin);

//Создайте переменную для текущего времени. Как бы вы её назвали?
let realTime;

// Создайте переменную для названия выбранного товара. Как бы вы её назвали?
let chosenProduct;

// Создайте константу для хранения значения зеленого цвета.
const GREEN_COLOR = '#00FF00';

// Создайте константу для хранения возраста пользователя.
const userAge = 32;     // возраст меняется, не логично быть ему константой. const userBornDate;

//Создать сообщение “Hello, Palmo!”, использую 3 типа кавычек. (Используя обратные кавычки “Palmo” поместить в переменную);

let string = "Hello, Palmo";
let string1 = 'Hello, Palmo';
let string2  = ` ${string1}`;

//Что выведет данный скрипт?
let name2 = "Ilya";
alert(`Hello ${1}`);             // воспринимает все в ковычках как единую строку
alert(`Hello ${"name2"}`);       // воспринимает все в ковычках как единую строку
alert(`Hello ${name2}`);         //  <--- Правильный вариантс написания

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.
let guestName = prompt("Ваше имя ?", "");
alert(guestName);

//Создайте любой вопрос и выведите результат через функцию alert
let quest = confirm("Вам исполнилось 18 лет ?");
alert(quest);

//Преобразовать строку “12345” в число.
let number = "12345";
number = Number(number);
//Преобразовать значение true в строку.
let bool = true;
bool = String(bool);
//Преобразовать значение null в логический тип.
let nul = null;
nul = Boolean(bool);
//Преобразовать пустую строку в логический тип.
let empty = "  ";
empty = Boolean(empty);




