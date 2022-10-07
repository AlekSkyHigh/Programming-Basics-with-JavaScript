function salary(input) {

    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    let fines = 0;

    for (let i = 2; i < input.length; i++) {

        let currentTab = input[i];

        if (currentTab === "Facebook") {
            fines += 150;
        } else if (currentTab === "Instagram") {
            fines += 100;
        } else if (currentTab === "Reddit") {
            fines += 50;
        }
    }

    let salaryAfterFines = (salary - fines);

    if (salaryAfterFines <= 0) {
        console.log(`You have lost your salary.`)
    } else {
        console.log(salaryAfterFines)
    }
}
salary(["10",  // брой табове
    "750", // заплата
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])

// salary(["3",
// "500",
// "Github.com",
// "Stackoverflow.com",
// "softuni.bg"])

// salary(["3",
//     "500",
//     "Facebook",
//     "Stackoverflow.com",
//     "softuni.bg"])
