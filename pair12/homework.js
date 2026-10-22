courses = [
    {
        id:1,
        title: "HTML",
        category: "programing",
        price: 2500,
        duration: 20,
        rating: 4,
        available: true,
    },{
        id:2,
        title: "UI/UX design",
        category: "design",
        price: 2500,
        duration: 35,
        rating: 5,
        available: true,
    },{
        id:3,
        title: "English",
        category: "language",
        price: 5500,
        duration: 40,
        rating: 3,
        available: false,
    },{
        id:4,
        title: "photographer",
        category: "photo",
        price: 10000,
        duration: 40,
        rating: 5,
        available: true,
    },{
        id:5,
        title: "Python for beginners",
        category: "programing",
        price: 3000,
        duration: 15,
        rating: 3,
        available: false,
    },{
        id:6,
        title: "Cake baking",
        category: "cooking",
        price: 3500,
        duration: 15,
        rating: 4,
        available: false,
    },{
        id:7,
        title: "JS",
        category: "programing",
        price: 2500,
        duration: 20,
        rating: 4,
        available: true,
    },{
        id:8,
        title: "logistics",
        category: "business",
        price: 15000,
        duration: 48,
        rating: 5,
        available: true,
    }
]
//1
function searchId(id){
    let found = courses.find(course => course.id === id);
    if (found !== undefined){
     console.log(found)
    }else{
     console.log("Такого курсу немає")
    }
}
//2
function allCoursesCategory(category){
    let categoryCourse = courses.filter(course => course.category === category);
    console.log(categoryCourse);
}
//3
function coursesPriceUser(price){
    let coursePriceUser = courses.filter(course => course.price <= price);
    console.log(coursePriceUser);
}
//4
function searchCourse(title){
    let searchTitle = courses.find(course => course.title.includes(title));
    console.log(searchTitle);
}
//5
function newCoursesTitle(){
    let titleCourse = courses.map(course => course.title);
    console.log(titleCourse);
}
//6
function courseTitlePrise(){
    let priceCourse = courses.map(course => course.price * 0.85);
    console.log(`Назва: ${course.title}, Ціна: ${priceCourse}`);
}
//7
function upperPrice(){
    let upper =[...courses].sort((a, b) => a.price - b.price);
    console.log(upper);
}
//8
function lowerPrice(){
    let lower =[...courses].sort((b, a) => b.rating - a.rating);
    console.log(lower);
}
//9
function sortTitle() {
    let courseSortTitle = [...courses].sort((a, b) => a.title.localeCompare(b.title));
    console.log(courseSortTitle);
}

//10
function averagePriceCourses(){
    let total = 0;
    courses.forEach(function(course){
        total += course.price;
    })
    let average = total / courses.length;
    console.log(`загальна:${total} середня:${average}`)
}
function menu(){
    do{
        let choice = +prompt(`виберіть: 1 - Знайти курс за id\n
            2 Курси за категорією\n
            3 Курси за сумою\n
            4 Курси за назвою\n
            5 Лише назви курсів\n 
            6 Ціни курсів, де знижка 15%\n 
            7 Сортування за ціною (зростання)\n 
            8 Сортування за рейтингом (спадання)\n 
            9 Сортувати за назвою\n 
            10 Загальна та середня варість курсів\n 
            0 Вихід`);

        if (choice === 1) {
            let id = +prompt("Введіть id курсу (1-8):");
            console.log(searchId(id));
        } else if (choice === 2) {
            let category = prompt("Введіть категорію (programing, design, photo, cooking, business):");
            console.log(allCoursesCategory(category));
        } else if (choice === 3) {
            let price = +prompt("Введіть максимальну ціну:");
            console.log(coursesPriceUser(price));
        } else if (choice === 4) {
            let title = prompt("Введіть назву або її частину:");
            console.log(searchCourse(title));
        } else if (choice === 5) {
            console.log(newCoursesTitle());
        } else if (choice === 6) {
            console.log(courseTitlePrise());
        } else if (choice === 7) {
            console.log(upperPrice());
        } else if (choice === 8) {
            console.log(lowerPrice());
        } else if (choice === 9) {
            console.log(sortTitle());
        } else if (choice === 10) {
            console.log(averagePriceCourses());
        } else if (choice<0 || choice>8) {
            alert("Такого вибору немає");
        }else if (choice !== 0){
            break
        }

    }while (choice !== 0);
}
menu()