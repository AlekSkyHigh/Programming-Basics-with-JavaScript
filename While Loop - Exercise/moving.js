function moving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let totalSpace = w * l * h;
    let occupiedSpace = 0;

    index = 3;
    let command = input[index]
    index++

    while (command !== "Done") {

        let boxes = Number(command);
        occupiedSpace = occupiedSpace + boxes;

        if (occupiedSpace > totalSpace) {
            console.log(`No more free space! You need ${occupiedSpace - totalSpace} Cubic meters more.`);
            return;
        }
        command = input[index];
        index++
    }

    if (command === "Done") {
        console.log(`${totalSpace - occupiedSpace} Cubic meters left.`);
        return;
    }

}
// moving([
//     "10",
//     "10",
//     "2",
//     "20",
//     "20",
//     "20",
//     "20",
//     "122"])

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

