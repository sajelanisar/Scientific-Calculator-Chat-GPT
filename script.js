function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function appendNumber(num) {
    document.getElementById('display').value += num;
}
function appendOperator(op) {
    document.getElementById('display').value += op;
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
function toggleScientific() {
    document.querySelector('.scientific-buttons').classList.toggle('hidden');
}
function appendFunction(func) {
    let display = document.getElementById('display');
    if (func === 'pi') {
        display.value += Math.PI.toFixed(5);
    } else if (func === 'sqrt') {
        display.value = Math.sqrt(parseFloat(display.value)).toFixed(5);
    } else {
        display.value = Math[func](parseFloat(display.value)).toFixed(5);
    }
}