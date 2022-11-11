function santasHoliday (input) {

    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];
    let nights = days - 1;
    let price = 0;

    switch(type){
        case "room for one person": 
            price = nights * 18;

        ;break

        case "apartment": 
            price = nights * 25;
                if(nights < 10){
                    price = price * 0.70;
                } else if(nights > 10 && nights <15) {
                    price = price * 0.65;
                } else if(nights > 15) {
                    price = price * 0.50;
                }
        ;break

        case "president apartment": 
            price = nights * 35;
            if(nights < 10){
                price = price * 0.90;
            } else if(nights > 10 && nights < 15) {
                price = price * 0.85;
            } else if(nights > 15) {
                price = price * 0.80;
            }

        ;break
    }

    if(review === "positive") {
        price = price * 1.25;
    } else if(review === "negative") {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));

}
santasHoliday([
    "14",
    "apartment",
    "positive"])
