function highJump(input) {

    let finalTarget = Number(input[0]);
    let currentTarget = finalTarget - 30;
    let jumpsCounter = 0;
    let failedJumpsCounter = 0;
    let lastSuccsessful = 0;

    for (let i = 1; i < input.length; i++) {

        let currentJump = Number(input[i]);

        if (currentJump > currentTarget) {
            lastSuccsessful = currentTarget;
            currentTarget += 5;
            jumpsCounter++;
            failedJumpsCounter = 0;
        } else {
            failedJumpsCounter++;
            jumpsCounter++;
        }

        if (failedJumpsCounter === 3) {
            console.log(`Tihomir failed at ${currentTarget}cm after ${jumpsCounter} jumps.`);
            return;
        }

        if (currentJump > finalTarget) {
            console.log(`Tihomir succeeded, he jumped over ${finalTarget}cm after ${jumpsCounter} jumps.`);
        }

    }
}
highJump([
    "231", // finalTarget
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"
])

highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])
