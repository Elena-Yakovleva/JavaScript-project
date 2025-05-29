### Функции-декораторы, call, apply

**Логгер-декоратор**

Логгер-декоратор - это функция, которая предназначена для добавления нового функционала в уже имеющуюся функцию.
Декоратор принимает в качестве аргумента другую функцию, обрабатывает ее и выводит результат в виде другой функции с результатами функции аргумента плюс сделанные дополнения

```
sum = (a,b) => a + b;

function decorator(func) {
   return function(...arr) {
      return func(...arr);
   };
};
let f = decorator(sum);
```

**Декоратор-шпион**

Данная функция позволяет сохранять все полученные аргументы в отдельный массив памяти

```
function spy(func) {
   function wrapper(...args) {
      wrapper.history.push(args);
      return func(...args);
   }
   wrapper.history = [];   // создает доп свойство, в котором будут сохраняться внесенные аргументы
   return wrapper;
}

let b = spy(sum);
b.history // покажет массив с введенными агрументами

```

**Кеширующий декоратор**

Кеш - участок памяти, в котором может храниться информация для последующего использования.
```
function cacheDeco(func) {
   let cache = {};
   return (...args) => {
      const hash = args.join(",")  // перечисляет элементы массива аргументов через запятую
      if (hash in cache) {
         return[hach];
      }
   
      const result = func(...args);
      cache[hash] = result;
      return result;
   }
}

let sum = (...args) => args.reduce((acc, item) => acc + item, 0);
```

**Передача контекста. Call, apply**
```
func.apply(this, [...args])
func.call(this, ...args)

```
```
const calc = {
    text: "результат ",
    sum(a, b) {
        this.text = a + " + " + b;
        return a + b;
    }
    
   function cacheDeco(func) {
     let cache = {};
     return function (...args) {
        const hash = args.join(","); 
          if (hash in cache) {
            return cache[hash];
          }
        const result = ;
        cache[hash] = result;
        return result;
     }   
   }
}

```
```
function getAge() {
   return this.age;
}

let user1 = {age: 23};
let user2 = {age: 29};

getAge.call(user1) //23
getAge.call(user2) //29
```

**Задерживающий декоратор**

Задерживающий декоратор - позволяет вызывать функцию сразу, но сам процесс вычисления происходит через какое-то время

```
const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecorator(func, delay) {
   return function (...args) {
       setTimeout(() => console.log(func(...args)), delay);
   }
}

const debounceSum = debounceDecorator(sum);

debounceSum(5,465,46,2562,1); // 3079  через выбранное количество секунд

// преобразование функции таким образом, чтобы  колбек выводился один раз, даже если функция вызывалась несколько раз

function debounceDecorator(func, delay) {
   let timeoutId = null;
   return function (...args) {
       if (timeoutId) {
          console.log("удален текущий таймаут");
          clearTimeout(timeoutId);
       }
       console.log("создаем новый таймаут")
       timeoutId = setTimeout(() => {
           timeoutId = null;
           console.log(func(...args));
           console.log("вызвали колбек");           
       }, delay);
   }
}

```
**Тормозящий декоратор**

Тормозящий декоратор -Вызываем функцию, а потом запрещаем повторные вызовы функции на определенный период времени

```
const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function throttleDecorator(func) {
   let isThrottled = false;
   return function(...args) {
      if (isThrottled) {
         return;
      }
      
      const result = func(...args);
      isThrottled = true;
      setTimeout(() => isThrottled = false, 2000);
      return result;
   }
}

let throttledSum = throttleDecorator(sum);

throttledSum(132,158,1588,2574,1,86);
```