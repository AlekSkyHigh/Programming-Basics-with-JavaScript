function reportSystem(input) {

    let targetSum = input[0];

    let index = 1;
    let command = input[index];

    let cashPaymentCount = 0;
    let cardPaymentCount = 0;

    let cashPayedSum = 0;
    let cardPayedSum = 0;

    let sumBuyedItems = 0;

    while (command !== "End") {

        let itemPrice = Number(command);

        if (index % 2 === 0) {          // при четен индекс, плащане с карта

            if (itemPrice >= 10) {
                console.log("Product sold!");
                cardPaymentCount++;
                cardPayedSum += itemPrice
                sumBuyedItems += itemPrice;
            } else {
                console.log("Error in transaction!");
            }

        } else {                        // при нечетен индекс, плащане в брой

            if (itemPrice <= 100) {
                console.log("Product sold!");
                cashPaymentCount++;
                cashPayedSum += itemPrice;
                sumBuyedItems += itemPrice;
            } else {
                console.log("Error in transaction!");
            }

        }

        if (sumBuyedItems >= targetSum) {
            console.log(`Average CS: ${(cashPayedSum / cashPaymentCount).toFixed(2)}`);
            console.log(`Average CC: ${(cardPayedSum / cardPaymentCount).toFixed(2)}`);
            return;
        }

        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log("Failed to collect required money for charity.");
        return;
    }

}
reportSystem([
    500,    // •	Сумата, която се очаква да бъде събрана от продажбите 
    120,    // На всеки следващ ред,    
    8,      // до получаване на командата "End"
    63,     // или докато не се съберат нужните средства:
    256,    // цените на предметите, които ще бъдат закупени
    78,
    317
])

// reportSystem([
//     600,
//     86,
//     150,
//     98,
//     227,
//     "End"
// ])
