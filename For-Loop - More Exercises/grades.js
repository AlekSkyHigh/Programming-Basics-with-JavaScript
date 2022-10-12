function grades(input) {

    let students = Number(input[0]);

    let topStudents = 0;
    let between4And5Students = 0;
    let between3And4Students = 0;
    let failedStudents = 0;
    let gradesTotal = 0;

    for (index = 1; index <= students; index++) {

        let currentGrade = Number(input[index])
        gradesTotal += currentGrade;

        if (currentGrade >= 5) {
            topStudents++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            between4And5Students++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            between3And4Students++;
        } else if (currentGrade < 3) {
            failedStudents++;
        }

    }
    
    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4And5Students / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3And4Students / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((failedStudents / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(gradesTotal / students).toFixed(2)}`);

}
grades([
    10,     //•	На първия ред – броя на студентите явили се на изпит 
    3.00,   //•	За всеки един студент на отделен ред – оценката от изпита 
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
])

grades([
    6,
    2,
    3,
    4,
    5,
    6,
    2.2
])
