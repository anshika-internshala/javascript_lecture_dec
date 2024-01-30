const bodyElement = document.querySelector("body");

const navBar = document.createElement("nav");
const navLink = document.createElement("a");
navLink.setAttribute("href", "/");
navLink.textContent = "Home";

navBar.appendChild(navLink);
navBar.style.backgroundColor="pink";

bodyElement.appendChild(navBar);

console.log("nav link", navLink);



