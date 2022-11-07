function addBags(input) {

    priceLuggadgeAbove20kg = Number(input[0]); // цена на багаж = 30
    kilogramsOfTheLuggadge = Number(input[1]); // килограми на багажа на Мими = 18
    daysUntillFlight = Number(input[2]); // време то полета = 15 дни
    numberOfBags = Number(input[3]); // брой багажи = 2

    let mimisLuggagePrice = 0;
    let priceIncrease = 0;

    if (kilogramsOfTheLuggadge < 10) {
        mimisLuggagePrice = priceLuggadgeAbove20kg * 0.20

    } else if (kilogramsOfTheLuggadge <= 20) {
        mimisLuggagePrice = priceLuggadgeAbove20kg * 0.50

    } else if (kilogramsOfTheLuggadge > 20) {
        mimisLuggagePrice = priceLuggadgeAbove20kg

    }

    if (daysUntillFlight < 7) {
        priceIncrease = mimisLuggagePrice * 1.40;

    } else if (daysUntillFlight <= 30) {
        priceIncrease = mimisLuggagePrice * 1.15;

    } else if (daysUntillFlight > 30) {
        priceIncrease = mimisLuggagePrice * 1.10;
    }

    let totalPrice = priceIncrease * numberOfBags

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags([
    "30", // цена на багаж над 20кг;
    "18", // килограми на багажа на Мими;
    "15", // дни до пътуването;
    "2"   // брой багажи;
])

// addBags(["25.50",
// "5",
// "36",
// "6"])

// addBags(["63.80",
// "23",
// "3",
// "1"])
