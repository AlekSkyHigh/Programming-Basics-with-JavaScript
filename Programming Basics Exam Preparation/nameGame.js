function nameGame(input) {

    let name = input[0];

    for (let index = 1; index < input.length; index++) {

        let command = input[index];

        if(command === "Stop") {
            break;
        }
        
        for(let subIndex = index; subIndex < name.length; subIndex++) {

            let num = Number(input[subIndex]);
            let char = String(name[subIndex - 1]);
            console.log(char);
        }
    }
}
nameGame([
    "Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"
])
