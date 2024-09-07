let falseObject = new Boolean(false);
let result = falseObject && true;
// true
console.log(result);

let falseValue = false;
result = falseValue && true;
// false
console.log(result);

// object
console.log(typeof falseObject);
// boolean
console.log(typeof falseValue);
// true
console.log(falseObject instanceof Boolean);
// false
console.log(falseValue instanceof Boolean);
