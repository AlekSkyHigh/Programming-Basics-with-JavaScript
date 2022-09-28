function numberFrom1To10() {

    let index = 1;
    let command = index;
    index++;

    while (command <= 10) {

        let currentNumber = Number(command);
        command = index
        index++

        console.log(currentNumber);
    }

}
numberFrom1To10()
