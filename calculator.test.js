import calculator from "./calculator";

test('basic calculations', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.multiply(3, 2)).toBe(6);
});

test('divide by zero', () => {
    expect(calculator.divide(4, 0)).toBe('can\'t divide by zero');
});