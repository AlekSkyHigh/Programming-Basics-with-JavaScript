// Напишете програма, която да принтира на конзолата всички комбинации от 3 букви в зададен интервал, като се пропускат комбинациите съдържащи зададена от конзолата буква. 
// Накрая трябва да се изпринтира броят на отпечатаните комбинации.

function lettersCombination(input) {

    let first = input[0].charCodeAt(0);
    let second = input[1].charCodeAt(0);
    let skiped = input[2];

    let printLine = "";
    let count = 0;

    for (let i = first; i <= second; i++) {
        for (let y = first; y <= second; y++) {
            for (let j = first; j <= second; j++) {

                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(y);
                let thirdLetter = String.fromCharCode(j);

                if (firstLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {
                    count++;
                    printLine += (firstLetter + secondLetter + thirdLetter) + " ";
                }

            }
        }
    }
    console.log(printLine + count);

}
lettersCombination([
    "a",     //Ред 1. Малка буква от английската азбука за начало на интервала – от ‘a’ до ‚z’.
    "c",    //Ред 2. Малка буква от английската азбука за край на интервала  – от първата буква до ‚z’.
    "b"    //Ред 3.	Малка буква от английската азбука – от ‘a’ до ‚z’ – като комбинациите съдържащи тази буквата се пропускат.
])

// lettersCombination([
//     "f",
//     "k",
//     "h"
// ])

// lettersCombination([
//     "a",
//     "c",
//     "z"
// ])
