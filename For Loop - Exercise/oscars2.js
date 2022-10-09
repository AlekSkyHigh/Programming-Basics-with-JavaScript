function oscars2 (input) {

    let actor = input[0];
    let score = Number(input[1]);
    let judgesCount = Number(input[2]);

    let totalScore = score;

    for(let i = 3; i < input.length; i += 2) {

        let judgeName = input[i];
        let judgeScore = Number(input[i + 1]);

        let totalScoreFromJudge = judgeName.length * judgeScore / 2; 
        totalScore += totalScoreFromJudge; 

        if(totalScore > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
            return;
        } 
    }

    console.log(`Sorry, ${actor} you need ${(1250.5 - totalScore).toFixed(1)} more!`);
}
oscars2(["Zahari Baharov",
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
