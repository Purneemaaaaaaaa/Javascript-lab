// Program to create and manipulate a dog object

// a. Create an empty object called dog
var dog = {};

// b. Print the dog object
console.log("Empty Dog Object:", dog);

// c. Add properties and bark method
dog.name = "Tommy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;

dog.bark = function() {
    return "woof woof";
};

// d. Get values from the dog object
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// e. Add new properties
dog.breed = "German Shepherd";

dog.getDogInfo = function() {
    return this.name + " is a " + this.breed +
           " and is " + this.age + " years old.";
};

console.log("Breed:", dog.breed);
console.log("Dog Information:", dog.getDogInfo());