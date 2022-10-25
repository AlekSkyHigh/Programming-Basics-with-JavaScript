function averageNumber(input) {

    let n = Number(input[0]);
    
    let sum = 0;

    for (let index = 1; index <= n; index++) {

        let currentNum = Number(input[index]);
        sum += currentNum
    }

    console.log((sum / n).toFixed(2));

}
averageNumber([
    4,  //брой цели числа 
    3,
    2,
    4,
    2,
])

averageNumber([
    2,
    6,
    4,
])

averageNumber([
    3,
    82,
    43,
    22
])

averageNumber([
    4,
    95,
    23,
    76,
    23
])
