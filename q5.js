function removeDuplicates(arr) {
    let unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));