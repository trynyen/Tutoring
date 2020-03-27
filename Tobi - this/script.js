//Dynamically create a button for each search
$(".btn").on("click", function () {
  var btn = $("<button>")
  var inputVal = $(".inputVal").val().trim();
  console.log(inputVal)
  btn.text(inputVal)
  btn.attr("value",inputVal)
  btn.addClass("btnClass")
  $(".container").append(btn)
})

//CORRECT WAY to get value of a specific button when it's clicked
$(document).on("click","button", function(){
  var btnVal = $(this).attr("value");
  console.log(btnVal);
})

//WRONG WAY because not, targeting the correct button
$(document).on("click","button", function(){
  var btnVal = $(".btnClass").attr("value")
  console.log(btnVal)
})