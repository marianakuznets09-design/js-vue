let event = prompt("What is your event?(movie(1), theatre(2), concert(3)");
let cost = 0;
while(!(event == 1 || event == 2 || event == 3)){
    event = prompt("What is your event?(movie(1), theatre(2), concert(3)");
}
switch (event){
    case "1":
        cost = 150;
        // alert(cost + "грн");
        break;
    case "2":
        cost = 220;
        // alert(cost + "грн");
        break;
    case "3":
        cost = 350;
        // alert(cost + "грн");
        break;
}

let sale = 0;

let day = prompt("what kind of day is it?(weekday/weekend)")
let newCost = 0;
if(day == "weekday"){
    newCost = cost;
    alert(newCost + "грн");
}else if(day == "weekend"){
    newCost = Math.fround(cost * 1.15);
    sale += 1;
    // alert(newCost + "грн");
}

let ticket = +prompt("how many tickets?(1-6)")
while(!(ticket >= 1 && ticket <=6)){
    ticket = +prompt("how many tickets?(1-6)")
}

let alltickets=0;
let free = 0;
let full = 0;
for(let i = 1; i <= ticket; i++){

    let age = +prompt("how old are you?")
    if(age === -1){
        break;
    }
    while (!(age>=1 && age <= 100)){
        if(age === -1){
            break;
        }
        alert("некоректний вік")
        age = +prompt("how old are you?")
    }
    let fullcost = 0;
    if (age >=0 && age <=5 ) {
        fullcost = 0;
        free+=1;
        continue;
    } else if (age >=6 && age <=12) {
        fullcost = newCost / 2;
        sale+=1;
    } else if (age >13 && age <=17) {
        fullcost =  newCost * 0.8;
        sale+=1;
    } else if (age >=18 && age <=25) {
        let studentTicket = confirm("do you have student card");
        if (studentTicket == 1) {
            fullcost =  newCost  * 0.9;
            sale+=1;
            // break;
        } else if (studentTicket == 0) {
                    fullcost =  newCost;
                    full+=1;
            }
        }


    else if (age >= 26 && age <= 59) {
        fullcost =  newCost;
        full+=1;
    } else if (age >=60) {
        fullcost =  newCost * 0.75;
    }
        alltickets += fullcost;

}
alert(`all tickets cost ${alltickets} грн`)
console.log("зі знижкою"+sale)
console.log("к-ість квитків:" + ticket)
console.log("безкоштовні:" + free)
console.log("за повною ціною:" + full)
console.log(`all tickets cost ${alltickets} грн`)