function minNumber(input) {

    let inputElement = input[0];
    let index = 1;
    let max = Number.MAX_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let currentInput = Number(inputElement);

        if (currentInput < max) {
            max = currentInput
        }
        inputElement = input[index];
        index++;
    }

    console.log(max);

}
// minNumber(["100", "99", "80", "70", "Stop"])
// minNumber(["-10", "20", "-30", "Stop"])
// minNumber(["45", "-20", "7", "99", "Stop"])
// minNumber(["999", "Stop"])
minNumber(["-1", "-2", "Stop"])
