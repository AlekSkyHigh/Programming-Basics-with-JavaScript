function suitcasesLoad(input) {

    let capacity = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let totalLoad = 0;
    let suitcaseLoaded = 0;
    let suitcasesCounter = 0;

    while (command !== "End") {

        let loadingCase = Number(command);
        totalLoad += loadingCase;

        if (totalLoad > capacity) {
            console.log("No more space!");
            console.log(`Statistic: ${suitcaseLoaded} suitcases loaded.`);
            return;
        }

        suitcaseLoaded++;
        suitcasesCounter++;

        if (suitcasesCounter === 3) {

            totalLoad = totalLoad - loadingCase
            loadingCase = loadingCase * 1.10
            totalLoad = totalLoad + loadingCase
            suitcasesCounter = 0;
        }
        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${suitcaseLoaded} suitcases loaded.`);

}
// suitcasesLoad([
//     "550",
//     "100",
//     "252",
//     "72",
//     "End"
// ])

suitcasesLoad([
    "700.5",
    "180",
    "340.6",
    "126",
    "220"
])

// suitcasesLoad(["1200.2",
//     "260",
//     "380.5",
//     "125.6",
//     "305",
//     "End"])

