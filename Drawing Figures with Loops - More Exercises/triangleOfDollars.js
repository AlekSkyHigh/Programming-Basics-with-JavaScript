// Да се напише програма, която чете число n, въведено от потребителя, и печата триъгълник от долари 

function triangleOfDollars(input) {

    let n = Number(input[0]);

    let printLine = "";

    for (let row = 1; row <= n; row++) {

        for (let col = 1; col <= row; col++) {

            printLine += "$ "

        }
        printLine += '\n'
    }
    console.log(printLine);

}
// triangleOfDollars([2])
// triangleOfDollars([3])
// triangleOfDollars([4])
triangleOfDollars([5])
