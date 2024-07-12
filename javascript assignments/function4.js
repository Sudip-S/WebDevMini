function convertToFahrenheit(celcius){
 return  Fahrenheit=(celcius*(9/5))+32;

}

let temp= convertToFahrenheit(20);
document.getElementById("hero").innerHTML= temp;