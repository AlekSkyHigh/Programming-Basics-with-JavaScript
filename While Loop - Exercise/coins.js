function coins(input) {

    let change = Number(input[0]);
    let changeInCoins = Math.round(change * 100)
    let coins = 0;

    while (changeInCoins > 0) {

        if (changeInCoins >= 200) {
            coins++;
            changeInCoins -= 200;
        } else if (changeInCoins >= 100) {
            coins++;
            changeInCoins -= 100;
        } else if (changeInCoins >= 50) {
            coins++;
            changeInCoins -= 50;
        } else if (changeInCoins >= 20) {
            coins++;
            changeInCoins -= 20;
        } else if (changeInCoins >= 10) {
            coins++;
            changeInCoins -= 10;
        } else if (changeInCoins >= 5) {
            coins++;
            changeInCoins -= 5;
        } else if (changeInCoins >= 2) {
            coins++;
            changeInCoins -= 2;
        } else if (changeInCoins >= 1) {
            coins++;
            changeInCoins -= 1;
        }
    }
    console.log(coins);
    
}
// coins(["1.23"])
// coins(["2"])
// coins(["0.56"])
coins(["2.73"])
