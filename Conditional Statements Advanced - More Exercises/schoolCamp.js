function schoolCamp(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";

    switch (season) {
        case "Winter":

            if (groupType === "boys") {
                price = 9.60 * nights * studentsCount;
                sport = "Judo";
            } else if (groupType === "girls") {
                price = 9.60 * nights * studentsCount;
                sport = "Gymnastics";
            } else if (groupType === "mixed") {
                price = 10 * nights * studentsCount;
                sport = "Ski";
            }
            break;

        case "Spring":

            if (groupType === "boys") {
                price = 7.20 * nights * studentsCount;
                sport = "Tennis";
            } else if (groupType === "girls") {
                price = 7.20 * nights * studentsCount;
                sport = "Athletics";
            } else if (groupType === "mixed") {
                price = 9.50 * nights * studentsCount;
                sport = "Cycling";
            }
            break;

        case "Summer":

            if (groupType === "boys") {
                price = 15 * nights * studentsCount;
                sport = "Football";
            } else if (groupType === "girls") {
                price = 15 * nights * studentsCount;
                sport = "Volleyball";
            } else if (groupType === "mixed") {
                price = 20 * nights * studentsCount;
                sport = "Swimming";
            }
            break;
    }

    if (studentsCount >= 10 && studentsCount < 20) {
        price = price * 0.95;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        price = price * 0.85;
    } else if (studentsCount >= 50) {
        price = price * 0.50;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);

}
schoolCamp([
    "Spring",   //Сезон
    "girls",    //Видът на групата 
    20,         //Брой на учениците 
    7           //Брой на нощувките 
])

schoolCamp([
    "Winter",
    "mixed",
    9,
    15
])

schoolCamp([
    "Summer",
    "boys",
    60,
    7
])

schoolCamp([
    "Spring",
    "mixed",
    17,
    14
])
