function careOfPuppy(input) {

    let buyedFood = Number(input[0]);
    let buyedFoodInGrams = buyedFood * 1000

    let index = 1;
    let command = input[index];
    index++;

    let totalFoodEaten = 0;

    while (command !== "Adopted") {

        let eating = Number(command);
        totalFoodEaten += eating;

        command = input[index];
        index++;

    }

    if (buyedFoodInGrams >= totalFoodEaten) {
        console.log(`Food is enough! Leftovers: ${Math.abs(totalFoodEaten - buyedFoodInGrams)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(buyedFoodInGrams - totalFoodEaten)} grams more.`);
    }

}
// careOfPuppy([
//     "4",
//     "130",
//     "345",
//     "400",
//     "180",
//     "230",
//     "120",
//     "Adopted"
// ])

// careOfPuppy(["3",
// "1000",
// "1000",
// "1000",
// "Adopted"])

careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])


