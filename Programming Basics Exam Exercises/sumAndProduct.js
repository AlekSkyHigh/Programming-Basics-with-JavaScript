function sumAndProduct(input) {

    let n = Number(input[0]);

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c < 9; c++) {
                for (let d = 9; d >= c; d--) {

                    let sum = a + b + c + d;
                    let mult = a * b * c * d;

                    if (sum === mult && (n % 10 === 5)) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }

                    if (Math.floor(mult / sum) === 3 && (n % 3 === 0)) {
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }

                }
            }
        }
    }
    console.log(`Nothing found`);

}
sumAndProduct(["123"])
// sumAndProduct(["145"])
// sumAndProduct(["214"])
