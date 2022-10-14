function equalPairs (input) {

    let pairs = Number(input[0]) * 2;

    let value = 0;
    
    let firstNum = 0;
    let secondNum = 0;
    let sum = 0;
    let sum1 = 0;

    let diff = 0;

    for(let index = 1; index <= pairs; index += 2){

        firstNum = Number(input[index])
        secondNum = Number(input[index+1])
        sum = firstNum + secondNum;
        sum1 += sum
        
    }
    
    if(sum > sum1){
        diff = sum - sum1
    }


    if(firstNum + secondNum === sum1){
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${diff}}`);
    }
    
    


}
// equalPairs([
//     3,
//     1,
//     2,
//     0,
//     3,
//     4,
//     -1
// ])

equalPairs([
    2,
    1,
    2,
    2,
    2
])

// equalPairs([
//     4,
//     1,
//     1,
//     3,
//     1,
//     2,
//     2,
//     0,
//     0
// ])

// equalPairs([
//     1,
//     5,
//     5
// ])

// equalPairs([
//     2,
//     -1,
//     0,
//     0,
//     -1,
// ])

// equalPairs([
//     2,
//     -1,
//     2,
//     0,
//     -1
// ])
