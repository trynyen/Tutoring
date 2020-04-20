const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMark = require("./utils/generateMarkdown");
const questions = [
    {
       type: "input",
       name: "githubUsername",
       message: "What is your Github username?"

    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        api.getUser(data.githubUsername).then(function(response) {
            console.log(response.data.avatar_url);
        });
    });
}

init();
