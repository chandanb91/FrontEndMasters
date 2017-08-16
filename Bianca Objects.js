var box = {};

box["material"] = "cardboard";

var key = "material";

box[key];				/*box['key'] -> undefined.  When we quote the key it becomes a property 
													and since object box doesn't contain a property called key we get undefined. 
													The same would hold good for box.key.  */
//"cardboard"


var func = function() {
    return "material";
};
box[func()];

//"cardboard"

//var box = {};
box['material'] = "cardboard";
box[0] = 'meow';               // single quotes and double quotes have no difference in JS.
box['^&*'] = "testing 123";
var test = box['^&*']; //"testing 123"					

// box.0 ->Uncaught SyntaxError: Unexpected number
/* box[0] -> Primary understanding of this is thinking of box is an array and we're accessing 
			 the first element in it's structure. But it actually is a box notation 
			 which is used to create a property and assign a value to it. */

/* box notation is more flexible than the dot operator. Dot operator can only be used 
 with strings and these string have to be valid variable names.

 our box object would look something like this
 box = {"material" : "cardboard", 
	"0" : "meow",
	"^&*" : "testing 123"
 }

 we can see that property 0 was stringified. So when we use box notations by default it stringifies everything. */


 //var box = {};
box["size"] = 9;
box.size;
//9
typeof box.size;
//"number"
box["width"] = "9";
box.width;
//"9"
typeof box.width;
//"string"

for(var key in box) {
    console.log(key); 		//for printing out properties
}

 // size
 // width
 // undefined

 for(var key in box) {
    console.log(box[key]); 		//for printing out values of properties
}

//  9
//  9
// undefined

/* console.log(box.key) won't work because, key is a variable and dot notation primarily looks for 
	predefined properties. So in this case the for-in loop would just loop twice and end without printing any values.*/

for(var key in box) {
    console.log(box['key']);
}

//2 undefined -> here 2 specifies that it looped twice.

for(var key in box) {
    console.log(box.key);
}
//2 undefined	