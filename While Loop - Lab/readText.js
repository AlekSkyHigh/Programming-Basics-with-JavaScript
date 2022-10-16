function readText(input) {

    let index = 0;
    let currentText = input[index];

    while (currentText !== "Stop") {

        console.log(currentText);
        index++
        currentText = input[index];
        
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
