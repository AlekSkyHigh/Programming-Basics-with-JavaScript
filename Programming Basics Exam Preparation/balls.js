function balls(input) {

    let ballsToTakeOut = Number(input[0])

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColorBalls = 0;
    let dividesFromBlackBalls = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== undefined) {    // || while(command <= ballsToTakeOut)??

        let color = command;

        switch (color) {
            case "red":
                redBalls++;
                totalPoints += 5;
                break;
            case "orange":
                orangeBalls++;
                totalPoints += 10;
                break;
            case "yellow":
                yellowBalls++;
                totalPoints += 15;
                break;
            case "white":
                whiteBalls++;
                totalPoints += 20;
                break;
            case "black":
                dividesFromBlackBalls++;
                totalPoints = Math.floor(totalPoints / 2)
                break
            default: otherColorBalls++; break;
        }

        command = input[index];
        index++;

    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorBalls}`);
    console.log(`Divides from black balls: ${dividesFromBlackBalls}`);
}
// balls([
//     "3",    // броят на топките, които ще извадим.
//     "white", 
//     "black",
//     "pink"
// ])

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])

