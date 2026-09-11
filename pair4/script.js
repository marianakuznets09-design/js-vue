// for(let i =1; i <=10; i++){
//     console.log(i);
// }

// for(let i =1; i <=10; i+=2){
//     console.log(i);
// }

// for (let i = 20; i > 0; i--){
//     console.log(i);
// }


// let count = 0;
// for(let i = 20; i > 0; i--){
//     count += 1;
// }
// console.log(count)


// let sum = 0;
// for(let i = 0; i<= 50; i++){
//     if(i%2 === 0){
//         sum += 1;
//     }
// }
// console.log(sum)




// //...............................1
// let sum = 0;
// for(let i =  1; i<= 100; i++){
//     if(i%2 === 1){
//         sum += 1;
//     }
// }
// console.log(sum)





// for(let i = 1; i <= 100; i ++){
//     if (i > 25 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break
//     }
// }



// for(let i = 1; i <= 30; i++){
//     if (i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }



// let student = +prompt("кількість учнів:");
// let sum = 0, goodGrade = 0; badGrade = 0, maxGrade = 12, minGrade = 12;
// for(let i = 1; i <= student; i++){
//     let grade = +prompt("введіть оцінку учня №" + i);
//     if(!(grade >= 1 && grade <= 12)){
//         alert("error")
//         i--;
//         continue;
//     }
//     sum += grade;
//     if(i >= 7){
//         goodGrade ++;
//     }
//     else{
//         badGrade ++;
//     }
//     if(grade > maxGrade){
//         maxGrade = grade;
//     }
//     if( grade < minGrade){
//         minGrade = grade;
//     }
// }
// console.log(sum)
// console.log(goodGrade)
// console.log(badGrade)
// console.log(maxGrade)
// console.log(minGrade)


//...........................2
let student = +prompt("кількість учнів:");
let sum = 0; grademin = 100, grademax = 100, highgrade = 0, mediumgrade = 0, lowgrade = 0, averagegrade = 0;
for(let i = 1; i <= student; i++){
    let grade = +prompt("введіть оцінку учня №" + i);
    if(!(grade >= 0 && grade <= 100)){
        alert("error");
        // i++;
        let error = +prompt("введіть значення повторно:");
        continue;
    }
    sum+=grade;
    if (grade>=90 && grade <= 100){
        highgrade++;
    }
    if (grade>=60 && grade<90){
        mediumgrade++;
    }
    else{
        lowgrade++;
    }
    if (grade > grademax){
        grademax = grade;
    }
    if(grade < grademin){
        grademin = grade;
    }
    if(grade === 100){
        console.log("учень зі 100 балами: №" + i);
    } else{
        console.log("учня зі 100 балами немає");
    }
    averagegrade = sum / student;
}
console.log("середній результат" + averagegrade)
console.log("к-ість оцінок, які в межах 90-100:" + highgrade)
console.log("к-ість оцінок, які в межах 60-89:" + mediumgrade)
console.log("к-ість оцінок, які менше 60:" + lowgrade)
console.log("найвища оцінка" +grademax)
console.log("найнижча оцінка" + grademin)

