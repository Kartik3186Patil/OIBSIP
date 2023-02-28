


// Logic for temperature converter
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    if (inputValue == "") {
        alert("Please Enter any Number....")
        location.reload()
    }
    else if (type1.value == "celcius" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
   
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Celcius = Number.parseInt(inputValue) *1
        result.innerHTML = Celcius.toFixed(3) + ` f`
    }
    else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let fahrenheit= Number.parseInt(inputValue) *(9/5) +32
        result.innerHTML = fahrenheit.toFixed(3) + `f`
    }
   
}
