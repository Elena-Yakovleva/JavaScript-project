### Объекты

**Базовые понятия**

Объекты используются для того, чтобы создавать сложные структуры данных.
Информация сохраняется через связку ключ: значение.



* Создание объекта
```let user = new Object(); ``` или  ``` user = {};```
* Заполнение объекта
```
user = {
  name: "Ivan",
  age: 25
}                          // {name: 'Ivan', age: 25}

//извлечение свойств 
user["name"];              // 'Ivan'
user["age"];               // 25 
user["city"];              // undefined
user['city'] = "Ivanovo";  // {name: 'Ivan', age: 25, city: 'Ivanovo'}


user2 = new Object();          // {}
user2.name = "Oleg";           // 'Oleg'
user2.secondName;              // undefined
user2.secondName = "Petrov";   // {name: 'Oleg', secondName: 'Petrov'} - создает новое свойство объекта

let gender = "Men";
let user3  = {
name: "Anton",
age: 35,
[gender]: true
}                             // {name: 'Anton', age: 35, Men: true}
```
* Перебор свойств объекта
```
for (let property in user ) {
    console.log(property, user[property]);
}
```
* Обращение к свойству в том случае, если нет понимания структуры объекта методом перебора
```
let user4 = {
  fio:{
    name: "Ivan",
    secondName: "Ivanov",
    patronymic: "Semenovich"
  },
  gender: "men",
  city: "Ivanovo"
};

console.log(user4 && user4.fio && user4.fio.name);  // более современный подход user4?.fio?.name

```

**Spread, rest, деструктуризация**

* Rest оператор используется для объединения элементов в единый массив (...args)
* Spread - используется для разъединения элементов ```[1,2,3,4,5,...arr]```

```
let arr = [1, 2, 3, 4, 57, 84, 52, 59, 95, 73, 32, 12, 22, 89, 96, 100, 17, 82, 75];

Math.max(...arr);  // 100
Math.min(...arr);  // 1

```
* Деструктуризация - позволяет в одно действие произвести разделение массива и сохранение элементов массива в другие переменные
```
let [first, second, third, ...owner] = arr;
first  // 1
second // 2
third  // 3
owner  // [4, 57, 84, 52, 59, 95, 73, 32, 12, 22, 89, 96, 100, 17, 82, 75]

user = {name: 'Ivan', age: 25, city: 'Ivanovo'};
let {name: userName, age: userAge, city: userCity} = user;
userName // 'Ivan'
userAge  // 25
userCity // 'Ivanovo'

```

**Удаление свойств и объектов**
* С ```delete``` помощью можно удалить только свойство объекта и нельзя удалить переменные.
```
let arr = [1,2,3,4,5];
delete arr.length // false
delete arr[2]; // true  [1, 2, empty, 4, 5]

```
**Функции-конструкторы, свойство prototype**
* Обычная функция 
```
function generateUser(firstName, lastName, birthYear, city, jobYear) {
   const currentYear = new Date().getFullYear();
   return {
      firstName,
      lastName,
      name: firstName + " " + lastName,
      birthYear,
      age: currentYear - birthYear,
      city,
      jobYear,
      gender: "male",
   }
}
```
* Функция конструктор - используется для создания объектов
```
function Car(engine) {
  this.engine = engine;
}

Car() // undefined
new Car("V8"); // Car {engine: 'V8'}
new Car("V12"); // Car {engine: 'V12'}  каждый раз создается новый объект

```
* prototype - это объект, поведение которого дублирует поведение других объектов, но при этом свойства других объектов могут быть дополнены новыми свойствами.
```
let a =new Car("V8");

Car{engine: 'V8'}
  engine: "V8"
  [[Prototype]]: Object

Car.prototype.move = function() { console.log("автомобиль движется")};

Car {engine: 'V8'}
engine: "V8"
[[Prototype]]: Object
move: ƒ () // добавилось свойство
constructor: ƒ Car(engine)
[[Prototype]]: Object
```

```
Object.create(null) - создает объект без свойства прототипа

Object.assign({}, {a:123, b:"123", c: true}, {d:1564, e: "sdfs", a: "sfsdf"}); - позволяет оъединять несколько объектов
// {a: 'sfsdf', b: '123', c: true, d: 1564, e: 'sdfs'}

Object.keys() - выводит все ключи объекта
Object.values() - выводит все значения объекта
Object.entries() - выводит связку ключ-значение в виде массива из массивов

let gender = "Men";
let user3  = {
  name: "Anton",
  age: 35,
  [gender]: true
}

for (let [key, value] of Object.entries(user3)) {
   console.log(key, value);
}
// name Anton
// age 35
// Men true

Object.entries(user3).forEach(([key, value]) => console.log(key, value));
 ```