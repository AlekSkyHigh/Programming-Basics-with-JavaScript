function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let cash = Number(input[1]);
    let index = 2;
    let command = input[index];
    let spendingDays = 0;
    let days = 0;

    while (cash < moneyNeeded) {
        days++;
        index++;

        if (command === "spend") {
            spendingDays++

            if (spendingDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
                return;
            }
            let moneyToSpend = Number(input[index]);
            cash -= moneyToSpend;

            if (cash < 0) {
                cash = 0;
            }

        } else if (command === "save") {
            spendingDays = 0;
            let moneyToSave = Number(input[index]);
            cash += moneyToSave;
        }

        if (cash >= moneyNeeded) {
            console.log(`You saved the money for ${days} days.`);
            return;
        }
        index++;
        command = input[index];
    }

}
vacation(["2000", "1000",
    "spend", "1200", "save", "2000"])

// vacation([
//     "110",
//     "60",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10"])

// vacation(["250",
//     "150",
//     "spend",
//     "50",
//     "spend",
//     "50",
//     "save",
//     "100",
//     "save",
//     "100"])

