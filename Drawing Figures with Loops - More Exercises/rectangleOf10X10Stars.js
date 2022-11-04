// Правоъгълник от 10 x 10 звездички
// Напишете програма, която чертае на конзолата правоъгълник от 10 x 10 звездички.

function rectangleOf10X10Stars() {

    let stringRectangle = "";

    for (let i = 1; i <= 10; i++) {

        for (let j = 1; j <= 10; j++) {

            stringRectangle += `*`
        }
        stringRectangle += '\n';
    }
    console.log(stringRectangle);

}
rectangleOf10X10Stars()
