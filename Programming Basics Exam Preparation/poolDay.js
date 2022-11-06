function poolDay(input) {

    let peopleCount = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let priceOneLounger = Number(input[2]);
    let priceOneUmbrella = Number(input[3]);

    let totalMoneyEntrance = peopleCount * taxEntrance;
    let totalMoneyForUmbrella = Math.ceil(peopleCount / 2) * priceOneUmbrella;
    let totalMoneyLounger = Math.ceil(peopleCount * 0.75) * priceOneLounger;

    let totalCost = (totalMoneyEntrance + totalMoneyForUmbrella + totalMoneyLounger).toFixed(2);
    console.log(`${totalCost} lv.`);

}
// poolDay([
//     "21",
//     "5.50",
//     "4.40",
//     "6.20"
// ])

// poolDay([
//     "50",
//     "6",
//     "8",
//     "4"
// ])

poolDay(["100",
    "8",
    "6",
    "4"])


