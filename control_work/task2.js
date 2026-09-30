let amountStudent =+prompt("how many students?");
let suma = 0;
let amountHigh = 0;
let amountLow = 0;
// let maxGrade;
for(let i = 1; i <= amountStudent; i++){
    let grade = +prompt("what is the grade?(1-12)");
    while(grade<=1 || grade>=12){
        alert("такої оцінки не існує");
        grade = +prompt("what is the grade?(1-12)");
    }


    if(grade>=7){
        amountHigh++;
    }else{
        amountLow++;
    }
    suma +=grade;


}
let average = suma / amountStudent;
console.log(`сума: ${suma}`);
console.log(`середня: ${average}`);
console.log(`Оцінок 7 і вище: ${amountHigh}`);
console.log(`Оцінок нижче 7: ${amountLow}`);
