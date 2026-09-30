let age = +prompt("How old are you?");
let day = prompt("what day it is(weekday=1/weekend=2)?");
if(!(day == 1 || day == 2)){
    alert("Помилка: неправильний тип дня");
}
const weekdayCost = 200;
const weekendCost = 250;
let cost = 0;
if(day == 1) {
    if (age >= 0 || age <= 7) {
        cost = 0;
    } else if (age >= 8 || age <= 17) {
        cost = weekdayCost * 0.5;
    }else if(age>=18 || age<=59){
        cost = weekdayCost;
    }else if(age>=60){
        cost = weekendCost * 0.4;
    }
}else{
    if (age >= 0 || age <= 7) {
        cost = 0;
    } else if (age >= 8 || age <= 17) {
        cost = weekendCost * 0.5;
    }else if(age>=18 || age<=59){
        cost = weekendCost;
    }else if(age>=60){
        cost = weekendCost * 0.4;
    }
}
console.log(`Вік: ${age}
День: ${day}
Результат: ${cost}`);
