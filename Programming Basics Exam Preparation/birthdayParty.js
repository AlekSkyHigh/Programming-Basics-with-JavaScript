function birthdayParty(input) {

    let rent = Number(input[0]);

    let cake = rent * 0.20;
    let drinks = (cake * 0.55).toFixed(1);
    let animator = 1 / 3 * rent;
    

    let moneyNeeded = rent + cake + drinks + animator

    console.log(moneyNeeded);

}
birthdayParty([2250])
// birthdayParty([3720])
