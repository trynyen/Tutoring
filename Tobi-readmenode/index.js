// var UserSearch = require("./gitAPI");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateReadMeAPI = require("./gitAPI");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

function promptUser() {
  return inquirer.prompt([
    {
      message: "Enter your GitHub username:",
      name: "username" 
    },
    {   
      type: "input",
      name: "title",
      message: "Enter your Repository Title:"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for your repository"
    },
    {
      type: "checkbox",
      message: "What would you like to add to your table of contents?",
      name: "contents",
      choices: [
            "Installations", 
            "Usage", 
            "Collaborators", 
            "Test"
      ]
    },
    {
      type: "input",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installations"
    },
    {
      type: "input",
      message: "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage"
    },
    {
      type: "input",
      message: "List your collaborators, if any, with links to their GitHub profiles.",
      name: "contributing"
    },
    {
      type: "input",
      name: "If you wrote tests, include examples on how to run them.",
      message: "tests"
    }
 ]);
}

// then(function({ username }) {
//     const clientId = "7bd2737f5823d55149c7";
//     const clientSecret = "6807444eed3fc93dc27eb02c681689249a6a465d"
//     const queryUrl = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;

//     axios.get(queryUrl).then(function(res) {
//         const gitEmail = res.data.email
//         const gitImage = res.data.avatar_url        
//         });
 
function generateReadme(answers) {
  return `
# ${answers.title}

## Description

${answers.description}

## Table of Contents


## Installations

${answers.installations}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Developer Details`;
}

// # ${gitEmail}
// ![GitHub Logo]${gitImage}

promptUser()
  .then(function(answers) {
    const readme = generateReadme(answers);
    writeFileAsync("README.md", readme)

    generateReadMeAPI
    .getUser(answers.username)
    .then(data => {
    appendFile("README.md", data);
    // console.log(data)

    });
    // console.log("readme" + readme)
    // console.log("API Info" + APIinfo)

  
  })
  .then(function() {
    console.log("Successfully wrote to README.md");

  })
  .catch(function(err) {
    console.log(err);
  });

// }); 



// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
