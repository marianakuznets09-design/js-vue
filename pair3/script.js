// let age = prompt("скільки вам років?");
// let registration = confirm("Ви зареєстровані?");
// if (registration === true && age >= 18){
//     alert("dostup dozvoleno");
// }
// else{
//     alert("dostup vidmovleno");
// }



// let access = prompt("What is your access level");
// if (access === "admin" || access === "student"){
//     alert("welcome");
// }
// else {
//     alert("не дозволено");
// }



// let registration = confirm("Are you registered");
// if (registration){
//     let age = prompt("How old are you?");
//     if(age >= 18){
//         alert("dostup dozvoleno");
//     } else{
//         alert("dostup vidmovleno");
//     }
// }
// else{
//     alert("dostup vidmovleno");
// }




// let grade = +prompt("Please enter your grade");
// //90-100 - відмінно, 89-70 - добре, 60-69-задовільно, 8-59-незадовільно
// if (grade >= 90){
//     alert("відмінно");
// }
// else if(grade >= 70){
//     alert("добре");
// }
// else if(grade >= 60){
//     alert("задовільно");
// }
// else{
//     alert("незадовільно")
// }








// //ролі доступу teacher, student
// //Підписка
// //заблокований чи ні
// //тічер - всеодно на підписку, доступ викладача
// //студент - перевірка чи не заблоковано
//
//
// let role = prompt("what is your role?");
// let sub, block
// if (role === "teacher") {
//     block = confirm("Is your account blocked");
//     if (!block) {
//         alert("welcome teacher")
//     } else {
//         alert("access denied");
//     }
// }
// else if(role === "student") {
//     block = confirm("is your account blocked");
//     if (!block) {
//         sub = confirm("do you have sub");
//         if (sub) {
//             alert("welcome student");
//         } else {
//             alert("access denied");
//         }
//     } else {
//         alert("account blocked");
//     }
// }






// // назва товару, кількість товару, вартість товару зв шт. магазин дає знижку якщо: 1. користувач зареєстрований 2. сума покупки 1000+ 3. у користувача є промокод або віп статус
// //промокод: sale, знижка 10 відсотків і виводимо повну вартість, якщо ні - просто вартість
//
// const sale = "sale";
// const discount = 0.1;
// let sum = 0;
// let name = prompt("enter product name");
// let count = prompt("enter product number");
// let price = prompt("enter product price");
// let access = confirm("are you registered?");
// if(access === true && sum >= 1000 && (prompt("enter promocode")===sale || confirm("do you have vip status?"))){
//     alert("you have a discount:" + (sum - (sum*discount)))}
// else{
//     alert("total price:" + sum)
//
// }