function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let classe = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        classe = "Economy class";

        if (season === "Summer") {
            carType = "Cabrio"
            price = budget * 0.35
        } else if (season === "Winter") {
            carType = "Jeep"
            price = budget * 0.65
        }

    } else if (budget <= 500) {
        classe = "Compact class"

        if (season === "Summer") {
            carType = "Cabrio"
            price = budget * 0.45
        } else if (season === "Winter") {
            carType = "Jeep"
            price = budget * 0.80
        }

    } else {
        classe = "Luxury class";
        carType = "Jeep";
        price = budget * 0.90;
    }

    console.log(`${classe}`);
    console.log(`${carType} - ${price.toFixed(2)}`);

}
carToGo([
    450,        //Бюджет 
    "Summer"    //Сезон
])

carToGo([
    450,
    "Winter"
])

carToGo([
    1010,
    "Summer"
])

carToGo([
    99.99,
    "Summer"
])

carToGo([
    1010,
    "Winter"
])

carToGo([
    70.50,
    "Winter"
])
