// Суми прости и непрости числа
// Напишете функция, която получава масив с цели  числа в диапазона от -2,147,483,648 до 2,147,483,647, докато не се получи команда "stop". Да се намери сумата на всички въведени прости и сумата на всички въведени непрости числа. Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости, ако на входа се подаде отрицателно число да се изведе следното съобщение "Number is negative.". В този случай въведено число се игнорира и не се прибавя към нито една от двете суми, а програмата продължава своето изпълнение, очаквайки въвеждане на следващо число. 
// На изхода да се отпечатат на два реда двете намерени суми в следния формат:
// "Sum of all prime numbers is: {prime numbers sum}"
// "Sum of all non prime numbers is: {nonprime numbers sum}"

function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }

        isPrime = true;

        for (let divider = 2; divider < currentNum; divider++) {

            if (currentNum % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            sumPrimeNumbers += currentNum;
        } else {
            sumNonPrimeNumbers += currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);

}
// sumPrimeNonPrime([
//     "3",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"
// ])

// sumPrimeNonPrime([
//     "30",
//     "83",
//     "33",
//     "-1",
//     "20",
//     "stop"
// ])

sumPrimeNonPrime([
    "0",
    "-9",
    "0",
    "stop"
])





