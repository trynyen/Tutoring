const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

    return inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const clientId = "7bd2737f5823d55149c7";
    const clientSecret = "6807444eed3fc93dc27eb02c681689249a6a465d"
    const queryUrl = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;

    axios.get(queryUrl).then(function(res) {
        const gitEmail = res.data.email
        const gitImage = res.data.avatar_url 

        function generateReadMe(){
            return `
            # ${gitEmail}
            ![GitHub Logo]${gitImage}`
        }
        // console.log(gitImage);
        // console.log(gitEmail);
        
        // const writeToReadme = gitImage;
        const readme = generateReadMeAPI(); 
        
        fs.appendFile("README.md", readme, function(err) {
            if (err) {
              throw err;
            }
        
            // console.log(writeToReadme)

        module.exports = generateReadMeAPI;
        });
    }); 
});