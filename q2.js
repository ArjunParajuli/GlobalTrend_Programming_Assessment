function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    let total = 0;
    let currentNumber = '';
    let currentSign = 1;
    for (let char of expression) {
        if (!isNaN(char)) {
            currentNumber += char;
        } else if (char === '+' || char === '-') {
            if (currentNumber !== '') {
                total += currentSign * parseInt(currentNumber);
                currentNumber = '';
            }
            currentSign = (char === '+') ? 1 : -1;
        }
    }
    if (currentNumber !== '') {
        total += currentSign * parseInt(currentNumber);
    }
    return total;
}

console.log(evaluateExpression("5 + 3 - 3")); 
console.log(evaluateExpression("3 + 5 + 7 - 1")); 
