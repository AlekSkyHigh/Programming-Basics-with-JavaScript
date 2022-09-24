function bikeRace(input) {

    let youngRiders = Number(input[0]);
    let seniorRiders = Number(input[1]);
    let route = input[2];

    let tax = 0;

    switch (route) {
        case "trail":
            tax += youngRiders * 5.50;
            tax += seniorRiders * 7;
            break;
        case "cross-country":
            tax += youngRiders * 8;
            tax += seniorRiders * 9.50;
            break;
        case "downhill":
            tax += youngRiders * 12.25;
            tax += seniorRiders * 13.75;
            break;
        case "road":
            tax += youngRiders * 20;
            tax += seniorRiders * 21.50;
            break;

    }

    if (route === "cross-country" && youngRiders + seniorRiders >= 50) {
        tax = tax * 0.75
    }

    let sum = tax * 0.95

    console.log(sum.toFixed(2));

}
bikeRace([
    10,     //броят младши велосипедисти.
    20,     //броят старши велосипедисти
    "trail" //вид трасе 
])

bikeRace([
    21,
    26,
    "cross-country"
])

bikeRace([
    30,
    25,
    "cross-country"
])

bikeRace([
    10,
    10,
    "downhill"
])

bikeRace([
    3,
    40,
    "road"
])
