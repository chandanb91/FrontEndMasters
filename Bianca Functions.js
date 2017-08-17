function AnimalMaker(name) {
 return {
	speak : function() {
		console.log('My name is', name);
    },
	name : name,
	owner : 'Chandan'
 };
};

var animalNames = ["Sheep", "Liger", "Big Bird"];

var farm = [];

for( var i=0; i < animalNames.length; i++) {
	farm[i] = AnimalMaker(animalNames[i]);
}

console.log(farm);
 // (3) [{…}, {…}, {…}]

 for( var i=0; i < animalNames.length; i++) {
	farm[i].speak();
}
 // My name is Sheep
 // My name is Liger
 // My name is Big Bird