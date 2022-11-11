function exam(input) {

    let numbersCount = Number(input[0]);

    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;

    let totalResult = 0;

    for (let index = 1; index <= numbersCount; index++) {

        let currentResult = Number(input[index])

        if (currentResult < 3) {
            g1 += 1;
            totalResult += currentResult
        } else if (currentResult >= 3 && currentResult <= 3.99) {
            g2 += 1;
            totalResult += currentResult
        } else if (currentResult >= 4 && currentResult <= 4.99) {
            g3 += 1;
            totalResult += currentResult
        } else if (currentResult >= 5) {
            g4 += 1;
            totalResult += currentResult
        }

    }

    console.log(`Top students: ${(g4 / numbersCount * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(g3 / numbersCount * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(g2 / numbersCount * 100).toFixed(2)}%`)
    console.log(`Fail: ${(g1 / numbersCount * 100).toFixed(2)}%`)
    console.log(`Average: ${(totalResult / numbersCount).toFixed(2)}`);
}
exam([
    "10", //броя на студентите
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
])
