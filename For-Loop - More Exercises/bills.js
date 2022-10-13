function bills(input) {

    let months = Number(input[0]);

    let totalElectricityBill = 0;
    let totalWaterBill = 0;
    let totalInternetBill = 0;
    let otherExpenses = 0;

    for (let index = 1; index <= months; index++) {

        let currentBill = Number(input[index]);
        totalElectricityBill += currentBill

        totalWaterBill += 20;
        totalInternetBill += 15;

        otherExpenses += (currentBill + 20 + 15) * 1.20;

    }

    let avgExpensesMonthly = (totalElectricityBill + totalWaterBill + totalInternetBill + otherExpenses) / months

    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterBill.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetBill.toFixed(2)} lv`);
    console.log(`Other: ${otherExpenses.toFixed(2)} lv`);
    console.log(`Average: ${avgExpensesMonthly.toFixed(2)} lv`);

}
bills([
    5,      //•	Първи ред – месеците за които се търси средният разход 
    68.63,  //•	За всеки месец – сметката за ток 
    89.25,
    132.53,
    93.53,
    63.22
])

bills([
    8,
    123.54,
    231.54,
    140.23,
    100,
    122.4,
    430,
    178.52,
    64.2
])
