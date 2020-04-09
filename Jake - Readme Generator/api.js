const axios = require("axios");
const api = {
  getUser(username) {
    var apiURL = "https://api.github.com/users/" + username;
    axios.get(apiURL)
    // .then(function (urlResponse) {
    //   // handle success
    //   console.log(urlResponse.avatar_url)
    // })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
};

module.exports = api;
