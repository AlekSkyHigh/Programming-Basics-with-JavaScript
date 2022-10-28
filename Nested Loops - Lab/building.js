function building(input) {

    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let floor = floorsCount; floor > 0; floor--) {

        let printLine = ``;

        for (let room = 0; room < roomsCount; room++) {

            if (floor === floorsCount) {
                printLine += `L${floor}${room} `

            } else if (floor % 2 === 0) {
                printLine += `O${floor}${room} `

            } else {
                printLine += `A${floor}${room} `
            }
        }
        console.log(printLine);
    }

}
building(["6", "4"])
// building(["9", "5"])
// building(["4", "4"])
