// Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция,  която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.

function trainTheTrainers (input) {

    let juryCount = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let presentationCounter = 0;
    let allGradesSum = 0;

    while (command !== "Finish") {

        let presentationName = command;
        presentationCounter++;
        let temporarySumOfGrades = 0; 

        for(let i = 0; i < juryCount; i++) {

            let grade = Number(input[index])
            index++;
            temporarySumOfGrades += grade;

        }

        let temporaryAverageGrade = temporarySumOfGrades / juryCount;
        allGradesSum += temporaryAverageGrade;
        console.log(`${presentationName} - ${temporaryAverageGrade.toFixed(2)}.`);
        command = input[index];
        index++;

    }
    let aveGradeAllPresent = allGradesSum / presentationCounter
    console.log(`Student's final assessment is ${(aveGradeAllPresent).toFixed(2)}.`);

}
trainTheTrainers([
        "2",
        "While-Loop",
        "6.00",
        "5.50",
        "For-Loop",
        "5.84",
        "5.66",
        "Finish"
    ])
    
    // trainTheTrainers([
    //     "3",
    //     "Arrays",
    //     "4.53",
    //     "5.23",
    //     "5.00",
    //     "Lists",
    //     "5.83",
    //     "6.00",
    //     "5.42",
    //     "Finish"
    // ])
    
    // trainTheTrainers(["2",
    // "Objects and Classes",
    // "5.77",
    // "4.23",
    // "Dictionaries",
    // "4.62",
    // "5.02",
    // "RegEx",
    // "2.88",
    // "3.42",
    // "Finish"])
