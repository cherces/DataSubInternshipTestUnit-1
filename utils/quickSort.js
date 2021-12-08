function quickSort(arr, left, right) {
    let l = left;
    let r = right;
    let mid = arr[Math.floor((l + r) / 2)];

    while(l < r) {
        while(arr[l] < mid) {
            ++l;
        }
        while(arr[r] > mid) {
            --r;
        }
        if (l <= r) {
            let lNum = arr[l];

            arr[l] = arr[r];
            arr[r] = lNum;
            
            ++l;
            --r;
        }
    }
    if (left < r) {
        quickSort(arr, left, r)
    }
    if (right > l) {
        quickSort(arr, l, right)
    }
    return arr;
};

module.exports = {
    quickSort
};