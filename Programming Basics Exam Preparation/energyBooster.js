function energyBooster(input) {

    let fruit = input[0];
    let set = input[1];
    let setsOrderd = Number(input[2]);

    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (set === "big") {
                price = 5 * 28.70
            } else {
                price = 2 * 56
            }
            break;
        case "Mango":
            if (set === "big") {
                price = 5 * 19.60
            } else {
                price = 2 * 36.66
            }
            break;
        case "Pineapple":
            if (set === "big") {
                price = 5 * 24.80
            } else {
                price = 2 * 42.10
            }
            break;
        case "Raspberry":
            if (set === "big") {
                price = 5 * 15.20
            } else {
                price = 2 * 20
            }
            break;

    }

    let priceForOrderedSets = price * setsOrderd
    let discount = 0;

    if (priceForOrderedSets >= 400 && priceForOrderedSets <= 1000) {
        discount = priceForOrderedSets * 0.15
    } else if (priceForOrderedSets > 1000) {
        discount = priceForOrderedSets * 0.50
    }

    let tottalPrice = ((priceForOrderedSets - discount).toFixed(2));
    console.log(`${tottalPrice} lv.`);

}
energyBooster([
    "Watermelon",
    "big",
    "4"
])

// energyBooster(["Pineapple",
//     "small",
//     "1"])

// energyBooster(["Raspberry",
// "small",
// "50"])

// energyBooster(["Mango",
// "big",
// "8"])
