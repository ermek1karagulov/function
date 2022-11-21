// функция это механизм для многократного использования определенной части кода. (DRY (не повторяй самого себя))

// Function Decloration - имминуемая функция
// function funcName(param1, param2, param3) {
//   // тело функции
// }
// Function Expression - ананимная функция
// Arrow function - стрелочнная функция

// function showMassage(message, message2 = "NO MASSAGE 2") {
//   console.log(message, message2);
// }
// showMassage("qwert", "qwerty");
// showMassage("sdf");
// showMassage("asdfghj");

// function culcMultiply(a, b) {
//   //   console.log(a * b);
//   return a * b;
// }

// let result = culcMultiply(5, 3);
// let result2 = culcMultiply(2, 5);

// console.log(result, "qwer1");
// console.log(result2, "sdfgh2");

// function calcPersonsAge(person1, person2) {
//   //   console.log(person1.age + person2.age);
//   let sum = person1.age + person2.age;
//   return sum;
// }

// let student1 = {
//   name: "Muhammad",
//   username: "munxw",
//   age: 16,
// };

// let student2 = {
//   name: "Amina",
//   username: "mina",
//   age: 17,
// };
// let result = calcPersonsAge(student1, student2);
// console.log();

// Задание №1
// Напишите функцию hello(), которая при
// вызове будет принимать переменную name
// (например, «Василий») и выводить строку
// (в нашем случае «Привет, Василий»).
//  При отсутствии аргумента выводить:
// "Привет, гость"

// function hello(name = "гость") {
//   console.log(`Привет ${name}`);
// }
// hello("ermek");
// hello();

// Задание №2
// Создайте функцию rgb(), которая будет
// принимать три числовых аргумента и возвращать
// строку вида «rgb(23,100,134)»(подставить
// аргументы под числовые значения rgb).
// Если аргументы не заданы, считать их
// равными нулю, т.е возвращать «rgb(0,0,0)»

// function rgb(num1 = 0, num2 = 0, num3 = 0) {
//   console.log(`rgb(${num1}, ${num2}, ${num3})`);
// }
// rgb(123, 123, 34);
// rgb();

// Задание №3
// Создайте функцию которая принимает в
// аргументы 3 числовых параметра. Функция должна умножать
// первый аргумент на второй, затем отнимать третий аргумент
// и возвращать результат.

// function sum(num1, num2, num3) {
//   return num1 * num2 - num3;
// }
// console.log(sum(999, 1, 111));
