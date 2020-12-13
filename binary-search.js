function binarySearch(list, value) {
    let left = -1,
        right = list.length;
    while (right - left > 1) {
        const mid = Math.floor((right + left) / 2);
        if (list[mid] == value) return mid;
        if (list[mid] > value) right = mid;
        if (list[mid] < value) left = mid;
    }
    return -1;
};

const nums = [0, 1, 2, 3, 4, 5];
console.log(binarySearch(nums, 5));