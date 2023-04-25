var weight, height, measure, bmi, error;

function calculate() {
    weight= document.getElementById("weight").value;
    height= document.getElementById("height").value;
    error= "Please enter some values";
    height /= 100;
    height *= height;
    bmi = weight / height;
    bmi = bmi.toFixed(1);
    if (bmi <= 18.4 ) {
        measure = "Your bmi is " + bmi + " and you are underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your bmi is " + bmi + " and you are normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your bmi is " + bmi + " and you are overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        measure = "Your bmi is " + bmi + " and you are obese";
    }
    if (weight === 0) {
        document.getElementById("results").innerHTML = error;
    } else if (height === 0) {
        document.getElementById("results").innerHTML = error;
    } else {
        document.getElementById("results").innerHTML = measure;
    }
    if (weight < 0){
        document.getElementById("results").innerHTML = "Negative weight is not possible";
    }
}