const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [
    {
        message: "What is your GitHub username?",
        name: "Username",
        type: "input",
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input",
    },
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input",
    },
    {
        message: "What is the description of your project?",
        name: "description",
        type: "input",
    },
    {
        message: "What are the steps necessary to run your project?",
        name: "install",
        type: "input",
    },
    {
        message: "What language did you use for this project?",
        name: "language",
        type: "list",
        choices: 
        [
            "HTML",
            "JavaScript",
            "CSS",
            "React.js",
        ],
    },
    {
        message: "What kind of license would you like your project to have?",
        name: "license",
        type: "list",
        choices: 
        [
            "MIT", 
            "GPL 3.0", 
            "BSD 3", 
            "None"],
      },
    {
        message: "Any collaborator's you would like to mention?",
        name: "collaborators",
        type: "input",
    },
]
inquirer.prompt(questions)
  // function to write ReadMe file
  .then(function (response) {
    fs.writeFile("ReadMe.md", generateMarkdown(response), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Your ReadMe Was successfuly created!");
    });
  });