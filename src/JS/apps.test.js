import { caesarCipher, calculator, capitalize, reverseString, analyzeArray } from './apps.js'

test('Small letter strings are capitalised', () => {
    expect(capitalize('abcdef')).toBe('ABCDEF')
})

test('Small letter strings with space are capitalised', () => {
    expect(capitalize('abcd ef')).toBe('ABCD EF')
})

test('string with letters is reversed', () => {
    expect(reverseString('abcd')).toBe('dcba')
})

test('calculator adding', () => {
    expect(calculator('add', 2, 5)).toBe(7)
})

test('calculator subtracting', () => {
    expect(calculator('sub', 3, 5)).toBe(-2)
})

test('calculator multiplying', () => {
    expect(calculator('mult', 4, 5)).toBe(20)
})

test('calculator dividing', () => {
    expect(calculator('div', 10, 5)).toBe(2)
})

// calculator

// caesarCipher

// analyzeArray
