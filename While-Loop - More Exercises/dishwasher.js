function dishwasher(input) {

    let detergentAmount = Number(input[0]) * 750
    let index = 1;
    let command = input[index];
    index++;

    let loadCounter = 0;
    let dishesWashed = 0;
    let potsWashed = 0;

    while (command !== "End") {

        loadCounter++;

        if (loadCounter === 3) {
            loadCounter = 0;
            let currentLoad = Number(command)
            potsWashed += currentLoad;
            let detergentNeeded = currentLoad * 15
            detergentAmount -= detergentNeeded;
        } else {
            let currentLoad = Number(command)
            dishesWashed += currentLoad;
            let detergentNeeded = currentLoad * 5;
            detergentAmount -= detergentNeeded;
        }

        if (detergentAmount <= 0) {
            console.log(`Not enough detergent, ${Math.abs(detergentAmount)} ml. more necessary!`);
            return;
        }

        command = input[index]
        index++

    }

    if (command === "End") {
        console.log(`Detergent was enough!`);
        console.log(`${dishesWashed} dishes and ${potsWashed} pots were washed.`)
        console.log(`Leftover detergent ${detergentAmount} ml.`);
    }

}
dishwasher([
    2,      //•	Брой бутилки от препарат, който ще бъде използван за миенето на чинии 
    53,     //• На всеки следващ ред,   
    65,     //  до получаване на командата "End"
    55,     //  или докато количеството препарат не се изчерпи, 
    "End"   //• брой съдове, които трябва да бъдат измити. 
])

// dishwasher([
//     1,
//     10,
//     15,
//     10,
//     12,
//     13,
//     30
// ])
