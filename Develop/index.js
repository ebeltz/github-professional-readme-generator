// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis']
      }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
      fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then(data => {
      writeToFile('README.md',data) 
  });
}

// Function call to initialize app
init();




