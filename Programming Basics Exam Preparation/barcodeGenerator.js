function barcodeGenerator(input) {

    let startNumber = input[0];
    let endNumber = input[1];

    let firstStartNumber = Number(startNumber[0]);
    let secondStartNumber = Number(startNumber[1]);
    let thirdStartNumber = Number(startNumber[2]);
    let fourthStartNumber = Number(startNumber[3]);

    let firstEndNumber = Number(endNumber[0]);
    let secondEndNumber = Number(endNumber[1]);
    let thirdEndNumber = Number(endNumber[2]);
    let fourthEndNumber = Number(endNumber[3]);

    let output = ``;

    for (let i = firstStartNumber; i <= firstEndNumber; i++) {
        for (let a = secondStartNumber; a <= secondEndNumber; a++) {
            for (let b = thirdStartNumber; b <= thirdEndNumber; b++) {
                for (let c = fourthStartNumber; c <= fourthEndNumber; c++) {

                    if (i % 2 !== 0 && a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {

                        output += `${i}${a}${b}${c} `;
                    }
                }
            }
        }
    }
    console.log(output);

}
barcodeGenerator([
    "2345",
    "6789"
])
