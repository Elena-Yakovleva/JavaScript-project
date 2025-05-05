let gender = "Men";
let user3  = {
  name: "Anton",
  age: 35,
  [gender]: true
}
/*
for (let property in user3 ) {
    console.log(property, user3[property]);
}

let user4 = {
  fio:{
    name: "Ivan",
    secondName: "Ivanov",
    patronymic: "Semenovich"
  },
  gender: "men",
  city: "Ivanovo"
};

console.log(user4 && user4.fio && user4.fio.name);

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

function Car(engine) {
  this.engine = engine;
}
*/
/*
for (let [key, value] of Object.entries(user3)) {
   console.log(key, value);
}
*/

function Student(name, gender, age) {

}

Student.prototype.setSubject = function (subjectName) {
Student.prototype = Object.create(subjectName.prototype);
}