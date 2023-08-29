export default function reverseString(str) {
    let reversed = [];
    for (let index = str.length - 1; index >= 0; index--) {
        reversed.push(str[index]);
    }
    return reversed.join('');
}
