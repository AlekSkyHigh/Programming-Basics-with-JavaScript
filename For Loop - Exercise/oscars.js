function oscars(input) {

    let actor = input[0];
    let score = Number(input[1]);
    let judgesCount = Number(input[2]);

    for (let i = 3; i < input.length; i++) {

        if (i % 2 !== 0) {

            let judgeScore = i + 1;
            let totalScore = input[i].length * Number(input[judgeScore]) / 2;
            score += totalScore;
        }
        if (score > 1250.5) {
            break;
        }
    }

    if (score > 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${score.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - score).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
        "205",
        "4",
        "Johnny Depp",
        "45",
        "Will Smith",
        "29",
        "Jet Lee",
        "10",
        "Matthew Mcconaughey",
        "39"])

// oscars(["Sandra Bullock",
//     "340",
//     "5",
//     "Robert De Niro",
//     "50",
//     "Julia Roberts",
//     "40.5",
//     "Daniel Day-Lewis",
//     "39.4",
//     "Nicolas Cage",
//     "29.9",
//     "Stoyanka Mutafova",
//     "33"])
