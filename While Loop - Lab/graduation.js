function graduation(input) {

    let name = input[0];
    let classe = 1;
    let index = 0;
    let sum = 0;
    let excluded = 0;

    while (classe <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade >= 4) {
            sum += grade;
            classe++;
        } else {
            excluded++;
            break;
        }
    }

    let averageGrade = sum / 12

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${classe} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

// graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
