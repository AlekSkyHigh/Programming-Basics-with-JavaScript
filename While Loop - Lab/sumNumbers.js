function sumNumbers(input) {

    let targetSum = input[0];
    let sum = 0;
    let index = 1;

    while (sum < targetSum) {

        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index++
    }
    console.log(sum);

}
sumNumbers(["100", "10", "20", "30", "40"])
// sumNumbers(["20", "1", "2", "3", "4", "5", "6"])
