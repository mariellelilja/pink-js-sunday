// Welcome to the workshop! We will fill up this file during live coding :)

// Recap of variables and data types

const number = 1;
const b = false;
const text ="this is some text";
console.log("Here is my number: " + number);

// Arrays - creation, indexing, length, indexOf, includes

const arr = [1,2,3];
console.log(arr);
console.log(arr[2]);
console.log("arr lenght is: "+arr.length);

console.log(arr[arr.lenght]);
console.log("Which index no does 2 have?  --> arr.indexOf(2): "+arr.indexOf(2));
console.log(arr.includes(2));



// Mutation of arrays - push, pop, shift, unshift, reverse
const arr4 = [];
////In java & c# you cannot add MORE elements than declared; but in Js you can: arrays are like a mix of list and array.
arr.push("i");
console.log(arr4);
arr4.push("n");
console.log(arr4);
arr4.push("HEJ");
arr4.push("HEJ");
console.log(arr4);

//arr4.push(arr4);
console.log(arr4); //AHHA WHAT?? --> <ref *1> [ 'n', [Circular *1] ]

//pop -> removed the latest chips in the container of Pringles
arr4.pop();
console.log(arr4);

arr4.shift();
console.log(arr4);

arr4.unshift();
console.log(arr4);



// Objects - create, mutate, spread
const obj ={};
obj.hello ="hell";
obj.number =5;
obj.whattt='hmm' //va, behöver jag ej stänga den??
console.log(obj);

const person = {
    fName: "M", //funkar = också?? NOPE!
    lName:"L",
    age: 27,
    isAwesome: true
};
console.log("p:"+person);

const person2 = {
    favColor: "pink",
    //now we want to merge person & person2 (put attr of p into p2) ->
    ...person //this is called "spread ...(an object?)"
}
console.log("p:"+person2);

// Immutable handling of arrays - concat, map, filter, spread

// EXTRA:
// More methods - some, every, reduce, sort
// Multidimensional arrays (tic-tac-toe), array of objects (card deck)
// Array and object descructuring
