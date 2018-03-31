const getChange = (difference, denominations) => {
    if(difference === 0) {
      return [];
     }
     if(denominations.length === 0) {
       return false;
     }
     if(difference < denominations[0]) {
       return getChange(difference, denominations.slice(1));
     } else {
       return [denominations[0]].concat(getChange(difference - denominations[0], denominations));
     }
   };