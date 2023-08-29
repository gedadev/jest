export default function capitalize(str) {
    let [a, ...rest] = str;
    // console.log(`${a.toUpperCase()}${rest.join('')}`);
    return `${a.toUpperCase()}${rest.join('')}`;
}