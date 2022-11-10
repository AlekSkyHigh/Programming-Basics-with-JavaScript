function tournamentOfChristmas(input) {

    let daysOfTournament = Number(input[0]);

    let index = 1;
    let command = input[index]
    index++;

    let money = 0;

    let daysWon = 0;
    let daysLose = 0;

    let totalMoney = 0;


    for (let days = 1; days <= daysOfTournament; days++) {

        let moneyPerDay = 0;
        let win = 0;
        let lose = 0;

        while (command !== "Finish") {

            let sport = command;

            let result = String(input[index]);
            index++

            if (result === "win") {
                win++;
                money = 20;
                moneyPerDay += money;
            } else {
                lose++;
            }
            command = input[index];
            index++;
        }

        if (win > lose) {
            daysWon++;
            moneyPerDay = moneyPerDay * 1.10

        } else {
            daysLose++;
        }

        totalMoney += moneyPerDay;

        command = input[index];
        index++;
    }

    if (daysWon > daysLose) {
        totalMoney = totalMoney * 1.20
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}
// tournamentOfChristmas([
//     "2",    // броя дни на турнира
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"
// ])

tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])

