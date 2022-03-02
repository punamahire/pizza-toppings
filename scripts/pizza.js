export const pizza = (pizzaObj) => {
    return `<article class="pizza-card">
                <ul>
                    <li class="pizza-details">Pizza: ${pizzaObj.name}</li>
                    <li class="pizza-details">Price:$${pizzaObj.cost}</li>
                    <li class="pizza-details">Crust: ${pizzaObj.crust}</li>
                    <li class="pizza-details">${pizzaObj.toppings.length} toppings including:${pizzaObj.toppings.join(", ")}</li>
                </ul>
            </article>`        
}

