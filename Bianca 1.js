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

var box = {};
box['material'] = "cardboard";
box[0] = 'meow';               // single quotes and double quotes have no difference in JS.
box['^&*'] = "testing 123";
var test = box['^&*']; //"testing 123"					

// box.0 ->Uncaught SyntaxError: Unexpected number

/* box notation is more flexible than the dot operator. Dot operator can only be used 
 with strings and these string have to be valid variable names.

 our box object would look something like this
 box = {"material" : "cardboard", 
	"0" : "meow",
	"^&*" : "testing 123"
 }

 we can see that property 0 was stringified. So when we use box notations by default it stringifies everything. */