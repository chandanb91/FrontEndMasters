var closureAlert = function(){ 
  var x = 0; 
  var alerter = function(){ 
    alert(++x); 
  }; 
  return alerter(); 
}; 

closureAlert();
//1              Everytime we call closureAlert() the result will be 1.

var closureAlert = function(){ 
  var x = 0; 
  var alerter = function(){ 
    alert(++x); 
  }; 
  return alerter;   // change here
}; 

var funcstorer = closureAlert();
funcstorer();
//1
funcstorer();                /* funcStorer is called a closure because it holds the scope to it's calling reference 
//2 							environment.  So everytime we call it, x value gets incremented. But in the previous 
								code, value of x wasn't getting incremented because we weren't returning
								the result to any variable, unlike funcStorer. */


var add = function(num){
  var num1 = num;

  var addToNum1 = function(num2){       // everytime we're calling add5() we're creating a scope here
    return num1 + num2;
  };

  return addToNum1;
};

var add5 = add(5);                         /* variable add5 holds the return value which is the function definition of 
											  addToNum1(). So when we call add5(2) by passing it an argument value 2, 
											  this value will be considered for num2 paramenter.	*/
add5
// ƒ (num2){
//     return num1 + num2;
//   }
add5(2);
//7

add5(5);
//10         // this is because num1 still has the value of 5.

add5(3,1);
//8			// Again the value of num1 parameter is retained as 5 and the second argument of add5(3,1) value 1 is ignored. 


function counter() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { n = 0; }
  };
};

var myCOunter = counter();

myCOunter; 
//{count: ƒ, reset: ƒ}

myCOunter.count(); 
//1
myCOunter.count(); 
//2
myCOunter.count(); 
//3
myCOunter['reset'](); 
// undefined
myCOunter.count(); 
// 1
