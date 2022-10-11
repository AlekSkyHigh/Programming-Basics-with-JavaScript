function hospital(input) {

    let period = Number(input[0]);

    let doctors = 7;
    let patientsExamined = 0;
    let patientsUnexamined = 0;
    let day = 1;

    for (let index = 1; index <= period; index++) {

        if (day === 3) {

            if (patientsUnexamined > patientsExamined) {
                doctors++;
            }

            day = 0;
        }

        let dailyPatients = Number(input[index])

        if (dailyPatients <= doctors) {
            patientsExamined += dailyPatients;
        } else {
            patientsExamined += doctors;
            patientsUnexamined += dailyPatients - doctors;
        }

        day++;
    }
    console.log(`Treated patients: ${patientsExamined}.`);
    console.log(`Untreated patients: ${patientsUnexamined}.`);

}
hospital([
    4,      //•	На първия ред – периода, за който трябва да направите изчисления. 
    7,      //•	На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден.
    27,
    9,
    1
])

hospital([
    6,
    25,
    25,
    25,
    25,
    25,
    2
])

hospital([
    3,
    7,
    7,
    7,
])
