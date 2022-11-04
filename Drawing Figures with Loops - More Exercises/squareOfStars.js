// Квадрат от звездички
// Напишете програма, която чете число n, въведено от потребителя, и чертае квадрат от n * n звездички. Разликата с предходната задача е, че между всеки две звездички има по един интервал.


function squareOfStars(input) {

    let n = Number(input[0]);

    let stringRectangle = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            stringRectangle += `* `
        }
        stringRectangle += '\n';
    }

    console.log(stringRectangle);

}
// squareOfStars([2])
// squareOfStars([3])
squareOfStars([4])
