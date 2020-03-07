//Function for user submission
function submitData() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let genderButton = document.getElementById("gender");
    let gender = genderButton.options[genderButton.selectedIndex].value;
    let studentButton = document.getElementById("student");
    let student = studentButton.options[studentButton.selectedIndex].value;
    let bmi = getBMI(weight, height);
    document.getElementById("bmi").innerHTML = bmi.toString();
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

//Code snippet from https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
]);

var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
};

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}
