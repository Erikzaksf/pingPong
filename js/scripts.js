// business logic
var numbersOutput = [];





function countUp(countNumber) {
  for (var i = 1; i <= countNumber; i++) {
    if (i % 15 === 0) {
      numbersOutput.push("PING-PONG");
    } else if (i % 5 === 0){
      numbersOutput.push("pOnG");
    } else if (i % 3 === 0){
      numbersOutput.push("PiNg");
    }

     else {

    numbersOutput.push(i);
    }
  }
  return numbersOutput;
}










// user interface logic
$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var countNumber = parseInt($("input#num").val());
      $("#tooLow").hide();
      var pingPongArray = countUp(countNumber);
      $(".count").empty();
      pingPongArray.forEach(function(value) {
        $(".count").append("<li>" + value + "</li>");
      });
      $(".count").show()


  });
});
