function agencyProfit(input) {

    let aviolineName = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);

    let childrenTicketPrice = adultTicketPrice * 0.30;

    let adultTicketPricePlusTax = adultTicketPrice + tax;

    let childrenTicketPricePlusTax = childrenTicketPrice + tax;

    let totalPriceAllTickets = (adultTickets * adultTicketPricePlusTax) + (childrenTickets * childrenTicketPricePlusTax);

    let profit = totalPriceAllTickets * 0.20;

    console.log(`The profit of your agency from ${aviolineName} tickets is ${profit.toFixed(2)} lv.`);

}
// agencyProfit([
//     "WizzAir",
//     "15",
//     "5",
//     "120",
//     "40"
// ])

agencyProfit([
    "Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"
])

