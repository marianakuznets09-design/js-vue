// alert("Привіт");
// const name = "Mariana";
// let age = 16;
// const isStudent = true;
//
// console.log(typeof isStudent); #typeof показує тип

//=-
/* / % **

 */
// let num1 =prompt("Enter a number")
// let num2 =prompt("Enter a number")
//
// console.log(Number(num1) + Number(num2));
// console.log(num1 - 0) + (num2 - 0)
//
// let num3 = 13;
// console.log(typeof String(num3));



let productName = prompt("Enter your product name");
let productPrice = + prompt("Enter your product price");
let productCount = + prompt("Enter your product count");
// let delivery = + prompt("Enter your delivery");
let sale = + prompt("Enter your sale");

// let totalPrice = productPrice * productCount + delivery;
let price = (productPrice * productCount);
let discount =(price * sale) / 100;
let totalPrice =price - discount;

console.log(`product name: ${productName} на суму: ${totalPrice}`);
console.log(`discount: ${discount}`)
alert("Product is" + productName + "\ntotal price is: " + totalPrice);