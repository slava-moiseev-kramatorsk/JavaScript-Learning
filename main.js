//1
// let str = "Иванов";
// function upFirst() {
// str = str.toLowerCase();
// return str;
// }
// upFirst(str);
// console.log(str);


// 2 Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
//     и если она превосходит maxlength – заменяет конец str на "...",
//     так чтобы ее длина стала равна maxlength


// let str = "какая длинная строка, тут наверно 44 симолов"
// let maxlength = 30;
// let str1;
// function truncate() {
//
//     if (str.length > maxlength){
//         str1 = str.substring(0, maxlength);
//     }
// return str1;
// }
//
// console.log(truncate(str, maxlength));
// console.log(str1);


// 3 Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
//     Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
//3
//  let str = "Иванов Сергей Петрович";
// let arr = str.split(" ");
// console.log(arr);
// function getShortName() {
// arr[0] = arr[0];
// arr[1] = arr[1].slice(0,1);
// arr[2] = arr[2].slice(0,1);                                  //работает
// return arr;
// }
// getShortName(arr);
// let str1 = arr.join(" ");
// alert(str1);

//4  Напишите функцию, которая принимает массив объектов. Функция должна вернуть
// массив только с теми объектами, у которых есть свойство name
//4
// let arr = [
//     {
//         name : "Pasha",
//         age : 27
//     },
//     {   name : "Sasha",
//         age : 14
//     },                                                     //работает
//     {
//         age : 30,
//         height : 180
//     }
// ];
// let arr1 = arr.filter(function (item){
//     return item.name;
// });
//
// console.log(arr1);

// 5 Напишите функцию, которая принимает два массива. Функция должна вернуть результат
// объединения этих массивов без дубликатов

// let arr1 = [1,2,3,4];
// let arr2 = [1,6,7,8];
// let arr = [];
// function newArr() {
//     arr = arr1.concat(arr2);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <arr.length ; j++) {               // работает
//             if (arr[i] === arr[j])
//                 arr.splice(j--,1);
//         }
//
//     }
//     return arr;
// }
// console.log(newArr(arr1));
// console.log(arr);
// console.log(arr1);

// 6 Напишите функцию, которая преобразует строки snake_case в camelCase.
//     Например modifyString('super-user-name') // вернуть 'superUserName'



// let str = "super-user-name";
// let arr;
// function modifyString() {
//     let arr = str.split("-");
//     for (let i = 0; i < arr.length; i++) {
//         if (i !==0) {
//             arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);    // работает
//         }
//         console.log(arr[i][0]);
//     }
//     console.log(arr.join(''));
//     return arr.join('');
// }
// modifyString(str);



// 7 Напишите функцию, которая принимает значение с математическим выражением и возвращает результат его решения.
//     Например: calc('5 + 10') // вернет 15

// let a;
// let b;
// let result = 0;
// let op;
// function calc(a, b, op) {
//
//     switch (op) {
//         case '+' : result = a + b;
//         break;
//         case '-' : result = a - b;
//         break;
//         case '*' : result = a * b;
//         break;
//         case '/' : result = a / b;
//         break;
//     }
//     return result;
// }
//
// console.log(calc(2, 3, '*'));


// 8 Напишите функцию, которая принимает объект с пользователями и возвращает массив имён.
// Функция должна вернуть ['John', 'Marry', 'Poll']

// function objNames(objectsList) {
//     return objectsList.map(function(obj) {
//         return obj.name;
//     });
// }
//
// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20
//     },
//     {                                                                //работает
//         id: 2,
//         name: 'Marry',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25
//     },
// ];
//
// const names = objNames(users);
//
// console.log( names );



//  9 Напишите функцию, которая принимает массив. Каждый элемент массива,
//     который является числом - умножить на 2, строки - преобразовать в массив,
//     где каждый символ - отдельный элемент массива. Функция должна вернуть измененный объект



// let arr = [1,2,3, 'Hello', 'focus', 5];
// function changeArr() {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' ){
//             arr[i] = arr[i] * 2;
//         } else if (typeof arr[i] === 'string'){                              // работает
//             arr[i] = arr[i].split("");
//         }
//     }
//     return arr;
// }
//
// console.log(changeArr(arr));

// 10 Напишите функцию, которая проверяет строку на спам. Функция должна возвращать true,
//     если в строке есть 2 одинаковых слова, и false - если все слова уникальны.
// const str = " palmo palmo";
// const str = " hello palon";
// let arr = [];
// let result;
// function spam(str) {
//     arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length ; j++) {
//         if (arr[i] === arr[j]){
//             result = true;
//         } else result = false;                                        //mazafaka don`t work
//
//     }
//     }
//     return result;
// }



// spam(str);
// console.log(result);

// const arr1 = [ 'word1', 'word2', 'word3' ];
// const arr2 = [ 'word1', 'word2', 'word1', 'word3', 'word3' ];
//
// function isSpam(arr) {                                                         // а это работает
//     const set = new Set(arr);
//
//     return set.size < arr.length;
// }
//
// console.log( isSpam(arr1) );

// 11 Напишите функцию, которая проверяет строку на нецензурную лексику. Создайте массив,
//     который будет содержать слова, которые нельзя пропускать. Функция должна принимать строку и
// проверять наличие в ней слов из массива, которые нужно пропускать.
//     Если в строке есть слово из массива - вернуть true, если нет - false.

// let arr = ['шлюхи'];
// let arr1 = ['шлюхи', 'нынче', 'дорогие'];
// function censure() {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr.length; j++) {                                // работает
//             if (arr1[i] === arr[j]){
//                 return true;
//             } else return false;
//         }
//     }
// }
// censure();
// console.log(censure());
// 12 Напишите функцию, которая принимает массив. Функция должна вернуть предложение только из строковых значений массива. Например:
// arrayToSentence(['Привет', 1, null, 'как', {}, 'дела']) // вернуть Привет как дела

// let arr = ['Привет', 1, null, 'как', {}, 'дела'];
// let newStr = "";
// function returnOnlyString(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string' || Number.isNaN(arr[i]) && arr[i].match(/[a-z]/g)){                         //  работает
//             newStr = newStr + " " + arr[i];
//         }
//     }
//     return newStr;
// }
// returnOnlyString(arr);
// console.log(newStr);

// 13 Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//
// let number;
// let format = '(xxx) xxx-xxxx';
// function createPhoneNumber(numbers){
//
//     for (number of numbers) {
//         format = format.replace('x', number);
//     }
//     return format;
// }
// createPhoneNumber(numbers);
// console.log(format);



// 14 Напишите функцию, которая массив с пользователями и возвращает имя пользователя с наибольшей заработной платой. Например:
// getHighestSalarty(users) // должно вернуть 'Marry'

//
// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22,
//         salary: 1500
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25,                                                               //  работает
//         salary: 1200
//     }
// ];
// function getHighestSalarty(users) {
//     const max = {
//         salary: users[0].salary,
//         names: [ users[0].name ],
//     };
//
//     users.forEach(function(user) {
//         if (user.id !== users[0].id) {
//             if (user.salary === max.salary ) {
//                 max.names.push(user.name);
//             } else {
//                 if (user.salary > max.salary) {
//                     max.salary = user.salary;
//                     max.names = [ user.name ];
//                 }
//             }
//         }
//     })
//
//     return max.names;
// }
//
// console.log(getHighestSalarty(users));




// 15 Напишите функцию, которая проверяет корректность строки. Строка должна быть не менее 3х символов
// и не более 16ти символов, должна быть не пустая, не должна содержать числа.


// let str = "fgdg56bf";
//
// function correctStr(str) {
//     if (str.length < 3 || str.length > 16 || !str){
//         alert("Ввод не верный");
//     }                                                                                  // Работает
//     for (let i = 0; i < str.length; i++) {
//         if (Number(str[i])){
//             alert("В строке есть цифры! ")
//         }
//     }
//     return str;
// }
// correctStr(str);


// 16 Напишите функцию, которая проверяет пароль на корректность. Пароль должен быть не менее 6ти символов,
// должен содержать хотя бы одну цифру и хотя бы одну заглавную букву
//
// let password = "aaa7aaa";
//
// function correctPas(str) {
//     let count = 0;
//     let count1 = 0;
//     if (str.length < 6){
//         alert("пароль слабоват");
//     }
//     for (let i = 0; i < str.length; i++) {
//         if(isFinite(str[i])){
//             count++;
//             return count;
//         }
//         if (typeof (str[i]) ==='string' && str[i] === str[i].toUpperCase()){                                  // не работает проверка на заглавную букву
//             count1++;
//             return count1;
//         }
//     }
//
//     if (count === 0){
//         alert("Добавьте хотябы 1 цыфру");
//     }
//     if (count1 === 0){
//         alert("Введите хотябы одну заглавную букву");
//     }
// }
// correctPas(password);