function convertTemperature() {

    let celsius = document.getElementById("celsius").value;
    let kelvin = document.getElementById("kelvin").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
  
    kelvin = parseFloat(celsius) + 273.15;
    fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    
    document.getElementById("kelvin").value = kelvin.toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }