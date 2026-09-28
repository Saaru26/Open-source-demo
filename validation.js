function validateInput(input) {
    if (input === "") {
        return "Input cannot be empty";
    }

    return "Input is valid";
}

console.log(validateInput(""));
