let button = document.querySelectorAll(".items");
let input = document.getElementById("input");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let value=""

clear.addEventListener("click",()=>{
    input.setAttribute("value","");
    value=""
});
input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        equal.click();
    }
});
equal.addEventListener("click",()=>{
    console.log(value);
    input.setAttribute("value","");
    
});
button.forEach(element => {
    if(element.textContent!="C" && element.textContent!="=")
    element.addEventListener("click",()=>{
        value = value+element.textContent;
        input.setAttribute('value',value)
    });
});
