function showTariff(name, ...advantages) {
    console.log(`Тариф: ${name}`);
    for(let i = 0; i < advantages.length; i++) {
        console.log(` - ${advantages[i]}`);
    }
    
}

showTariff("Базовый тариф", "Кровать на чердаке", "Беседы у реки");
showTariff("Премиум", "Кровать на чердаке", "Беседы у реки", "Кофе в постель", "Площадка для шашлыков");

const sum = function (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8));


let sum1 = function(a, b) {
    return a + b;
}

let sumArrow = (a, b) => a + b;

let user = {
    name: 'Oleg',
    getName: function () {
        return this.name;
    }
}
console.log(user.getName());

