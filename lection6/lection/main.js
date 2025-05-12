// Напишите функцию, которая принимает любое количество аргументов типа String или Number и возвращает их сумму,
// если все аргументы являются числами, или конкатенирует их по правилам JS, если хотя бы один аргумент является строкой.
/*ion sum (...arg) {
  return arg.reduce((acc, item) => acc + item);
}

console.log(sum(1,2,3));
console.log(sum('1',2,3));
console.log(sum(1,2,'3'));
*/
class User {
  constructor(name, lastName, age = null) {
    this.userName = name;
    this.userLastName = lastName;
    this.userAge = age;
    console.log(name, lastName, age)
  }
}

let players = [
   new User("Oleg", "Petrov", 17),
   new User("Igor", "Ivanov", 25),
   new User("Pavel", "Romanov")
   ];

class Sportsman {
  constructor() {
    this.scores = [];
  }

  addScores(...scores) {
     for ( let score of scores) {
       this.scores.push(score);
     }
  }

  calculateAverage() {
    if (this.scores.length === 0) {
      return 0;
    }
    return this.scores.reduce((acc, item, i, arr) => acc + item / arr.length, 0);
  }
}


let runner = new Sportsman ();
runner.addScores(5,4,5,2,5);
runner.calculateAverage();

class User{
  set birthYear(year) {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - year;
    this._birthYear = year;
  }
  get birthYear() {
    this._birthYear = year;
  }
}

class Human{
  constructor(name) {
     this.name = name;
  }

  speak() {
     console.log("Добрый день");
  }
}

class Man extends Human{
  constructor(name){
    super(name);
    this.type = "мужчина";
  }
}

let man = new Man("Николай Петрович");

class Text {
  static isText(str) {
     return typeof str === "string";
  }
}

new Text().isText("werwer");   //true

let text = new Text()
text.isText("asfdsd");   //true

Text.isText("werwer");   //true

