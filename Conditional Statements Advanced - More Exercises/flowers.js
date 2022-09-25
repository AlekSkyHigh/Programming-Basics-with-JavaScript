function flowers(input) {

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let price = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            price += chrysanthemums * 2;
            price += roses * 4.10;
            price += tulips * 2.50;
            break;
        case "Autumn":
        case "Winter":
            price += chrysanthemums * 3.75;
            price += roses * 4.50;
            price += tulips * 4.15;
            break;
    }

    if (isHoliday === "Y") {
        price = price * 1.15;
    }

    if (tulips > 7 && season === "Spring") {
        price = price * 0.95;
    } else if (roses >= 10 && season === "Winter") {
        price = price * 0.90;
    }

    if (chrysanthemums + roses + tulips > 20) {
        price = price * 0.80;
    }

    console.log((price + 2).toFixed(2));

}
flowers([
    2,          //броят на закупените хризантеми 
    4,          //броят на закупените рози
    8,          //броят на закупените лалета 
    "Spring",   //сезона
    "Y"         //дали денят е празник 
])

flowers([
    3,
    10,
    9,
    "Winter",
    "N"
])

flowers([
    10,
    10,
    10,
    "Autumn",
    "N"
])
