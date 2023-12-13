// https://medium.com/@saikiran-dev/absolute-modern-way-to-deep-clone-object-in-javascript-61f0282db8de

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      // If the object is not an object or is null, return the object itself
      return obj;
    }
  
    if (obj instanceof Date) {
      // If the object is a Date, create a new Date with the same value
      return new Date(obj);
    }
  
    if (obj instanceof RegExp) {
      // If the object is a RegExp, create a new RegExp with the same pattern and flags
      return new RegExp(obj.source, obj.flags);
    }
  
    // If the object is an array, create a new array and copy its elements
    if (Array.isArray(obj)) {
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
        newArray[i] = deepCopy(obj[i]);
      }
      return newArray;
    }
  
    // If the object is a plain object, create a new object and copy its properties
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
  
    return newObj;
  }
  
  // Example usage
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
  
  const clonedObject = deepCopy(originalObject);
  
  console.log(clonedObject); // Output: { a: 1, b: { c: 2, d: [3, 4], e: { f: 5 } } }
  console.log(originalObject === clonedObject); // Output: false
  console.log(originalObject.b === clonedObject.b); // Output: false (deep copy for nested objects)
  console.log(originalObject.b.d === clonedObject.b.d); // Output: false (deep copy for arrays)
  