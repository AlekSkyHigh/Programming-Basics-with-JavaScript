//  Еднакви суми на четни и нечетни позиции
//  Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000. Винаги първото въведено число ще бъде по малко от второто. На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
//  •	сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 

function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = ``;

    for (let i = firstNum; i <= secondNum; i++) {

        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let y = 0; y < currentNum.length; y++) {

            let currentDigit = Number(currentNum.charAt(y));

            if (y % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (oddSum === evenSum) {
            printLine += `${i} `
        }

    }
    console.log(printLine);

}
equalSumsEvenOddPosition([
    "100000",
    "100050"
])

// equalSumsEvenOddPosition([
//     "123456",
//     "124000"
// ])

// equalSumsEvenOddPosition([
//     "299900",
//     "300000"
// ])

// equalSumsEvenOddPosition([
//     "100115",
//     "100120"
// ])

