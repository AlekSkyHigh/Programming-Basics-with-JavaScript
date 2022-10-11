function logistics(input) {

    let loadsToTransport = Number(input[0]);

    let loadsTonage = 0
    let busLoad = 0;
    let truckLoad = 0;
    let trainLoad = 0;

    for (let index = 1; index <= loadsToTransport; index++) {

        let cargoTonage = Number(input[index]);
        loadsTonage += cargoTonage;

        if (cargoTonage <= 3) {
            busLoad += cargoTonage;

        } else if (cargoTonage <= 11) {
            truckLoad += cargoTonage;

        } else if (cargoTonage >= 12) {
            trainLoad += cargoTonage;
        }

    }

    let averagePerTon = (busLoad * 200 + truckLoad * 175 + trainLoad * 120) / loadsTonage
    console.log(averagePerTon.toFixed(2));

    let avgBus = (busLoad / loadsTonage) * 100;
    console.log(`${avgBus.toFixed(2)}%`);

    let avgTruck = (truckLoad / loadsTonage) * 100;
    console.log(`${avgTruck.toFixed(2)}%`);

    let avgTrain = (trainLoad / loadsTonage) * 100;
    console.log(`${avgTrain.toFixed(2)}%`);

}
logistics([
    4,
    1, // тонажа на товара
    5,
    16,
    3
])

// logistics([
//     5,
//     2,
//     10,
//     20,
//     1,
//     7
// ]);
