import capitalize from "./capitalize";

test('returns first character capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('returns first character capitalized', () => {
    expect(capitalize('hello there')).toBe('Hello there');
});