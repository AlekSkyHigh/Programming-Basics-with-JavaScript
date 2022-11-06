function familyTrip(input) {

    let presentMoney = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentAdditionalExpenses = Number(input[3]);

    if (nights > 7) {
        pricePerNight = pricePerNight * 0.95;
    }

    let totalNightsCost = nights * pricePerNight;
    let sumAdditionalExpenses = (percentAdditionalExpenses * presentMoney) / 100
    let totalCost = totalNightsCost + sumAdditionalExpenses;

    if (presentMoney >= totalCost) {
        console.log(`Ivanovi will be left with ${(presentMoney - totalCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalCost - presentMoney).toFixed(2)} leva needed.`);
    }

}
// familyTrip([
//     "800.50",
//     "8",
//     "100",
//     "2"
// ])

familyTrip(["500",
    "7",
    "66",
    "15"])

