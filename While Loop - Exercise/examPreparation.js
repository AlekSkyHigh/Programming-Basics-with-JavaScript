function examPreparation(input) {

    let index = 0;
    let unsatisfactoryGradesLimit = Number(input[index]);
    index++;

    let examName = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let gradesCount = 0;
    let examsCount = 0;
    let unsatisfactoryGradesPcs = 0;
    let lastExam = "";

    while (examName !== "Enough") {

        if (grade <= 4) {
            unsatisfactoryGradesPcs++;

            if (unsatisfactoryGradesPcs >= unsatisfactoryGradesLimit) {
                console.log(`You need a break, ${unsatisfactoryGradesPcs} poor grades.`);
                return;
            }
        }
        examsCount++;
        gradesCount += grade;
        lastExam = examName;
        examName = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }
    let averageGrade = gradesCount / examsCount;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${examsCount}`);
    console.log(`Last problem: ${lastExam}`);
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

// examPreparation(["2",
//     "Income",
//     "3",
//     "Game Info",
//     "6",
//     "Best Player",
//     "4"])






