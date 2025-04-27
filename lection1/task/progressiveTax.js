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

let sumTaxProgressive = 0;
for (let i = 0; i < salaryArray.length; i++) {
    let salary = salaryArray[i];
    let tax = 0;

    if (salary <= 10000) {
        tax = 0;
    } else if (salary <= 20000) {
        tax = (salary - 10000) * 0.1;
    } else if (salary <= 70000) {
        tax = 1000 + (salary - 20000) * 0.2;
    } else {
        tax = 1000 + 10000 + (salary - 70000) * 0.5;
    }

    sumTaxProgressive += tax;
}

console.log('Суммарные налоговые отчисления со всех зарплат (прогрессивный налог): ' + sumTaxProgressive + ' рублей')
