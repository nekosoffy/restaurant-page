import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { storyPage } from "./story.js";

function select(target) {
    return document.querySelector(target);
}

function selectAll(target) {
    return document.querySelectorAll(target);
}

function create(name, parent, id, htmlClass, text) {
    const element = document.createElement(name);

    if (id !== undefined &&
        id !== "") {
        element.id = id;
    }

    if (htmlClass !== undefined &&
        htmlClass !== "") {
        element.classList.add(htmlClass);
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    parent.appendChild(element);
    
    return element;
}

function handleButtonClick(event) {
    const button = event.target;
    if (button.id === "home-button") {
        homePage();
    }
    if (button.id === "menu-button") {
        menuPage();
    }
    if (button.id === "about-button") {
        storyPage();
    }
}

homePage();

const nav = select("nav");
nav.addEventListener("click", handleButtonClick);

export { select, selectAll, create };