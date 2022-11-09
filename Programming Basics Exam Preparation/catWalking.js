function catWalking(input) {

    let minutesWalk = Number(input[0]);
    let walksCount = Number(input[1]);
    let caloriesConsumed = Number(input[2]);

    let totalWalk = walksCount * minutesWalk;
    let totalCaloriesBurned = totalWalk * 5;
    let enoughBurning = caloriesConsumed * 0.50

    if (totalCaloriesBurned >= enoughBurning) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);
    }

}
// catWalking([
//     "30",
//     "3",
//     "600"
// ])

// catWalking(["15",
// "2",
// "500"])

catWalking(["40",
    "2",
    "300"])

