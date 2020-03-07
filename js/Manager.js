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

//Build list of nationalData for men and for women
let maleNationalData = [];
let femaleNationalData = [];
for(let i = 0; i < nationalData.length; i++) {
    if(nationalData[i]["Sex"] === "Men") {
        maleNationalData.push([nationalData[i]["Year"],nationalData[i]["Mean BMI (urban)"]]);
    }
    else {
        femaleNationalData.push([nationalData[i]["Year"],nationalData[i]["Mean BMI (urban)"]]);
    }
}
var nationalGraphData = [['Year', 'Average BMI (Male)', 'Average BMI (Female)']];
for(let i = 1; i < maleNationalData.length + 1; i++) {
    nationalGraphData.push([]);
    nationalGraphData[i][0] = maleNationalData[i - 1][0].toString();
    nationalGraphData[i][1] = maleNationalData[i - 1][1];
    nationalGraphData[i][2] = femaleNationalData[i - 1][1];
}
//Code snippet from https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable(nationalGraphData);

var options = {
    title: 'National Body Mass Index (BMI) of Male and Female',
    curveType: 'function',
    legend: { position: 'bottom' }
};

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}
