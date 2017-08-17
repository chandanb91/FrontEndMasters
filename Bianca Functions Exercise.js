var AnimalTestUser = function(username) {
	return {	
		username : username
    };
};


var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);
//VM1903:2 {username: "CottonBall"}

var AnimalTestUser = function(username) {
	var otherArgs = [];
	if(arguments.length>1) {
		for( var i=1 ; i < arguments.length; i++) {
			otherArgs.push(arguments[i]);
        }
    }
	return {	
		username : username,
		otherArgs : otherArgs
    };
};

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep);
//VM2176:2 {username: "CottonBall", otherArgs: Array(2)}

function AnimalCreator(username, species, tagline, noises) {
	var animal = {
	username : username,
	species : species,
	tagline : tagline,
	noises : noises,
	friends : []
    };
    return animal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
//VM2308:2 {username: "Cloud", species: "sheep", tagline: "You can count on me!", noises: Array(3), friends: Array(0)}

function addFriend(animal, friend) {
	animal.friends.push(friend);
}

addFriend(sheep, sheep);
console.log(sheep);
//VM2723:1 {username: "Cloud", species: "sheep", tagline: "You can count on me!", noises: Array(3), friends: Array(1)}

function addFriend(animal, friend) {
	animal.friends.push(friend.username);
}

addFriend(sheep, sheep);

var cow = AnimalCreator('Sherry', 'cow', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
addFriend(sheep, cow);
console.log(sheep);
//VM2755:1 {username: "Cloud", species: "sheep", tagline: "You can count on me!", noises: Array(3), friends: Array(3)}
//friends: (3) [{…}, "Cloud", "Sherry"]

var llama = AnimalCreator('Dinku', 'llama', 'baaa!', ['djjdd', 'dgfdhd', 'adfkzdjbkadbf']);

var myFarm = [sheep, cow, llama];

addFriend(llama,sheep);
addFriend(llama,cow);
addFriend(cow,sheep);

console.log(myFarm);
//VM2947:1 (3) [{…}, {…}, {…}]
// {username: "Cloud", species: "sheep", tagline: "You can count on me!", noises: Array(3), friends: Array(3)}
// {username: "Sherry", species: "cow", tagline: "You can count on me!", noises: Array(3), friends: Array(1)}
// {username: "Dinku", species: "llama", tagline: "baaa!", noises: Array(3

function addMatchesArray(farm) {
	for(var key in farm) {
		farm[key].matches = [];
    }
}	

addMatchesArray(myFarm);

console.log(myFarm[0]);
//{username: "Cloud", species: "sheep", tagline: "You can count on me!", noises: Array(3), friends: Array(3), …}
//matches: Array(0)

function giveMatches(farm) {
	for(var key in farm) {
		farm[key].matches.push(farm[key].friends[0]);
    }
}
giveMatches(myFarm);

console.log(myFarm[0]);
