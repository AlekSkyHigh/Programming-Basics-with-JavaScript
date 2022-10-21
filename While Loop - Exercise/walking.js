function walking(input) {

    let goal = 10000;
    let index = 0;
    command = input[index];
    index++;
    let progress = 0;

    while (command !== "Going home") {

        let stepsCounter = Number(command);
        progress += stepsCounter

        if (progress >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${progress - goal} steps over the goal!`);
            return;
        }
        command = (input[index]);
        index++;
    }

    if (command = "Going home") {
        let stepsGoingHome = Number(input[index]);
        progress += stepsGoingHome;

        if (progress >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${progress - goal} steps over the goal!`);
        } else {
            console.log(`${goal - progress} more steps to reach goal.`);
        }
    }
}

// walking([
//     "1000",
//     "1500",
//     "2000",
//     "6500"
// ])

walking([
    "1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
])


// walking([
//     "1500",
//     "3000",
//     "250",
//     "1548",
//     "2000",
//     "Going home",
//     "2000"
// ])

// walking([
//     "125",
//     "250",
//     "4000",
//     "30",
//     "2678",
//     "4682"
// ])

