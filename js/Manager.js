//Function for user submission
function submitData() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let genderButton = document.getElementById("gender");
    let gender = genderButton.options[genderButton.selectedIndex].value;
    let studentButton = document.getElementById("student");
    let student = studentButton.options[studentButton.selectedIndex].value;
}

//Function for input sanitization TODO: Fix to actually make user re-input data
function inputSanitize(input) {
    let num = Number(input);
    if(!isNaN(num) && num > 0) {
        console.log("Here's the number: " + num);
        return num;
    }
    else {
        console.log("Throw an error; Make user re-input");
    }
}

//Function for BMI calculation (height and weight will already be sanitized as numbers)
function getBMI(weight, height) {
    return (weight * 703) / (height * height);
}

console.log(nationalData);