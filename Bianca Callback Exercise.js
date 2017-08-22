var funcCaller = function(arg,func) {

	return func(arg);
};

var firstVal = function(arr,func) {
	func(arr[0], 0, arr);
};

var firstValObj = function(arg, func) {
	if(Array.isArray(arg)) {
		return func(arg[0], 0, arg);
	}
	else {
		for(var key in arg) {
			return func(arg[key], key, arg);
        }
    }
};
