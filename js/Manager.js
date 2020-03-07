//Function for user submission
function submitData() {
    let weight = null;//document.getElementById("weight").value;
    let height = null;//document.getElementById("height").value;
    let age = null;//document.getElementById("age").value;
    let gender = null;
    let student = null;
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

//Function to calculate BMI of each row in a given table
function tableBMI(table) {
    for(let i = 1; i < table.length; i++) {
        let bmi = getBMI(table[i][1], table[i][2]);
        table[i][6] = bmi;
    }
    console.log("DONE");
}

let testGraph = [
    ["Student", "Weight", "Height", "Age", "Sex", "Daily Exercise", "BMI"],
    [1, 127, 68, 23, 0, 3],
    [1, 234, 60, 20, 1, 1],
    [1, 400, 72, 25, 0, 0],
    [0, 100, 65, 19, 1, 5],
    [0, 357, 77, 22, 0, 3]
];

let testGraph = JSON.stringify(testGraph);

tableBMI(testGraph);