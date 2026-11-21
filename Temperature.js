
function convertTemp() {

    let input = document.getElementById("temp").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let result;

    if (input === "") {
        document.getElementById("result").innerHTML =
            "Please enter temperature";
        return;
    }

    let temp = Number(input);

    if (from === to) {
        result = temp;
    }
    else if (from === "celsius" && to === "fahrenheit") {
        result = (temp * 9/5) + 32;
    }
    else if (from === "fahrenheit" && to === "celsius") {
        result = (temp - 32) * 5/9;
    }
    else if (from === "celsius" && to === "kelvin") {
        result = temp + 273.15;
    }
    else if (from === "kelvin" && to === "celsius") {
        result = temp - 273.15;
    }
    else if (from === "fahrenheit" && to === "kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    }
    else if (from === "kelvin" && to === "fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById("result").innerHTML =
        "Result: " + result.toFixed(2);
}
