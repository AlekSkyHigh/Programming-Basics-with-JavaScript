function changeBureau(input) {

    let bitcoins = Number(input[0]);
    let yuans = Number(input[1]);
    let comission = Number(input[2]);

    let bitcoinPrice = 1168;

    let dollar = 1.76;
    let yuanPrice = dollar * 0.15;

    let bitcoinInLevaOwned = bitcoins * bitcoinPrice;
    let yuanInLevaOwned = yuans * yuanPrice

    let levaOwned = bitcoinInLevaOwned + yuanInLevaOwned;

    let eurosOwned = levaOwned / 1.95

    let commisionExchange = (eurosOwned * comission) / 100

    let eurosOwnedAfterCommision = (eurosOwned - commisionExchange).toFixed(2);

    console.log(eurosOwnedAfterCommision);

}
changeBureau([
    "1",
    "5",
    "5"
])

// changeBureau(["20",
// "5678",
// "2.4"])

// changeBureau(["7",
// "50200.12",
// "3"])
