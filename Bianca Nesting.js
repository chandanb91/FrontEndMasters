var box = {};

box['innerBox'] = {};

box['innerBox'].full = true;

/*box[innerBox]['height'] = 2;     this would be a wrong because innerBox needs to be 
								   quoted or else compiler would assume it's a variable and print undefined */

box['innerBox']['height'] = 2;     //this is the correct representation 

box.otherBox = {};
var innerBox2 = 'otherBox';
box[innerBox2].full = false;       /* Since innerBox2 was a variable this works fine. 
									innerBox2 would be substituted with otherBox property
									i.e., box['otherBox'].full = false

									var box = {
										innerBox : {
											full : true,
											height : 2
										},
										otherBox : {
											full : false;
										}
									}; */

