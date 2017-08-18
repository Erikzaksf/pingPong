  // business logic

var outArray = new Array;
var tooAdd = new Array;
var numberInput = new Array;
var countDown = [];


function createString(number) {





  do {

 return outArray.push(numberInput);
  numberInput -= 1 ;
  }while (numberInput > 1);
};






// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var numberInput =  $("input.user-input").val();
    var result = createString(outArray);
    window.alert(result);
  });
 });
