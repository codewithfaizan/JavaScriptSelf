const myarray = ['dablu','bablu','kablu','laddu'];
// Array destructuring
let [val1,val2,val3, ...newarray ] = myarray;
console.log("val1 is:", val1);
console.log("val2 is:", val2);
console.log("val3 is:", val3);
console.log("remaining are:",newarray); 