function gameOfIntervals(input) {

    let gameMoves = Number(input[0]);

    let points = 0;
    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let g5 = 0;
    let g6 = 0;

    for (let index = 1; index <= gameMoves; index++) {

        let currentNum = Number(input[index]);

        if (currentNum >= 0 && currentNum <= 9) {
            points += currentNum * 0.20;
            g1++;
        } else if (currentNum >= 10 && currentNum <= 19) {
            points += currentNum * 0.30;
            g2++;
        } else if (currentNum >= 20 && currentNum <= 29) {
            points += currentNum * 0.40;
            g3++;
        } else if (currentNum >= 30 && currentNum <= 39) {
            points += 50;
            g4++;
        } else if (currentNum >= 40 && currentNum <= 50) {
            points += 100;
            g5++;
        } else if (currentNum < 0 || currentNum > 50) {
            points = points / 2;
            g6++;
        }

    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${((g1 / gameMoves) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((g2 / gameMoves) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((g3 / gameMoves) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((g4 / gameMoves) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((g5 / gameMoves) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((g6 / gameMoves) * 100).toFixed(2)}%`);

}
gameOfIntervals([
    10,     //•	Първи ред - колко хода ще има по време на играта 
    43,     //•	За всеки ход – числата, които се проверяват в кой интервал са 
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
])
