var numbersOutput = [];





function countUp(countNumber) {
  for (var i = 1; i <= countNumber; i++) {

      numbersOutput.push(i);
    }
  return numbersOutput;
}












// Interface Logic
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
