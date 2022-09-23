function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let ticketPrice = 0;
    let transportPrice = 0;

    switch (category) {
        case "VIP": ticketPrice = 499.99 * peopleCount; break
        case "Normal": ticketPrice = 249.99 * peopleCount; break
    }

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPrice = budget * 0.40;
    } else if (peopleCount >= 50) {
        transportPrice = budget * 0.25;
    }

    let budgetAfterTransport = budget - transportPrice;

    if (budgetAfterTransport >= ticketPrice) {
        console.log(`Yes! You have ${(budgetAfterTransport - ticketPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(ticketPrice - budgetAfterTransport).toFixed(2)} leva.`);
    }

}
matchTickets([
    1000,
    "Normal",
    1
])

// matchTickets([
//     30000,
//     "VIP",
//     49
// ])
