
var array = ["Uganda", "Colombia", "Italy"]

$(".btn").on("click",function(event){

  event.preventDefault();
  
  var newCountry = $(".searchInput").val().trim();
  console.log(newCountry)
  array.push(newCountry)
  for (var i = 0; i < array.length; i++){
    var country = array[i]
  
  var countryURL = "https://corona.lmao.ninja/countries/" + country
  
          $.ajax({
              url: countryURL,
              method: "GET"
          }).then(function (response) {
            console.log(response)
            //Display country into on page
          })
  }
})
