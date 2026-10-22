// function isHighScoreScore(score){
//     return score >= 10;
// }
// scores = [12, 5, 4, 11, 10, 9]
//
// let highScore = scores.filter(isHighScoreScore)
// console.log(highScore)

// scores = [12, 5, 4, 11, 10, 9]
// let highScore = scores.filter(score => score >= 10);
// console.log(highScore)

// let courses = [
//     {id: 1,
//     tittle: "HTML",
//     description: "HTML",
//     price: 300,
//     active: false},
//     {id: 1,
//     tittle: "CSS",
//     description: "CSS",
//     price: 200,
//     active: true},
//     {id: 1,
//     tittle: "Java Script",
//     description: "Java Script",
//     price: 500,
//     active: true},
//     {id: 1,
//     tittle: "Vue",
//     description: "Vue+JS",
//     price: 600,
//     active: false},
// ]
// let idCourse = +prompt("What is the course")
// let found = course.find(course => course.id === idCourse);
// if (found !== undefined){
//     console.log(found)
// }else{
//     console.log("Такого курсу немає")
// }
// let activeCourse = courses.filter(course => course.active === true);
// console.log(activeCourse);
//
//
// let titleCourse = courses.map(course => course.title);
// let priceCourse = courses.map(course => course.price * 0.9);
// console.log(titleCourse);
// console.log(priceCourse);

// let jsSearch = courses.filter(course => {course.description.includes('JS')})
// console.log(jsSearch);


// let books = [
//     {id:1, title:"HTML для початківців", author: "Олексадра Серйозна", years: 2026, available: true},
//     {id:2, title:"CSS для початківців", author: "Олексадра Весела", years: 2025, available: true},
//     {id:3, title:"JS для початківців", author: "Олексадра Зла", years: 2025, available: false},
//     {id:4, title:"JS + VUE для початківців", author: "Олексадра Відповідальна", years: 2023, available: true}
// ]
// let year = +prompt("Рік видання")
// let exsistingBooks = books.filter(book => book.years === year)
// console.log(exsistingBooks)
//
// let titleBooks = books.map(book => book.title)
// console.log(titleBooks)
//
// let search = books.filter(boo => book.title.includes("початківці"))
// console.log(search)

// let price = [500, 2000, 700]
// console.log(price.sort((a, b) => a-b)) //порядок зростання

// let books = [
//     {id:1, title:"HTML для початківців", author: "Олексадра Серйозна", years: 2026, available: true},
//     {id:2, title:"CSS для початківців", author: "Олексадра Весела", years: 2025, available: true},
//     {id:3, title:"JS для початківців", author: "Олексадра Зла", years: 2025, available: false},
//     {id:4, title:"JS + VUE для початківців", author: "Олексадра Відповідальна", years: 2023, available: true}
// ]
// // let lowerUpper =[...books].sort((a, b) => a.years - b.years)
// // console.log(lowerUpper)
//
// let exsistingBooks = books
//     .filter(book => book.available === true)
//     .sort((a, b) => a.years - b.years)
//     .map(book => `${book.title} - ${book.author}`)
// console.log(exsistingBooks)