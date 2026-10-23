//СПОСОБИ
// let heading = document.getElementsByTagName('p'); //масив
// let heading2 = document.getElementById('profile-name') //напряму до одного
// let profileName = document.getElementsByClassName('profile-role');//масив
// let heading3 = document.querySelector('.profile-role') //#  *  //напряму до одного
// let skills = document.querySelectorAll('.skill');//масив
// console.log(heading);
//------------------------------------------


let student = {
    name:"Vlada",
    role: "11IT",
    city: "Kyiv",
    portfolio: 'https://github.com'
}



let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector(".profile-city");
let portfolioElement = document.querySelector(".profile-link");

nameElement.textContent = student.name
// roleElement.textContent = student.role
cityElement.textContent = student.city
// roleElement.innerHTML = <strong>Text</strong>
// portfolioElement.textContent = student.portfolio
portfolioElement.setAttribute('href', student.portfolio);

let skillsArr = ["HTML", "CSS", "JS"]

let skills = document.querySelectorAll(".skill");
// for (let skill of skills){}
for(let i = 0; i <= skills.length; i++){
    skills[i].textContent = skillsArr[i]
}
// skills[0].textContent = "HTML"
// skills[1].textContent = "CSS"
// skills[2].textContent = "JS"