function increamentButton() {
    const element = document.getElementById("increamentext");
    let value = element.innerHTML;

value++
console.log(value)
document.getElementById("increamentext").innerHTML = value
}

function refresh(){
    const element = document.getElementById("increamentext");
    let value = element.innerHTML;

value = 0
console.log(value)
document.getElementById("increamentext").innerHTML = value
}

function decreamentButton() {
    const element = document.getElementById("increamentext");
    let value = element.innerHTML;

value --
console.log(value)
document.getElementById("increamentext").innerHTML = value
}


