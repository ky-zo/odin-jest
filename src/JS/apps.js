function capitalize(str) {
    return str.toUpperCase()
}

function reverseString(str) {
    return str.split('').reverse().join('')
}

function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2
        case 'sub':
            return num1 - num2
        case 'mult':
            return num1 * num2
        case 'div':
            return num1 / num2
        default:
            throw new Error('Invalid operation')
    }
}

function caesarCipher() {}

function analyzeArray() {}

export { caesarCipher, calculator, capitalize, reverseString, analyzeArray }
