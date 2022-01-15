// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false; 
        }
    } 
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false; 
        }
    }

},
{
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your project name!');
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of your project!');
            return false; 
        }
    }
}, 
{
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter steps required to install your project!');
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a usage description!');
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'test', 
    message: 'What command should be run to run tests?',
    default: 'npm test'
},
{
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?'
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




