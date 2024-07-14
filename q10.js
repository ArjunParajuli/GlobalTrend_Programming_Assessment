function toTitleCase(str) {
      return str.split(' ')
     .map(word => word[0].toUpperCase()+word.slice(1)) 
      .join(' '); 
  }
  
  const titleCased = toTitleCase("this is a title");
  console.log(titleCased);