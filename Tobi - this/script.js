$(".btn").on("click", function () {
  var btn = $("<button>")
  var inputVal = $(".inputVal").val().trim();
  console.log(inputVal)
  btn.text(inputVal)
  btn.attr("value",inputVal)
  btn.addClass("btnClass")
  $(".container").append(btn)
})

//CORRECT WAY
$(document).on("click","button", function(){
  var btnVal = $(this).attr("value");
  console.log(btnVal);
})

//WRONG WAY
$("button").on("click", function(){
  var btnVal = $(".btnClass").attr("value")
  console.log(btnVal)
})