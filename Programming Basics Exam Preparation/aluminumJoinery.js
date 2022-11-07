function aluminumJoinery(input) {

    let numberOfWindows = Number(input[0]);
    let typeOfWindows = input[1];
    let delivery = input[2];
    let price = 0;

    switch (typeOfWindows) {
        case "90X130":
            price = numberOfWindows * 110;

            if (numberOfWindows > 30 && numberOfWindows <= 60) {
                price = price * 0.95;
            } else if (numberOfWindows > 60) {
                price = price * 0.92;
            }
            break;

        case "100X150":
            price = numberOfWindows * 140;

            if (numberOfWindows > 40 && numberOfWindows <= 80) {
                price = price * 0.94;
            } else if (numberOfWindows > 80) {
                price = price * 0.90;
            }
            break;

        case "130X180":
            price = numberOfWindows * 190;

            if (numberOfWindows > 20 && numberOfWindows <= 50) {
                price = price * 0.93;
            } else if (numberOfWindows > 50) {
                price = price * 0.88;
            }
            break;

        case "200X300":
            price = numberOfWindows * 250;

            if (numberOfWindows > 25 && numberOfWindows <= 50) {
                price = price * 0.91;
            } else if (numberOfWindows > 50) {
                price = price * 0.86;
            }
            break;

    }

    if (delivery === "With delivery") {
        price = price + 60
    } else {
        delivery === 0;
    }

    if (numberOfWindows < 10) {
        console.log("Invalid order");
        return;
    } else if (numberOfWindows > 99) {
        price = price * 0.96
    }

    console.log(`${price.toFixed(2)} BGN`)

}
aluminumJoinery([
    "40",
    "90X130",
    "Without delivery"
])

// aluminumJoinery(["105",
// "100X150",
// "With delivery"])

// aluminumJoinery(["2",
//     "130X180",
//     "With delivery"])

