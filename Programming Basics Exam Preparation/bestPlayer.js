function bestPlayer(input) {

    let name = input[0];
    let mostGoals = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    while (command !== "END") {

        let newName = command;
        let goals = Number(input[index]);
        index++;

        if (goals > mostGoals) {
            name = newName
            mostGoals = Number(goals)
        }

        if (mostGoals >= 10) {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
            return;
        }

        command = input[index]
        index++;
    }

    console.log(`${name} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }

}
// bestPlayer([
//     "Neymar",
//     "2",
//     "Ronaldo",
//     "1",
//     "Messi",
//     "3",
//     "END"
// ])

// bestPlayer(["Silva",
//     "5",
//     "Harry Kane",
//     "10"])

// bestPlayer(["Rooney",
// "1",
// "Junior",
// "2",
// "Paolinio",
// "2",
// "END"])

// bestPlayer(["Petrov",
// "2",
// "Drogba",
// "11"])

bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"])

