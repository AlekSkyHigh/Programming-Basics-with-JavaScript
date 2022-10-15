function oddOrEvenPosition(input) {

    let numbersCount = input[0];

    let evenSum = 0;
    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;

    let oddSum = 0;
    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;

    for (index = 1; index <= numbersCount; index++) {

        let currentIndex = index;
        let currentNum = input[index];

        if (currentIndex % 2 === 0) {
            evenSum += currentNum;

            if (currentNum < evenMin) {
                evenMin = currentNum
            }

            if (currentNum > evenMax) {
                evenMax = currentNum
            }


        } else {
            oddSum += currentNum;

            if (currentNum < oddMin) {
                oddMin = currentNum;
            }

            if (currentNum > oddMax) {
                oddMax = currentNum
            }

        }

    }
    console.log(`OddSum=${oddSum.toFixed(2)}`);
    console.log(`OddMin=${oddMin.toFixed(2)}`);
    console.log(`OddMax=${oddMax.toFixed(2)}`);

    console.log(`EvenSum=${evenSum.toFixed(2)}`);
    console.log(`EvenMin=${evenMin.toFixed(2)}`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);

}
// oddOrEvenPosition([
//     6, //броят на следващите числа
//     2, // index 1 = odd
//     3, // index 2 = even
//     5, // index 3 = odd
//     4, // index 4 = even 
//     2, // index 5 = odd
//     1  // index 6 = even
// ])

// oddOrEvenPosition([
//     2,
//     1.5,
//     -2.5
// ])

// oddOrEvenPosition([
//     5,
//     3,
//     -2,
//     8,
//     11,
//     -3
// ])

// oddOrEvenPosition([
//     4,
//     1.5,
//     1.75,
//     1.5,
//     1.75
// ])

// oddOrEvenPosition([
//     3,
//     -1,
//     -2,
//     -3
// ])

oddOrEvenPosition([
    1,
    1,
])
