// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const md = require('./utils/generateMarkdown');
const fs = require('fs')
const filename = "README.md"

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'Input',
    name: 'project title',
    message: 'What is your project title',
  },
  {
    type: 'list',
    name:'license',
    message: 'What kind of license should your project have?',
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email username?'
  }
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, fileresponses) { 
  fs.writeToFile(fileName, fileresponses, (err)=> {
  err? console.error(err): console.log('Written File');
});
}

// TODO: Create a function to initialize app
function init() {
 inquirer
 .prompt(questions)
 .then((responses) => {
   const fileresponses = md(responses)
   writeToFile(filename,fileresponses)
 });
}
inquirer
.prompt(questions)
// // Function call to initialize app
// init();

// var data = {
//   numFakes: 2
// }
// console.log(fakeStuff(data));