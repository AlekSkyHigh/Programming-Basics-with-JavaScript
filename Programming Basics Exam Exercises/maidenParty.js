function maidenParty(input) {

    let maidenPartyPrice = Number(input[0]);

    let numberLoveMessages = Number(input[1]);
    let numberWaxRoses = Number(input[2]);
    let numberKeyChains = Number(input[3]);
    let numberCartoons = Number(input[4]);
    let numberLuckySurp = Number(input[5]);

    let priceLoveMessegaes = numberLoveMessages * 0.60;
    let priceWaxRoses = numberWaxRoses * 7.20;
    let priceKeyChains = numberKeyChains * 3.60;
    let priceCartoons = numberCartoons * 18.20;
    let priceLucky = numberLuckySurp * 22;

    let totalSum = (priceLoveMessegaes + priceWaxRoses + priceKeyChains + priceCartoons + priceLucky) * 0.90

    let totalCountArticles = numberLoveMessages + numberWaxRoses + numberKeyChains + numberCartoons + numberLuckySurp

    if (totalCountArticles > 25) {
        totalSum = totalSum * 0.65
    }

    if (totalSum >= maidenPartyPrice) {
        console.log(`Yes! ${(totalSum - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - totalSum).toFixed(2)} lv needed.`);
    }


}
// maidenParty([
//     "40.8",
//     "20",
//     "25",
//     "30",
//     "50",
//     "10"
// ])

maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])

