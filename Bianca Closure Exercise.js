var nonsense = function(string){
	var blab = function(){
		alert(string);
    };
blab();
};

var nonsense = function(string){
	var blab = function(){
		alert(string);
    };
setTimeout(blab,2000);
};

var nonsense = function(string){
	var blab = function(){
		alert(string);
    };

return blab;
};

var blabLater = nonsense('Hello Hi');

var blabAgainLater = nonsense('What ya say?');

blabLater()

blabAgainLater()

var firstName = function(first) {
	var fname = first;
	
	var lastName = function(last) {
		console.log(fname + " " + last);
    };
	
	return lastName;
};

var family1 = firstName('Chandan');
family1('Gowda');
//VM709:5 Chandan Gowda

family1('Malhotra');
//VM709:5 Chandan Malhotra

var storyWriter = function() {
var story = '';
	return {

	addWords : function(string) { 
		return story += string + ' '; 
	 
	},

	erase : function() { 
		story = '';
	}
	};
};

var fairyTale = storyWriter();

fairyTale.addWords('There was once a tooth fairy');
//"There was once a tooth fairy "
fairyTale.addWords('She collected teeth');
//"There was once a tooth fairy She collected teeth "
