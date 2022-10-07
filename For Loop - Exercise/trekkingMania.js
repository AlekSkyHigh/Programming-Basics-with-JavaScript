function trekkingMania(input) {

    let groupsCount = Number(input[0]);

    let destination1 = 0;
    let destination2 = 0;
    let destination3 = 0;
    let destination4 = 0;
    let destination5 = 0;

    let peopleCount = 0;

    for (let i = 1; i < input.length; i++) {

        let currentIndex = Number(input[i])

        if (currentIndex <= 5) {
            destination1 += currentIndex;
        } else if (currentIndex <= 12) {
            destination2 += currentIndex;
        } else if (currentIndex <= 25) {
            destination3 += currentIndex;
        } else if (currentIndex <= 40) {
            destination4 += currentIndex;
        } else {
            destination5 += currentIndex;
        }
    }

    peopleCount = destination1 + destination2 + destination3 + destination4 + destination5
    
    console.log(`${(destination1 / peopleCount * 100).toFixed(2)}%`)
    console.log(`${(destination2 / peopleCount * 100).toFixed(2)}%`)
    console.log(`${(destination3 / peopleCount * 100).toFixed(2)}%`)
    console.log(`${(destination4 / peopleCount * 100).toFixed(2)}%`)
    console.log(`${(destination5 / peopleCount * 100).toFixed(2)}%`)

}
trekkingMania(["10",
    "10", // + 10 за Монбланд
    "5", // + 5 за Мусала
    "1", // + 1 за Мусала
    "100", // + 100 за Еверест
    "12", // + 12 за Монбланд
    "26", // + 26 за К2
    "17", // + 17 за Калиманджаро
    "37", // + 37 за к2
    "40", // + 40 за К2
    "78"]) // + 78 за Еверест

// trekkingMania(["5",
//     "25",
//     "41",
//     "31",
//     "250",
//     "6"])

