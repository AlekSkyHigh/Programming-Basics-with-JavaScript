function easterBakery(input) {

    let brashnoPricePerKg = input[0];
    let brashnoKilograms = input[1];
    let sugarKilograms = input[2];
    let eggSets = input[3];
    let packetgesMaia = input[4];

    let sugarPricePerKg = brashnoPricePerKg * 0.75;
    let eggsSet = brashnoPricePerKg * 1.10;
    let maiaPacket = sugarPricePerKg * 0.20;

    let sumForBrashno = brashnoKilograms * brashnoPricePerKg;
    let sumForSugar = sugarKilograms * sugarPricePerKg;
    let sumForEggs = eggSets * eggsSet;
    let sumForMaia = packetgesMaia * maiaPacket;

    let totalSum = (sumForBrashno + sumForSugar + sumForEggs + sumForMaia).toFixed(2);
    console.log(totalSum);
}
// easterBakery([
//     "50", // Цена на брашното за един килограм 
//     "10", // Килограми на брашното 
//     "3.5", // Килограми на захарта 
//     "6", // Брой кори с яйца 
//     "1" // Пакети мая  
// ])

easterBakery(["63.44",
    "3.57",
    "6.35",
    "8",
    "2"])
