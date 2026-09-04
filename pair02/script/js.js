//if else
// > >= < <= == === != !==
// let a, b;
// a = "1";
// b = 1;
//
// console.log(a == b); //true
// console.log(a === b);

// if (умова){
//     команди;
// }
//
// let temp = prompt("Enter a temperature");
// let result;
// if (temp<= 0) {
//     result = "холодно";
// }
// else if (temp>0 && temp <=10){
//     result = "норм";
// }
// else if (temp>10){
//     result = "жарко";
// }
//
// alert(result)






//............
// let number = prompt("Enter a number");
// let result;
// if (number%2===0) {
//     result = "парне";
// }
// else if(number%2 === 1){
//     result = "непарне";
// }
// alert(result)
//................................................






// const login = "admin";
// const password = "12345"
//
// let userlogin = prompt("enter your username");
// let userpassword = prompt("enter your password");
//
// if(userlogin === login && userpassword === password){
//     alert("Вхід дозволений")
// }
// else{
//     alert("неврний пароль або логін")
// }

//courier 200
//post 100
//pickup 0
// let cost, deliver = prompt("яка доставка?");
//
// switch(deliver){
//     case "courier":
//         cost = 200;
//         break;
//     case "post":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//
//     default:
//         cost = "n|a";  //по замовчуванню
// }
// console.log(cost);






//................................
// let day = prompt("який сьогодні день тижня (1,2, ...7");
//
// switch (day){
//     case "1":
//         day = "понеділок";
//         break;
//     case "2":
//         day = "вівторок";
//         break;
//     case "3":
//         day = "середа";
//         break;
//     case "4":
//         day = "четвер";
//         break;
//     case "5":
//         day = "п'ятниця";
//         break;
//     case "6":
//         day = "субота";
//         break;
//     case "7":
//         day = "неділя";
//         break;
//
//     default:
//         day = "не знайдено";
// }
// console.log(day)

//............................






let productName = prompt("Enter your product name");
let productPrice = + prompt("Enter your product price");
let productCount = + prompt("Enter your product count");

let hasCard = prompt("Чи є у вас дисконтна картка?");//100

let deliveryType = prompt("Enter your delivery type: courier, post, pickup");

let totalPrice,cost, discount = 0;

totalPrice = productPrice * productCount;

if (totalPrice>2000){
    discount = 0.05
}
else if (totalPrice>1000){
    discount = 0.1
}
if(hasCard === "так"){
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1);
}
else{
    totalPrice = totalPrice - (totalPrice * discount)
}
//вартість доставки і заг суму (100 200)
switch (deliveryType){
    case "courier":
        cost = 200;
        break;
    case "post":
        cost = 100;
        break;
    case "pickup":
        cost = 0;
        break;

    default:
        cost = "оберіть інший тип доставки";
}
totalPrice = totalPrice + cost;
console.log(`вартість: ${productName} ${totalPrice}, вартість доставки: ${cost}`)