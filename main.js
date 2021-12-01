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
//                 arr.splice(j--,1);                    //  почему именно так ?????? j-- ??????
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
//         } else if (typeof arr[i] === 'string'){
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
//         } else result = false;
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
// function isSpam(arr) {
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



// 12 Напишите функцию, которая принимает массив. Функция должна вернуть предложение только из строковых значений массива. Например:
// arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела

// let arr = ['Привет', 1, null, 'как', '{}', 'дела'];
// let newStr = "";
// function returnOnlyString(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string' || Number.isNaN(arr[i])){                         // не работает на {}
//             newStr = newStr + " " + arr[i];
//         }
//     }
//     return newStr;
// }
// returnOnlyString(arr);
// console.log(newStr);

// 13 Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let format1;
// function createPhoneNumber(numbers){
//     let format = '(xxx) xxx-xxxx';
//     for (number of numbers) {
//        format1 = format.replace(/x/g, number);
//     }                                                                  // не работает, меняет все на 0.
//     return format1;
//     }
//
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// console.log(format1);



// 14 Напишите функцию, которая массив с пользователями и возвращает имя пользователя с наибольшей заработной платой. Например:
// getHighestSalarty(users) // должно вернуть 'Marry'


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
//         age: 25,                                                               // не работает
//         salary: 1200
//     }
// ];
//
// function topSalary(obj) {
//     let int = 0;
//     for(const key in obj) {
//         if (int < obj.salary){
//             int = obj.salary;
//         }
//     }
//     return obj.name;
// }
//
// console.log(topSalary(users));



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
// let password = "dfdbtd";
//
// function correctPas(str) {
//     let count = 0;
//     let count1 = 0;
//     let char = ' ';
//     if (str.length < 6){
//         alert("пароль слабоват");
//     }
//     for (let i = 0; i < str.length; i++) {
//         if(Number(str[i])){
//             count++;
//             return count;
//         }
//         if (isNaN(str[i]) === str[i].toUpperCase()){                                  // не работает проверка на заглавную букву
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