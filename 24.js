// how to iterate object

const person = {
    name : "faizan",
    age : 12,
    "hobbies": ["dua", "zikr", "durood"]
}


//for in loop
// for(let key in person){  
// // console.log(key)
// console.log(person[key])
// console.log(key, person[key]); }

// for(let key in person){
// console.log(`${key}: ${person[key]}`);}

// result = Object.keys(person)
// console.log(result);
// const temp = Array.isArray(result)
// console.log(temp);

for(let key of Object.keys(person)){
    console.log(person[key]);
}
 