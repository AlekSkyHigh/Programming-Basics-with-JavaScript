function easterLunch(input) {

    let kozunaci = Number(input[0]);
    let eggs = Number(input[1]);
    let kgKurabii = Number(input[2]);

    let costOfKozunaci = kozunaci * 3.20;

    let costOfEggs = eggs * 4.35;

    let costOfKurabii = kgKurabii * 5.40;

    let costOfEggsPaint = eggs * 12 * 0.15;

    totalCost = (costOfKozunaci + costOfEggs + costOfKurabii + costOfEggsPaint).toFixed(2);

    console.log(totalCost);

}
// easterLunch(["3",
// "2",
// "3"])

// easterLunch(["4",
// "4",
// "3"])

easterLunch(["2",
    "3",
    "2"])

