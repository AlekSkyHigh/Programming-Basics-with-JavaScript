function oldBooks(input) {

    let index = 0;
    let searchedBook = input[index];
    index++;
    let command = input[index];
    index++;
    let booksCounter = 0;

    while (command !== "No More Books") {

        if (command === searchedBook) {
            console.log(`You checked ${booksCounter} books and found it.`);
            return;
        }
        booksCounter++;
        command = input[index];
        index++
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCounter} books.`);
}
// oldBooks(["Troy",
//     "Stronger",
//     "Life Style",
//     "Troy"])

// oldBooks(["The Spot",
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"])

oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])


