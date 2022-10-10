function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let yearInPast = Number(input[1]);

    let expenses = 0;
    let yearsOld = 18;

    for (let year = 1800; year <= yearInPast; year++) {

        if (year % 2 === 0) {
            expenses += 12000;
        } else {
            expenses += 12000 + 50 * yearsOld
        }

        yearsOld++;

    }

    if (expenses <= inheritedMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - expenses).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(expenses - inheritedMoney).toFixed(2)} dollars to survive.`);
    }

}
// backToThePast([
//     50000,  //•	Наследените пари
//     1802    //•	Годината, до която трябва да живее (включително)
// ])

backToThePast([
    100000.15,
    1808,
])
