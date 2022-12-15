let button = document.querySelectorAll(".items");
let input = document.getElementById("input");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let value = ""


clear.addEventListener("click", () => {
    input.setAttribute("value", "");
    value = ""
});
equal.addEventListener("click", () => {
    if (value == "") return
    let result = "";
    try {
        result = math.evaluate(value);
    } catch (e) {
        alert("Invalid Format");
    }
    if (result == "Infinity") { result = ""; alert("Division Error") }
    input.setAttribute("value", result);
    value = result

});
button.forEach(element => {
    if (element.textContent != "C" && element.textContent != "=")
        element.addEventListener("click", () => {
            value = value + element.textContent;
            input.setAttribute('value', value)
        });
});

