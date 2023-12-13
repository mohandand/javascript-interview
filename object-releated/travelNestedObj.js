const originalObject = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
      e: {
        f: 5
      }
    }
  };

  function getAllPrpertyValues(obj) {
    let valuesArray = [];

    function traverse(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                const value  = obj[key];
                if (value !== null && typeof value === 'object'){
                    traverse(value);
                } else {
                    valuesArray.push(value)
                }
            }
        }
    }

    traverse(obj);
    return valuesArray;

  }

  console.log(getAllPrpertyValues(originalObject));