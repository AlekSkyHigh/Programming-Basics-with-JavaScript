function foodForPets(input) {

    let days = Number(input[0]);
    let totalFoodAvailable = Number(input[1])
    let index = 2;

    let daysPassed = 1;
    let biscuitReward = 0;
    let totalFoodAten = 0;
    let eatenByDog = 0;
    let eatenByCat = 0;
    let daysForBisucit = 1;

    while (daysPassed <= days) {

        let dogAte = Number(input[index]);
        totalFoodAten += dogAte;
        eatenByDog += dogAte;
        index++;

        let catAte = Number(input[index]);
        totalFoodAten += catAte
        eatenByCat += catAte
        index++;

        if (daysForBisucit === 3) {
            biscuitReward += (dogAte + catAte) * 0.10
            daysForBisucit = 0;
        }
        daysForBisucit++;
        daysPassed++;

    }
    console.log(`Total eaten biscuits: ${Math.round(biscuitReward)}gr.`);
    console.log(`${(totalFoodAten / totalFoodAvailable * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eatenByDog / totalFoodAten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatenByCat / totalFoodAten * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets([
    "3",    // брой дни
    "1000", // Общо количество храна 
    "300",  // Количество изядена храна от кучето
    "20",   // Количество изядена храна от котката
    "100",  // Количество изядена храна от кучето
    "30",   // Количество изядена храна от котката
    "110",  // Количество изядена храна от кучето
    "40",   // Количество изядена храна от котката
])

// foodForPets([
//     "3",
// "500",
// "100",
// "30",
// "110",
// "25",
// "120",
// "35"
// ])
