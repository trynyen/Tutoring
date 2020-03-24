
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


//Country array
//button click function {
  //preventDefault to avoid submitting form;
  //get the value of new country in searchform box, and assign value to a variable
  //push the new country variable to country array
  //for loop to loop through country array
    // assign array[i] to a new variable,
    //assign the URL link to a countryURL variable, and add the array[i] variable into to URL link
// $.ajax({
//               url: countryURL,
//               method: "GET"
//           }).then(function (response) {
//             //Display country into on page
//           }
// }


