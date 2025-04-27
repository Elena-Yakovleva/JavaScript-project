let salary10000 = 5;
let salary25000 = 15;
let salary50000 = 40;
let salary100000 = 10;
console.log('Всего сотрудников: ' + (salary10000 + salary25000 + salary50000 + salary100000) + ' человек \n');

let salaryArray = [];
for (let i = 0; i < salary10000; i++)
    salaryArray.push(10000);
for (let i = 0; i < salary25000; i++)
    salaryArray.push(25000);
for (let i = 0; i < salary50000; i++)
    salaryArray.push(50000);
for (let i = 0; i < salary100000; i++)
    salaryArray.push(100000);

let sumTax = 0;
for(i = 0; i < salaryArray.length; i++)
    sumTax += salaryArray[i] * 0.2;
    console.log('Суммарные налоговые отчисления со всех зарплат: ' + sumTax + ' рублей \n');

let averageTax = sumTax / salaryArray.length;
console.log('Средние налоговые отчисления на человека: '+ Math.floor(averageTax) + ' рублей \n');