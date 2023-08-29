export default function analyzeArray(array) {
    const average = calcAverage(array);
    const min = calcMin(array);
    const max = calcMax(array);
    const length = array.length;
    return {average, min, max, length};
}

function calcAverage(array) {
    return (array.reduce((total, current) => total + current)) / array.length;
}

function calcMin(array) {
    return array.reduce((min, current) => {
        if (current < min) {
            return current;
        } else {
            return min;
        }
    });
}

function calcMax(array) {
    return array.reduce((max, current) => {
        if (current > max) {
            return current;
        } else {
            return max;
        }
    });
}
