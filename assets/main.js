function convertToFahrenheit() {
    let celsiusTemp = parseFloat(document.getElementById("input").value);
    let fahrenheit = (celsiusTemp * 9 / 5) + 32;
    document.getElementById("output").innerHTML = fahrenheit + "°F";
}

function convertToCelsius() {
    let fahrenheitTemp = parseFloat(document.getElementById("input").value);
    let celsius = (fahrenheitTemp - 32) * 5 / 9;
    document.getElementById("output").innerHTML = celsius.toFixed(2) + "°C";
}