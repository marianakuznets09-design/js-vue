// let book = {
//     title: "Кобзар",
//     author: "Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true
// }
// console.log(book);
// console.log(book.title);

// let books = [
//     {
//         id:1,
//         tittle: "Кобзар",
//         author: "Шевченко",
//         year: 1840,
//         price: 500,
//         isAvailable: true
//     },
//     {
//         id:2,
//         tittle: "Лісова пісня",
//         author: "Леся Українка",
//         year: 1918,
//         price: 600,
//         isAvailable: true
//     },
//     {
//         id:3,
//         tittle: "Тигролови",
//         author: "Іван Багряний",
//         year: 1944,
//         price: 450,
//         isAvailable: true
//     },
//     {
//         id:4,
//         tittle: "Місто",
//         author: "Підмогильний",
//         year: 1928,
//         price: 550,
//         isAvailable: true
//     }
// ]
// console.log(books)
// console.log(books.length)
// console.log(books[1].author)
//
// for(let book of books){
//     console.log(`book: ${book.id} - ${book.author}`)
// }
// books.forEach(function(book){
//     console.log(`book: ${book.author}, ${book.isAvailable}`)
// })

// let isAvailableCount = 0;
// let totalPrice = 0;
//
// for(let book of books){
//     if(book.isAvailable === true){
//         isAvailableCount++;
//         totalPrice += book.price
//     }
// }
// console.log(totalPrice)
// console.log(isAvailableCount)
//
// books[1].price = 750;
// console.log(books)
//
// books.push({
//     id:5,
//     tittle: "Захар Беркут",
//     author: "Іван Франко",
//     year: "1882",
//     price: 500,
//     isAvailable: false
// })
// console.log(books)
//
// let enterId = +prompt("enter your book ID");
// let bookFound = null;
//
// for (let book of books){
//     if (book.id === enterId){
//         bookFound = book;
//         break;
//     }
// }
// if (bookFound != null){
//     let status = "Немає у наявності";
//     if (bookFound.isAvailable){
//         status = "у наявності"
//     }
//     alert(`книга ${bookFound.tittle}. ${bookFound.price}грн ${status}`)
// }else{
//     alert("Книжку не знайдено")
// }

//................
let clubs = [
    {
        id:1,
        name: "Jazz funk",
        category: "dance",
        price: 400,
        members: 15,
        active: true
    },
    {
        id:2,
        name: "Street Workout",
        category: "sport",
        price: 500,
        members: 10,
        active: false
    },
    {
        id:3,
        name: "Belly dance",
        category: "dance",
        price: 450,
        members: 20,
        active: true
    },
    {
        id:4,
        name: "piano",
        category: "music",
        price: 450,
        members: 10,
        active: false
    },
    {
        id:5,
        name: "taekwondo",
        category: "Martial arts",
        price: 350,
        members: 30,
        active: true
    }
]


let menu = +prompt(`1 - Показати всі гуртки
2 - Знайти гурток за ID
3 - Записати учасника
4 - Змінити статус набору
5 - Додати новий гурток
6 - Показати статистику
0 - Вихід`)
if(menu === 1){
    for(let club of clubs){
        console.log(club)
    }

    // alert(clubs.name,
    //       clubs.category,
    //       clubs.price,
    //       clubs.members,
    //       clubs.active)

}else if(menu === 2){
    let customerId = +prompt("який номер ID(1-5)?");
    switch (customerId){
        case 1:
            alert(`id:1,
                   name: Jazz funk,
                   category: dance,
                   price: 400,
                   members: 15,
                   active: true`);
            break;
        case 2:
            alert(`id:2,
                   name: Street Workout,
                   category: sport,
                   price: 500,
                   members: 10,
                   active: false`);
            break;
        case 3:
            alert(`id:3,
                   name: Belly dance,
                   category: dance,
                   price: 450,
                   members: 20,
                   active: true`);
            break;
        case 4:
            alert(`id:4,
                   name: piano,
                   category: music,
                   price: 450,
                   members: 10,
                   active: false`);
            break;
        case 5:
            alert(`id:5,
                   name: taekwondo,
                   category: Martial arts,
                   price: 350,
                   members: 30,
                   active: true`)
            break;
        case '':
            alert("такого гуртка не знайдено")
            break;
    }
}else if(menu === 3){
    let customerId2 = +prompt("який номер гуртка вас цікавить, ID(1-5)?");
    if(customerId2 <=5){
        alert(confirm("Вас записувати на заняття?"))
        if(confirm === true){
            for(let club of clubs){
                if(customerId2 <=5){
                    club.members+=1;}
                //     break
                // }else if(customerId2 === 2){
                //     clubs[2].members++;
                //     break
                // }else if(customerId2 === 3){
                //     clubs[3].members++;
                //     break
                // }else if(customerId2 === 4){
                //     clubs[4].members++;
                //     break
                // }else if(customerId2 === 5){
                //     clubs[5].members++;
                //     break
                // }
            }
        }else{

        }
    }else{
        alert("такого гуртка не знайдено")
    }
}else if(menu === 4) {
    let customerId3 = +prompt("який у вас номер гуртка ID(1-5)?");
    if (customerId3 <= 5 && clubs.active === true) {
        alert(confirm("Вас записувати на заняття?"))
        if (confirm === true) {
            for (let club of clubs) {
                if (customerId3 === 1) {
                    clubs[1].active.splice(1, 0, false);
                    break
                } else if (customerId3 === 2) {
                    clubs[2].active.splice(1, 0, false);
                    break
                } else if (customerId3 === 3) {
                    clubs[3].active.splice(1, 0, false);
                    break;
                } else if (customerId3 === 4) {
                    clubs[4].active.splice(1, 0, false);
                    break;
                } else if (customerId3 === 5) {
                    clubs[5].active.splice(1, 0, false);
                    break
                }
            }
        }
    }
}else if(menu === 5){
    let name = prompt("яка назва гуртка?");
    let category = prompt("який напрям гуртка?");
    let price = +prompt("яка варість?");
    let members = +prompt("яка кількість учасників?");
    clubs.push({
        id:6,
        name: name,
        category: category,
        price: price,
        members: members,
        active: true
})
}else if(menu === 6){
    course = 0;
    courseTrue = 0;
    membersCount = 0;
    priceAverage = 0;
    priceAverage2 = 0;
    clubs.forEach(function(club){
        course === clubs.length;
        if(club.active === true){
            courseTrue++;
        }
        membersCount += club.members;
        priceAverage += club.price
        priceAverage2 = priceAverage / clubs.length
    })
    console.log(`кількість гуртків: ${clubs.length}`)
    console.log(`кількість гуртків із відкритим набором: ${courseTrue}`)
    console.log(`кількість учасників: ${membersCount}`)
    console.log(`середня вартість заняття: ${priceAverage2}`)
}else if(menu === 0){
    alert("відбувається вихід");
}


console.log(clubs)