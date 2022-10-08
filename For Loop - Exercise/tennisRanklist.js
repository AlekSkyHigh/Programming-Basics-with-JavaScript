function tennisRanklist(input) {

    let tournamentsCount = Number(input[0]);
    let initialScore = Number(input[1]);

    let pointsWon = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {

        let position = input[i];

        switch (position) {
            case "W": pointsWon += 2000; wins++; break
            case "F": pointsWon += 1200; break
            case "SF": pointsWon += 720; break
        }
    }

    let finalPoints = initialScore + pointsWon
    let averagePointsWon = Math.floor(pointsWon / tournamentsCount)
    let percentWins = (wins / tournamentsCount) * 100

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePointsWon}`);
    console.log(`${percentWins.toFixed(2)}%`);

}
// tennisRanklist(["5",
//                 "1400",
//                 "F",
//                 "SF",
//                 "W",
//                 "W",
//                 "SF"])

// tennisRanklist(["4",
//                 "750",
//                 "SF",
//                 "W",
//                 "SF",
//                 "W"])

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

