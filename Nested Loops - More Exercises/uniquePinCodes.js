// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в определен интервал. За да бъде валиден един PIN код той трябва да отговаря на следните условия:
// Първата и третата цифра трябва да бъдат четни.
// Втората цифра трябва да бъде просто число в диапазона [2...7].

function uniquePinCodes(input) {

    let firstNumCeil = input[0];
    let secondNumCeil = input[1];
    let thirdNumCeil = input[2];

    let printLine = ``;

    for (let i = 1; i <= firstNumCeil; i++) {

        for (let y = 1; y <= secondNumCeil; y++) {

            for (let j = 1; j <= thirdNumCeil; j++) {

                if (i % 2 === 0 && j % 2 === 0 && y >= 2 && y <= 7 && y / y === 1 && y / 1 === y && (y === 2 || y === 3 || y === 5 || y === 7)) {

                    printLine += `${i} ${y} ${j}`
                    printLine += '\n';
                }

            }
        }
    }
    console.log(printLine);

}
uniquePinCodes([
    3,      //•	Горната граница на първото число 
    5,      //•	Горната граница на второто число
    5       //•	Горната граница на третото число
])

// uniquePinCodes([
//     8,
//     2,
//     8
// ])
