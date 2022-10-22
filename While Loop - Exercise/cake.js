function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let sizeCake = width * length;

    index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {

        let cakeParts = Number(command);
        sizeCake -= cakeParts;

        if (sizeCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`);
            return;
        }
        command = input[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${sizeCake} pieces are left.`);
        return;
    }
}
// cake(["10",
// "10",
// "20",
// "20",
// "20",
// "20",
// "21"])

cake(["10",
    "2",
    "22",
    "4",
    "6",
    "STOP"])

