var box = [];

box[0] = 1;
box[1] = true;
box.push({ 'movie' : 'get out'});
//3

box[0];
//1

var y = box;

y;
//(3) [1, true, {…}]

box;
//(3) [1, true, {…}]

box.pop();
//{movie: "get out"}

box;
//(2) [1, true]

y;
//(2) [1, true] 

/* Arrays are pass by reference so when we're equating box[] to y[]
	y[] is holding the address of box[]. When box.pop() is carried the 
	last element is popped and this is true for y[] too. */

var box = [];

box['size'] = 9;
box['0'] = 'meow';

box[0];    // this works just like using the box notation to access a property
//"meow"

box.size;  // Rules of box and dot notation are same for arrays as well
//9

for (var key in box) {
  console.log(key);     //returns property names
}

 // 0
 // size

 // since the rules are same, the output of running the above loop would return the property names

 for (var key in box) {
  console.log(box[key]);   //property values
}
 // meow
 // 9

 for (var key in box) {
  console.log(box.key);  
}
// 2 undefined    

/* Note; loop will run two times and exit without printing the values 
	because key is a variable and dot notation only accepts a property 
	to invoke its value. */

box['size'] = 9;
box['0'] = 'meow';
box.push('Whoooo!');

for(var i=0; i<box.length; i++) {
	console.log(box[i]);
}

// meow
// Whoooo!									
											/*	    	['meow'     'whoooo!']
											    #index	   0            1

													   {0:'meow',1:'Whoooo!','size':9}  

			In the above illustration we can see that property '0' and its value was found at 
			1st index because arrays are ordered and it gives preference to numbers. Therefore, property '0'
			and its value was placed in the 1st index. Later on when 'Whoooo!' was pushed, it took the 
			second index and added a property '1' by itself. Since size is a string and a number it 
			won't be considered during looping and array.length method. Length of this array will be 2 because 
			it ignores the last index with string property. */

var box = [];

box['size'] = 9;
box['1'] = 'meow';
box.push('seven');

box;
// (3) [undefined × 1, "meow", "seven", size: 9]

/* in the above code snippet the output shows that the 0th index is vacant
	and the values were allocated from the 2nd index because we entered a property of '1'. 
	Now we know array arranges its participants numerically.
	Also the length was printed out as 3 even there were 4 allocations. 
	It will ignore the size property because objects do not have length value. */

box['0'] = 'meow';
box[3] = {'babyBox' : true};
box['length'];
//4       returns the length of 4 because box['length'] is same as box.length. length in quotes is same as dot notation.

box;
//(4) ["meow", undefined × 2, {…}]