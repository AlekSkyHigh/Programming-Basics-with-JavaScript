function fitnessCard(input) {

    let moneyOwned = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let cardPrice = 0;

    switch (sport) {
        case "Gym":
            if (gender === "m") {
                cardPrice = 42;
            } else {
                cardPrice = 35;
            }
            break;
        case "Boxing":
            if (gender === "m") {
                cardPrice = 41;
            } else {
                cardPrice = 37;
            }
            break;
        case "Yoga":
            if (gender === "m") {
                cardPrice = 45;
            } else {
                cardPrice = 42;
            }
            break;
        case "Zumba":
            if (gender === "m") {
                cardPrice = 34;
            } else {
                cardPrice = 31;
            }
            break;
        case "Dances":
            if (gender === "m") {
                cardPrice = 51;
            } else {
                cardPrice = 53;
            }
            break;
        case "Pilates":
            if (gender === "m") {
                cardPrice = 39;
            } else {
                cardPrice = 37;
            }
            break;

    }

    if (age <= 19) {
        cardPrice = cardPrice * 0.80;
    }

    if (moneyOwned >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - moneyOwned).toFixed(2)} more.`);
    }

}
fitnessCard([
    "50", // сумата с която разполагаме
    "m", // пола 
    "23", // възраст
    "Gym" // вид спорт
])

// fitnessCard([
//     "20",
//     "f",
//     "15",
//     "Yoga"
// ])

// fitnessCard(["10",
// "m",
// "50",
// "Pilates"])

