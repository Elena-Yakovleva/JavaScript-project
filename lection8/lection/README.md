### Асинхронность

JavaScript не поддерживает многопоточную работу.

Выставление задержки в некоторых частях, позволяет распределить нагрузку.
А так же позволяет привязывать выполнение одного действия, к какому-то другому действию

```
setTimeout(() => console.log("Hi"), 2000); // агрументом функции является другая функция, которая выполняется с задержной в 2 сек.
===

function doAsyncAction(a, b) {
   const currentDate = new Date();
   setTimeout((p, m) => {
      const now = new Date();
      console.log(now - currentDate);
      console.log(p, m);
   }, 0, a, b);   
}    // аргументы a, b =>  становятся аргументами коллбэка p и m 

===
clearTimeout(id);  // отменяет вызов setTimeout()
```

```
setInterval(() => console.log("уже приехали?"), 2000); // выводит сообщение через заданный промежуток времени

clearInterval(id);  // отмена функции

```

**HTTP запрос**

```
let xhr = new XMLHttpRequest(); //у конструктора нет аргументов

function processFinish(){
  console.log(xhr.responseText);
}

xhr.onload = processFinish;

xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js");  // xhr.open(method, URL, [async, user, password])
xhr.send(); // xhr.send([body])
```
Вывод ответа в консоль осуществится только в тот момент, когда придет ответ от сервера на сделанный запрос.

**Оптимизация вычислений**\
Разделение выполнения кода по шагам позволяет оптимизировать время выполнения кода
````

````
**Bind**
````
const user ={
   firstName: "Anton",
   showName() {
      console.log(this.firstName);
   }
}

const func = user.showName;

func(); // undefined
func.call(user); // Anton
const bindF = func.bind(user);  // сохраняет в новую переменную новую функцию с привязкой к объекту

setTimeout(() => func.call(user), 2000) // выведет значение функции для объекта user  через 2 секунды 

````
```
user.showName = function() {

      function asyncFunc() {
         console.log(this.firstName);
      }
    
      const bindAsycnFunc = asyncFunc.bind(user);
    
      setTimeout(() => bindAsycnFunc, 2000)
}
```
