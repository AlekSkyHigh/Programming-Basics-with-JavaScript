function mountainRun(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let meterInSeconds = Number(input[2]);

    let timeInSeconds = distanceInMeters * meterInSeconds;

    let slowingInSeconds = Math.floor(distanceInMeters / 50) * 30;

    let totalTime = timeInSeconds + slowingInSeconds

    let difference = Math.abs(recordInSeconds - totalTime).toFixed(2)

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${difference} seconds slower.`);
    }

}
// mountainRun([
//     "10164",
//     "1400",
//     "25"
// ])

// mountainRun(["5554.36",
// "1340",
// "3.23"])

mountainRun([
    "1377",
    "389",
    "3"])


