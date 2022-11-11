function hairSalon(input) {

    let dayTarget = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    price = 0;

    while (command !== "closed") {

        let service = command;
        let type = input[index];
        index++;

        if (command === "haircut") {

            switch (type) {
                case "mens": price += 15; break
                case "ladies": price += 20; break
                case "kids": price += 10; break
            }

        } else {

            switch (type) {
                case "touch up": price += 20; break
                case "full color": price += 30; break
            }

        }

        command = input[index];
        index++;

        if (price >= dayTarget) {
            break;
        }

    }

    if (price >= dayTarget) {
        console.log(`You have reached your target for the day!`);

    } else {
        console.log(`Target not reached! You need ${dayTarget - price}lv. more.`);

    }

    console.log(`Earned money: ${price}lv.`);

}
hairSalon([
    "300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"
])

// hairSalon(["50",
//     "color",
//     "full color",
//     "haircut",
//     "ladies"])

