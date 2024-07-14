function capitalizeWords(str) {
     return str.split(' ')
     .map(word => word[0].toUpperCase()+word.slice(1)) 
      .join(' '); 
  }
  
  const result = capitalizeWords("i am capiatlized");
  console.log(result); 