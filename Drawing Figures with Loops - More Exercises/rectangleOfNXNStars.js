// Правоъгълник от N x N звездички
// Напишете програма, която чете цяло положително число n, въведено от потребителя, и печата на конзолата правоъгълник от n * n звездички.

function rectangleOfNXNStars(input) {

    let n = Number(input[0]);

    let stringRectangle = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            stringRectangle += `*`
        }
        stringRectangle += '\n';
    }

    console.log(stringRectangle);

}
// rectangleOfNXNStars([2])
// rectangleOfNXNStars([3])
rectangleOfNXNStars([4])
