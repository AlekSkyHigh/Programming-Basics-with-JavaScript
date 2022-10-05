function cleverLily(input) {

    let lilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let additionalMoney = 10;

    for (let currentAge = 1; currentAge <= lilyAge; currentAge++) {

        if (currentAge % 2 === 0) {
            savedMoney += additionalMoney;
            additionalMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++; // toysCounter += 1
        }
    }

    let totalMoneyFromToys = toysCounter * toyPrice;
    let totalSavedMoney = savedMoney - stolenMoney;
    let totalMoneyOwned = totalMoneyFromToys + totalSavedMoney;

    if (totalMoneyOwned >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoneyOwned - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoneyOwned).toFixed(2)}`)
    }

}
// cleverLily(["10", "170.00", "6"])
cleverLily(["21", "1570.98", "3"])


