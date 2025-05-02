
const arr = ["Ann", "Helen", "Fox"];
/*
arr.push("Richard"); // добавление 1 элемента в массив
arr.push("Jane", "Mary", "Susen"); // добавление нескольких элементов в массив
arr.pop();  // удаление последнего элемента из массива
arr.unshift("Susen"); // добавляет элемент в начало массива
arr.shift(); // удаляет элемент из начала массива.

Работа с функциями:
создание функции с проверкой введенного аргумента на то, что он является массивом и вывод массива если результат проверки true

function logArray(arr) {
    if(arr instanceof Array) {       
       for(let element of arr) {
        console.log(element);
       }
    } else {
        console.log(`${arr} - не является массивом`);
    }
}

// Преобразование аргументов, внесенных в фунцуию в массив

function logArr(arr) {
    let array = Array.from(arr);      
    for(let element of array) {
        console.log(element);
    }
}
logArr("sfsdf")

function logArr() {
    let array = Array.from(arguments);   //Преобразование функции таким образом, чтобы она принимала в себя любые аргументы и создавала из них массив
    for(let element of array) {
        console.log(element);
    }
}
==
*/
//Перебор элементов в массиве

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (let number in numbers) {
    console.log(number);
}

for (let position in numbers) {
    console.log(numbers[position]);
}
numbers.forEach((item, index, arr) => console.log(`Номер ячейки: ${index}; Номер элемента: ${item}`))
==
let searchName = "Mary"

for (let name of arr) {
    if (name === searchName) {
        console.log(name);
        break;
    }
}

arr.indexOf(searchName)

if(arr.includes(searchName) !== -1) {
    console.log(`Мы нашли элемент ${searchName}`);
}
==
//numbers.push(5,3,3,9,1,2,5)

//console.log(numbers.includes(3));
//console.log(numbers.lastIndexOf(2));
/*
let num = 3;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === num) {
        console.log(`Цифра ${num} находится в ячейке массива с номером ${i} `)
    }
}

function checkNumber(number) {
    return number % 3 === 0;
}
console.log(numbers.findIndex(checkNumber));

==
numbers.findIndex((number) => number % 3 ===0 );
console.log(numbers.find(number => number % 3 === 0 && number % 2 === 0));
console.log(numbers.every(element => element % 3 === 0 ));
==
*/
const staff = [
    {name: "Мария", departament: "IT", salary: 75000},
    {name: "Иван", departament: "Продажи", salary: 55000},
    {name: "Николай", departament: "IT", salary: 92000},
    {name: "Мария", departament: "маркетинг", salary: 45000}
]
/*

staff.find(staff => staff.name === "Мария" && staff.departament === "IT"); //  {name: 'Мария', departament: 'IT', salary: '75000'}
staff.some(staff => staff.salary >= "90000"); //true
staff.every(staff => staff.salary >= "50000"); //false

let salary = staff.map(staff => staff.salary);
staff.map(staff => staff.salary * 2);

console.log(salary);

let salary = staff.filter(staff => staff.departament === "IT").map(staff => staff.salary)
.reduce(
         (acc, item, i, arr) => { acc += item;
                                  if (i === arr.length - 1) {
                                      return acc / arr.length;
                                  }
                                  return acc;
                                  }, 0);
console.log(salary);
==
// перевод секунд в часы через мап
let time = [1000, 1600, 3600, 7200];
let secInHour = 3600;

let result = time.map(time => time / secInHour);

console.log(result);

==
// клонирование массивов
const numCopy = [];
for (let element of numbers) {
   numCopy.push(element);
}

const numCopy1 = numbers.slice();  // метод сохраняет кусок массива в новый, но без аргументов обрезка идет с 0 до последнего элемента
const numCopy2 = numbers.map(i => i); // метод переносит каждый элемент массива в новый массив
const numCopy3 = [...numbers]; // вывод REST аргумента сначала упаковывает массив в строку, а затем переводит обратно в массив
const numCopy4 = JSON.parse(JSON.stringify(numbers)); // так же преобразовывает массив с строку, затем строка переводится через parse снова в массив
//массивы содержат одинаковые элементы но они не являются равными друг другу.
*/
const price = [15,78,35,123,567,6,456,7,466,7,12335,5354,45];
arr.sort(); // [ 'Ann', 'Fox', 'Helen' ]
price.sort(); // [ 123, 12335, 15, 35, 45, 456, 466, 5354, 567, 6, 7, 7, 78] - сравнение по первым элементам
price.sort((a, b) => a - b); // [6, 7, 7, 15, 35, 45, 78, 123, 456, 466, 567, 5354, 12335] - массив от меньшего к большему
price.sort((a, b) => b - a); // [12335, 5354, 567, 466, 456, 123, 78, 45, 35, 15, 7, 7, 6] -  от большего к меньшему
console.log(arr);
console.log(price);

const price = [15,78,35,123,567,6,456,7,466,7,12335,5354,45];

price.reduce((acc, item) => acc += item, 0);

let price = price.reduce((acc, item) => {
    return acc * item }, 1);
