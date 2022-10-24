function streamOfLetters (input) {

    let index = 0;
    let command = input[index];
    index++;

    let word = "";
    let letter = "";

    while(command !== "End"){

        let current = String(command);
        
        if(current === "c" || current === "o" || current === "n") {

            

        } else if(current >= "A" && current <= "Z" || current >= "a" && current <= "z"){

            word += current;

        }


        command = input[index];
        index++;
    }



}
streamOfLetters([
    "H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
])
