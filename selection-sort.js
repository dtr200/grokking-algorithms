function selSort(list) {
    const copy = list.slice();

    for (let i = 0; i < copy.length; i++) {
        for (let k = 0; k < copy.length; k++) {
            if (copy[i] < copy[k])
                [copy[i], copy[k]] = [copy[k], copy[i]]
        }
    }

    return copy;
};

const nums = [1, 3, 0, 55, 9, 2, 1];
console.log(selSort(nums))