// function name(аргумент){
//     код
// }


// function hello(){
//     alert("hello world!");
// }
//
// hello();
// hello();
// hello();

// function showInfo(name, price = "немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("графік роюоти: 08:00 - 21: 00")
//     console.log(`товар: ${name}, вартість: ${price}`)
//     console.log(`сума до оплати: ${count * price}`)
// }
// showInfo('зелений чай', 100, 4);



// function calcilateTotal(price, total){
//     let suma = price * tota, discount, totalSuma;
//     if( suma >= 5000){
//         discount = 0.1
//     }else{
//         discount = 0
//     }
//     totalSuma = suma * (1 - discount);
//     return totalSuma
//
// }
// let total = calcilateTotal(2500, 3);
// console.log(total);



// function showInfo(name, price = "немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("графік роюоти: 08:00 - 21: 00")
// }
//
// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscountPercent(total){
//     if (total >= 10000){
//         return 15;
//     }else if(total >= 5000){
//         return 10;
//     }else if (total >= 2000){
//         return 5;
//     }else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("введіть назву товару: ")
// let productPrice = +prompt("введіть варість товару: ")
// let productCount = +prompt("введіть кількість товару: ")
//
// let ProductTotal = getProductTotal(productPrice * productCount);
// let discountPercent = getProductTotal(ProductTotal);
// let discountValue = getDiscountValue(ProductTotal, discountPercent);
// let finalPrice = getFinalPrice(ProductTotal, discountValue);
//
// showInfo(productName, productPrice? productCount)
// console.log(`товар: ${productName}`);
// console.log(`ціна: ${productPrice}грн`);
// console.log(`кількість: ${productCount}шт.`);
// console.log(`сума: ${ProductTotal}грн`);
// console.log(`знижка: ${discountPercent}%`);
// console.log(`сума знижки ${discountValue}грн`);
// console.log(`до сплати: ${finalPrice}грн`);


//...................




// function calculateTickets(price, count){
//     return price * count
// }
//
// function getTicketDiscount(total){
//     if (total >= 1500){
//          return 15;
//     }else if(total >= 1000){
//          return 10;
//     }else if (total >= 500){
//          return 5;
//     }else{
//          return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent){
//     return (total * percent) / 100
// }
//
// function calculateTicketFinalPrice(total, discount){
//     return total - discount
// }
// let ticketPrice = 200;
// let ticketCount = 4;
//
// let total = calculateTickets(ticketPrice, ticketCount)
// let percent = getTicketDiscount(total)
// let discount = calculateTicketDiscount(total, percent)
// let finalPrice = calculateTicketFinalPrice(total, discount)
//
// console.log(`загальна сума: ${total}`)
// console.log(`відсоток знижки: ${percent}`)
// console.log(`знижка складає: ${discount}`)
// console.log(`вартість квитка: ${finalPrice}`)










let login,password, userLogin, userPassword;


function registration(){
    login = prompt("напишіть логін");
    password = prompt("напишіть пароль");
}

function enter(){
    for (let i = 1; i <= 3; i++){
        userLogin = prompt("введіть ваш логін");
        userPassword = prompt("введіть ваш пароль");

        if(userLogin == login && userPassword == password){
            alert("вхід");
            break;
        }else{
            alert("введіть дані ще раз")
        }
    }
}

let choice = +prompt("виберіть: 1 - реєстрація \n 2 - вхід \n 3 - закрити")

function menu(choice){
    if (choice == 1){
        return registration();
    } else if(choice == 2){
        return enter();
    }else if(choice == 0){
        return "закриття";
    }
}

// let choice = +prompt("виберіть: 1 - реєстрація \n 2 - вхід \n 3 - закрити")
console.log(menu(choice))

