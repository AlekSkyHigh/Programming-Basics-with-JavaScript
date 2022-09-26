function truckDriver(input) {

    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let salary = 0;

    switch (season) {
        case "Spring":
            if (kmPerMonth <= 5000) {
                salary = 0.75 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 10000) {
                salary = 0.95 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 20000) {
                salary = 1.45 * (kmPerMonth * 4)
            }
            break;

        case "Summer":
            if (kmPerMonth <= 5000) {
                salary = 0.90 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 10000) {
                salary = 1.10 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 20000) {
                salary = 1.45 * (kmPerMonth * 4)
            }
            break;
        case "Autumn":
            if (kmPerMonth <= 5000) {
                salary = 0.75 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 10000) {
                salary = 0.95 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 20000) {
                salary = 1.45 * (kmPerMonth * 4)
            }
            break;
        case "Winter":
            if (kmPerMonth <= 5000) {
                salary = 1.05 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 10000) {
                salary = 1.25 * (kmPerMonth * 4)
            } else if (kmPerMonth <= 20000) {
                salary = 1.45 * (kmPerMonth * 4)
            }
            break;
    }

    let salaryAfterTaxes = salary * 0.90

    console.log(salaryAfterTaxes.toFixed(2));

}
truckDriver([
    "Summer",
    3455        //Километри на месец
])

truckDriver([
    "Winter",
    4350
])

truckDriver([
    "Spring",
    1600
])

truckDriver([
    "Winter",
    5678
])

truckDriver([
    "Autumn",
    8600
])

truckDriver([
    "Winter",
    16042
])

truckDriver([
    "Spring",
    16942
])
