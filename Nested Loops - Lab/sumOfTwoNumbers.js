function sumOfTwoNumbers(input) {

    let begining = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isFound = false;
    let combinations = 0;

    for (let i = begining; i <= end; i++) {

        for (let y = begining; y <= end; y++) {

            let result = i + y;
            combinations++;

            if (result === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }

        }

        if (isFound) {
            break;
        }

    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }

}
// sumOfTwoNumbers(["1", "10", "5"])
// sumOfTwoNumbers(["88", "888", "1000"])
sumOfTwoNumbers(["23", "24", "20"])
// sumOfTwoNumbers(["88", "888", "2000"])


