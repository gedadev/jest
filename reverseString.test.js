import reverseString from "./reverseString";

test('takes a string and returns it reversed', () => {
    expect(reverseString('Hello')).toBe(('olleH'));
});