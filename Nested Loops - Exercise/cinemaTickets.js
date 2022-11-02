// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), за всички прожекции. 
// Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.

function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++

    let totalTicketSold = 0;
    let studentTicketsSold = 0;
    let standardTicketsSold = 0;
    let kidTicketsSold = 0;

    while (command !== "Finish") {

        let movieName = command;
        let freeSpots = Number(input[index]);
        index++;
        let ticketSold = 0;

        let tempCommand = input[index];
        index++;

        while (tempCommand !== "End") {

            let ticket = tempCommand;
            ticketSold++;

            switch (ticket) {
                case "standard": standardTicketsSold++; break;
                case "student": studentTicketsSold++; break;
                case "kid": kidTicketsSold++; break;
            }
            if (ticketSold === freeSpots) {
                break;
            }
            tempCommand = input[index];
            index++

        }
        totalTicketSold += ticketSold
        console.log(`${movieName} - ${(ticketSold / freeSpots * 100).toFixed(2)}% full.`);
        command = input[index];
        index++
    }
    console.log(`Total tickets: ${studentTicketsSold + standardTicketsSold + kidTicketsSold}`)
    console.log(`${(studentTicketsSold / totalTicketSold * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTicketsSold / totalTicketSold * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTicketsSold / totalTicketSold * 100).toFixed(2)}% kids tickets.`)
    
}
cinemaTickets([
    "Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"
])

// cinemaTickets(["The Matrix",
//     "20",
//     "student",
//     "standard",
//     "kid",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "The Green Mile",
//     "17",
//     "student",
//     "standard",
//     "standard",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "Amadeus",
//     "3",
//     "standard",
//     "standard",
//     "standard",
//     "Finish"])

//броят на студентските билети, разделен на общият брой продадени билети,
    //умножено по 100 = процент на стандартните билети
