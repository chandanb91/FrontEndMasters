var animal = {};

animal.username = "Wolf";
//"Wolf"
animal['tagline'] = "Have you ever seen a Wolf in a circus!";
//"Have you ever seen a Wolf in a circus!"
var noises = [];
animal.noises = noises;

console.log(animal);
//{username: "Wolf", tagline: "Have you ever seen a Wolf in a circus!", noises: Array(0)}

for(var key in animal) {
console.log(key);
}
    
//  username
//  tagline
//  noises

var count = 0;
for(var key in animal) {
count += 1;
console.log(key);
} 

console.log(count); 
//  username
//  tagline
//  noises
//  3

var count = 0;
for(var key in animal) {
count += 1;
//console.log(key);
if(key === 'username')
	console.log('Hi my name is ' + animal[key]);
if(key === 'tagline')
	console.log('I like to say ' + animal[key]);
} 
console.log(count);
    
 // Hi my name is Wolf
 // I like to say Have you ever seen a Wolf in a circus!
 // 3

 /* note: Using === is better than == 
 because when we do "1" == 1 -> it would return true. Notice that they are of two different types.
 So when you do "1" === 1 -> it return false because it is also cecking for type.
 Here, type string is compared with number. */

 What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?
 Ans: The loop will break out right after the first iteration.