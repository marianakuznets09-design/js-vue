// let num = 1;
// while (num <= 5){
//     console.log(num);
//     num++;
// }


// let userNumber = +prompt("Enter your number");
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt("Error, enter your number");
//     console.log('error')
// }


// console.log(Number( "7"));
// console.log(Number( "hello"));


// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 100){
//     age = +prompt("Erorr. Enter your age");
// }
// console.log(age);

//1 example
// const correctPin = 1234;
//
// let userPin = +prompt("enter a valid pin");
// let attempts = 1;
// while(correctPin !== userPin && attempts < 3){
//     userPin = +prompt("error. enter a valid pin");
//     attempts++;
// }
// if (userPin === correctPin){
//     console.log("welcome");
// }
// else{
//     console.log("заблоковано");
// }
//

// //2 example
// const correctPin = 1234;
// let attempts = 1;
// while(attempts <=3){
//     let userPin = +prompt("enter a valid pin");
//     if(userPin === correctPin){
//         console.log("you entered a valid pin");
//         break
//     }
//     console.log("error pin");
//     attempts++;
// }




// let menuChoice;
// do{
//     menuChoice = prompt(`what is your choice? \n
//     1 =переглянути профіль \n
//     2-налаштування\n
//     3-статистика\n
//     0-вийти`);
//     if(menuChoice === "1"){
//         console.log("відкриваємо профіль");
//     }else if (menuChoice === "2"){
//         console.log("відкриваємо налаштування");
//     }else if (menuChoice === "3"){
//         console.log("відкриваємо статистику");
//     }else if (menuChoice === "0"){
//         console.log("вийти");
//     }else{
//         console.log("вибір неправильний")
//     }
// }while (menuChoice !== "0");







// //..............................
// let menuChoice = prompt(`what is your choice? \n
//      1 =переглянути профіль \n
//      2-налаштування\n
//      3-статистика\n
//      0-вийти`);
// switch (menuChoice){
//     case "1":
//         console.log("відкриваємо профіль");
//         break;
//     case "2":
//         console.log("відкриваємо налаштування");
//         break;
//     case "3":
//         console.log("відкриваємо статистику");
//         break;
//     case "0":
//         console.log("вийти");
//         break;
//     // case "":
//     //     console.log("вибір неправильний");
//     //     break;
// }
// //...............................





// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt(`веди оцінку № ${count + 1}`);
//     if(!Number.isNaN(grade) || grade < 1 || grade > 12){
//         alert("не коректна оцінка. введи ще раз")
//         continue
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);


// let questionsNum = 1, score = 0;
// while (questionsNum <=5){
//     let questions = '', correctAnswer = '';
//     switch(questionsNum){
//         case 1:
//             questions ="ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//         case 2:
//             questions = 'оператор and';
//             correctAnswer = "&&";
//             break
//         case 3:
//             questions = "оператор or";
//             correctAnswer = '||';
//             break;
//         case 4:
//             questions = "як зупинити цикл?"
//             correctAnswer = "break";
//             break;
//         case 5:
//             questions = 'строга рівність позначається...';
//             correctAnswer = "===";
//             break;
//     }
//     let answer = prompt(`запитання № ${questionsNum} із 5\n
//     ${questions}`);
//     if (answer === ''){
//         alert("відповід не може бути пуста");
//         continue
//     }
//     if (answer === correctAnswer){
//         alert('вірно!');
//         score++;
//     }else{
//
//         alert("не вірно!")
//     }
//     questionsNum++;
// }
// if (score === 5){
//     alert("ти молодець!")
// }else if (score >= 3){
//     alert("ok")
// }
// else {
//     alert("треба вчитися")
// }




// //................................
// let age = +prompt("How old are you?");
// while(!(age>=12 && age<=90)){
//     alert("некоректне значення");
//     age = +prompt("How old are you?");
// }
// const pin = 4321;
// let pinUser = +prompt("enter a pin");
// if(pinUser != 4321){
//     pinUser = +prompt("enter a pin");
// }else{
//     alert("пінкод правильний")
// }
// do {
//     let menu = +prompt(`1 - Особистий кабінет\n
//         2 - Повідомлення\n
//         3 - Налаштування\n
//         0 - Вихід\n`);
//
//     if(menu == 1){
//         alert("ососбистий кабінет");
//         break;
//     }else if(menu ==2){
//         console.log("Повідомлення");
//         break;
//     }else if(menu ==3){
//         console.log("Налаштування");
//         break;
//     }else if(menu ==0){
//         console.log("Вихід");
//         break;
//     }else{
//         alert("такого пункту немає")
//     }
//
//     // switch (menu){
//     //     case "1":
//     //         alert("ососбистий кабінет");
//     //         break;
//     //     case "2":
//     //         console.log("Повідомлення");
//     //         break;
//     //     case "3":
//     //         console.log("Налаштування");
//     //         break;
//     //     case "0":
//     //         console.log("Вихід");
//     //         break;
//     // }
// }while(menu != 0){
//     menu = +prompt(`1 - Особистий кабінет\n
//         2 - Повідомлення\n
//         3 - Налаштування\n
//         0 - Вихід\n`);
// }

