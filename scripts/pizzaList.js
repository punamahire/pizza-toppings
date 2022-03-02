import { getPizza } from "./pizzaData.js";
import { pizza } from "./pizza.js";

export const listofPizzas = () => {
    const contentElement = document.querySelector(".pizzaGoesHere");
    const za = getPizza()

    let locationHTMLrepresentation = "";

    za.forEach(element => {
        locationHTMLrepresentation += pizza(element)
    })

    contentElement.innerHTML += `${locationHTMLrepresentation}`
}

export const listArtichokePizza = () => {
    const contentElement = document.querySelector(".artichokePizza");
    const za = getPizza()

    let locationHTMLrepresentation = "";

    za.forEach(element => {
        if (element.name === "Bacon Artichoke") {
            locationHTMLrepresentation += pizza(element)
        }
    })

    contentElement.innerHTML += `${locationHTMLrepresentation}`
}
