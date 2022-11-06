function coffeeMachine(input) {

    let drink = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);

    price = 0;

    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = 0.90;
                price = price * 0.65;
            } else if (sugar === "Normal") {
                price = 1;
            } else if (sugar === "Extra") {
                price = 1.20;
            }

            if (drinksCount >= 5) {
                price = price * 0.75;
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = 1;
                price = price * 0.65;
            } else if (sugar === "Normal") {
                price = 1.20;
            } else if (sugar === "Extra") {
                price = 1.60;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                price = 0.50;
                price = price * 0.65;
            } else if (sugar === "Normal") {
                price = 0.60;
            } else if (sugar === "Extra") {
                price = 0.70;
            }
            break;
    }

    let totalCost = price * drinksCount

    if (totalCost > 15) {
        totalCost = totalCost * 0.80;
    }
    
    console.log(`You bought ${drinksCount} cups of ${drink} for ${totalCost.toFixed(2)} lv.`);

}
coffeeMachine([
    "Espresso",
    "Without",
    "10"
])

// coffeeMachine(["Cappuccino",
// "Normal",
// "13"])

// coffeeMachine(["Tea",
// "Extra",
// "3"])

