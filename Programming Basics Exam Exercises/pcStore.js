function pcStore(input) {

    let priceProccesor = Number(input[0]);
    let priceVideoCard = Number(input[1]);
    let priceRamStorage = Number(input[2]);
    let ramStorageCount = Number(input[3]);
    let percentDiscount = 1 - Number(input[4]);

    let priceProccesorLeva = priceProccesor * 1.57;
    let priceVideoCardLeva = priceVideoCard * 1.57;
    let priceRamStorageLeva = priceRamStorage * 1.57;
    
    let totalPriceRam = priceRamStorageLeva * ramStorageCount
    let priceProccesorAfterDsicount = priceProccesorLeva * percentDiscount
    let priceVideoCardAfterDiscount = priceVideoCardLeva * percentDiscount

    let totalCost = priceProccesorAfterDsicount + priceVideoCardAfterDiscount + totalPriceRam

    console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);

}
// pcStore([
//     "500",
//     "200",
//     "80",
//     "2",
//     "0.05"])

// pcStore(["1200",
// "850",
// "120",
// "4",
// "0.1"])

pcStore([
    "200",
    "100",
    "80",
    "1",
    "0.01"
])


