function getInputs() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    return [num1, num2];
}
function getInputs() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    return [num1, num2];
}

function add() {
    const [num1, num2] = getInputs();
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const [num1, num2] = getInputs();
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const [num1, num2] = getInputs();
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const [num1, num2] = getInputs();
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult("Error: Division by zero");
    }
}
function displayResult(result) {
    document.getElementById("result").textContent = result;
}

function clearData() {
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("result").innerText = '';
}
