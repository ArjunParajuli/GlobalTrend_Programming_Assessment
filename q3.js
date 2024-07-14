function flatten(arr) {
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return acc.concat(flatten(curr)); 
      } else {
        return acc.concat(curr);
      }
    }, []);
  }
  
  const nestedArray = [1, [2, [3, 4]], 5, [6]];
  const flattenedArray = flatten(nestedArray);
  
  console.log(flattenedArray); 