function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftarr = arr.slice(0, mid);
    let rightarr = arr.slice(mid);

    return merge(mergeSort(leftarr), mergeSort(rightarr));
}

module.exports = {
    mergeSort
};

function merge(leftarr, rightarr) {
    let newarr = [];
    let i = 0;
    let j = 0;

    while (i < leftarr.length && j < rightarr.length) {
        if (leftarr[i] < rightarr[j]) {
            newarr.push(leftarr[i++])
        }
        else {
            newarr.push(rightarr[j++])
        }
    }

    return [...newarr, ...leftarr.slice(i), ...rightarr.slice(j)];
}