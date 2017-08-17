var noiseArray = ["Arr"];

noiseArray.unshift("meow");
noiseArray.push("aowwww");
noiseArray[3] = "bow";

console.log(noiseArray);
//(4) ["meow", "Arr", "aowwww", "bow"]

noiseArray.length;
//4

var lastIndex = noiseArray.lastIndexOf("bow");
lastIndex;
//3

animal.noises = noiseArray;

console.log(animal);
// {username: "Wolf", tagline: "Have you ever seen a Wolf in a circus!", noises: Array(4)}

var animals = [];
animals.push(animal);

console.log(animals);
//{username: "Wolf", tagline: "Have you ever seen a Wolf in a circus!", noises: Array(4)}

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

animals[animals.length] = quackers;
console.log(animals);
//{username: "Wolf", tagline: "Have you ever seen a Wolf in a circus!", noises: Array(4), undefined: {…}}

var lion = {
username : "sher",
tagline : "King of the jungle",
noises : ["Roar", "Grrr"];
};

var dog = {
username : "Shadow",
tagline : "I can help",
noises : ["bow", "woof"]
};

animals[animals.length] = lion;
animals[animals.length] = dog;

