function qsort(list) {
    if (list.length < 2) return list;

    const pivot = list[Math.floor(Math.random() * list.length)],
        less = list.filter(el => el < pivot),
        equal = list.filter(el => el === pivot),
        greater = list.filter(el => el > pivot);

    return [...qsort(less), ...equal, ...qsort(greater)];
}

const nums = [0, 2, 2, 1, 5, 3, 89];
console.log(qsort(nums));