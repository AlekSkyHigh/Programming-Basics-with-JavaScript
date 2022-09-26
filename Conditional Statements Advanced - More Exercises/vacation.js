function vacation (input) {

    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = "";
    let accomodation = "";

    if (budget <= 1000) {
        accomodation = "Camp"

        if (season === "Summer") {
            destination = "Alaska";
            price = budget * 0.65;

        } else if (season === "Winter") {
            destination = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget <= 3000) {
        accomodation = "Hut";
        
        if (season === "Summer") {
            destination = "Alaska";
            price = budget * 0.80;

        } else if (season === "Winter") {
            destination = "Morocco";
            price = budget * 0.60;
        }
    } else if (budget > 3000) {
        accomodation = "Hotel"

        if (season === "Summer") {
            destination = "Alaska";
            price = budget * 0.90;

        } else if (season === "Winter") {
            destination = "Morocco";
            price = budget * 0.90;
        }
        
    }

    console.log(`${destination} - ${accomodation} - ${price.toFixed(2)}`);

}
vacation([
    800,
    "Summer"
])

vacation([
    799.50,
    "Winter"
])

vacation([
    3460,
    "Summer"
])

vacation([
    1100,
    "Summer"
])

vacation([
    5000,
    "Winter"
])

vacation([
    2543.99,
    "Winter"
])
