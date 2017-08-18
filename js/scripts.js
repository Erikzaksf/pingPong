  // business logic

var outArray = new Array;
var tooAdd = new Array;
var numberInput = new Array;
var one = 1;
var highEnd = new Array;
var result = new Array

//function createArray() {



//}

function createString() {
  while (highEnd > one) {
      one++;
      return outArray.unshift(one);
  };


//  if (numberInput > 1) {
//    outArray.push(numberInput);
//    numberInput -= 1 ;
//  }

};
//do {
  //}while (numberInput > 1);
  //numberInput -= 1 ;
  //return outArray.push(numberInput);
//};






// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
debugger
    var highEnd =  $("input.user-input").val();
    result = createString(highEnd);
    window.alert(result);
  });
 });
