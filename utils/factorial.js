module.exports = {
    factorial
};

function factorial(arr) {
    let factorials = [];

    for(let i = 0; i < arr.length; ++i) {
        factorials[i] = numberFactorial(arr[i])
    }

    return factorials
}
function numberFactorial(n) {
    return (n != 1) ? n * numberFactorial(n -1) : 1
}