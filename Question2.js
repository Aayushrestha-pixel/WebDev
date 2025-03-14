function multiplicationTable(number) {
    console.log("Multiplication Table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Example usage
multiplicationTable(5);