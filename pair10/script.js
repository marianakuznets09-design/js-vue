// names = ["ivan", "mark", "miroslava", "oleksandra", "emiliia"];
// console.log(names)
// console.log(names[-1])
// console.log(names(length))
//
//
//
// names2 = []
// names2.push("vlada");
// names2.push("miroslava");
//
// names2.pop()
// names2.unshift("miroslava", "miroslava") //на початок списку
//
// names2.shift()
//
// names.slice(1, 3)
// console.log(names2)
// console.log(names2)






// names = ["ivan", "mark", "miroslava", "oleksandra", "emiliia"];
// let deleted = names.splice(2, 1);
// names.splice(1,0, "bohdan");
// names.splice(0, 1, "mariia", "ksuha");
//
// console.log(deleted);
// console.log(names);


// function register(name){
//     if(name.trim().length === 0){    //трім -- пробіли
//         alert("введи ім'я");
//         return;
//     }
//     let duplicate = false;
//     for (let i = 0; i < names.length; i++){
//         if (names[i] === name){
//             duplicate = true
//         }
//     }
//     if (duplicate){
//         alert(`таке ім'я вже є ${name}`);
//         return;
//     }
//     names.push(name)
//     alert(`учасни: ${name} додано`)
// }
//
// function deleted(name){
//     let index = -1
//     for(let i = 1; i < names.length; i++){
//         if (names[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("такого учасника немає")
//     }else{
//         names.splice(index, 1);
//         alert(`учасник з іменем ${name} видалений`)
//     }
// }
//
// function count(){
//     alert(`кількість учасників ${names.length}`)
//                }
//
// names = ["ivan", "mark", "miroslava", "oleksandra", "emiliia"];
// register("mykyta");
// register("ivan");
// register('  ');
// deleted("ivan");
// deleted("mykyta");
// count();


// names = ["ivan", "mark", "miroslava", "oleksandra", "emiliia"];
// // 1
// for(let i = 1; i < names.length; i += 1){
//     console.log(names[i]);
// }

// // 2
// for(name of names){
//     console.log(name)
// }

// //3
// names.forEach(function (name, index){
//     console.log(name, index);
// })



// //...................
// //1
// names = ["Микита", "Олександра", "Влад", "Іван"]
// names.push("Влада")
// names.unshift("Аліса")
// names.pop()
// names.splice(2, 1, "Мирослава")
// console.log(names)
//
// for(let i= 0; i < names.length; i++){
//     // console.log(`${names[i]}: ${i + 1}`)
//     console.log(names[i]);
// }
//
// for(name of names){
//     console.log(name)
// }
//
//
// names.forEach(function (name, index) {
//     console.log(index, name, name.length);
// })


// //2
// prices = [120, 250, 180, 300, 150, 400]
// suma = 0;
// sumaTickets = 0;
// for(let i = 0; i < prices.length; i++){
//     suma += prices[i]
//
//     if(prices[i] >= 200){
//         sumaTickets++;
//     }
// }
// console.log(suma)
// console.log(sumaTickets)
// let average = suma / prices.length
// console.log(average)
//
// //2 спосіб
// suma2 = 0;
// sumaTickets2 = 0;
// prices.forEach(function(price){
//     suma2 += price;
//
//     if(price >= 200){
//         sumaTickets2++;
//     }
// })
// console.log(suma2)
// console.log(sumaTickets2)