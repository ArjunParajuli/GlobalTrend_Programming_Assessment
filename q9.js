function clearEven(arr){
    return arr.filter((elm) => (elm%2 !== 0) )
}

console.log(clearEven([1,2,3,4,5]))