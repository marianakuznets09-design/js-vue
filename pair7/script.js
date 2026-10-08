// let price = [12, 5, 45, 78, 9];
// const price2 = [120, 23, 45, 60, 55];
// console.log(price2[2]);
//
// price2[1] = 30;
// console.log(price2);
//
// console.log(price.length)


// let suma = 0;
// for(let i = 0; i < price.length; i++){
//     suma += price[i];
//     if (prices[i] % 2 === 0){
//         console.log(prices[i]);
//     }
// }
// console.log(suma)




// function countlimit(price, limit){
//     let count = 0;
//     for(let i = 0; i < price.length; i++){
//         if(price[i] > limit){
//             count++;
//         }
//     }
//     return count;
// }
//
// let price = [50, 45, 30, 100, 55];
// let limit = 50;
// console.log(countlimit(price, limit));




// //1.............середнє
// function countAverage(price, count){
//     count = 0;
//     for(let i = 0; i < price.length; i++){
//             count+= price[i];
//
//     }
//     return count / price.length;
// }
//
// let price = [50, 45, 30, 100, 55];
// console.log(countAverage(price));




// //2
// function countNumbers (){
//     let count = [];
//     for(let i = 0; i < 3; i++) {
//         let number = +prompt("введіть число")
//         count[i] = number;
//     }
//     let suma = 0
//     for(let i = 0; i < count.length; i++){
//         suma += count[i]
//     }
//     return suma;
//
// }
//
// console.log(countNumbers())