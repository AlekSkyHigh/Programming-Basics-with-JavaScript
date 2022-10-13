function footballLeague(input) {

    let capacity = Number(input[0]);
    let fans = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let index = 2; index <= fans + 1; index++) {

        let currentFan = input[index];

        if (currentFan === "A") {
            sectorA++;
        } else if (currentFan === "B") {
            sectorB++;
        } else if (currentFan === "V") {
            sectorV++;
        } else if (currentFan === "G") {
            sectorG++;
        }

    }

    console.log(`${((sectorA / fans) * 100).toFixed(2)}%`);
    console.log(`${((sectorB / fans) * 100).toFixed(2)}%`);
    console.log(`${((sectorV / fans) * 100).toFixed(2)}%`);
    console.log(`${((sectorG / fans) * 100).toFixed(2)}%`);
    console.log(`${((fans / capacity) * 100).toFixed(2)}%`);

}
footballLeague([
    76,     //1.	Капацитетът на стадиона 
    10,     //2.	Броят на всички фенове 
    "A",    //За всеки един фен, на отделен ред се прочита: Секторът, на който се намира
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
])

// footballLeague([
//     93,
//     16,
//     "A",
//     "V",
//     "G",
//     "G",
//     "B",
//     "B",
//     "G",
//     "B",
//     "A",
//     "B",
//     "B",
//     "B",
//     "A",
//     "B",
//     "B",
//     "A"
// ])

// footballLeague([
//     1000,
//     12,
//     "A",
//     "A",
//     "V",
//     "V",
//     "A",
//     "G",
//     "A",
//     "A",
//     "V",
//     "G",
//     "V",
//     "A"
// ])
