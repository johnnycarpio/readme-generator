const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./src/generator');
const path = require('path');

const writeFile = (readme, data) => {
    return fs.writeFileSync(path.join(process.cwd(), readme), data);
}

// create function to begin prompts 
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project title?',
            validate: projectNameInput => {
                if (projectNameInput) {
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
            message: 'Please enter a description for your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide installation instructions for your project',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    console.log('You must provide instructions on how to install this project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Please provide usage information for your project',
            validate: usageInformation => {
                if (usageInformation) {
                    return true;
                } else {
                    console.log('You must provide usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please enter any contributors involved with this project',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter instructions on how to test the project',
            validate: testInstructions => {
                if (testInstructions) {
                    return true;
                } else {
                    console.log('You must provide test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenseList',
            message: 'Please choose the lisence you will be using',
            choices: ['choice1', 'choice2', 'choice3']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username',
            validate: username => {
                if (username) {
                    return true;
                } else {
                    console.log('You must enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter your email!')
                    return false;
                }
            }
        }
    ]).then(data => {
        writeFile('readme.md', generator(data))
    });
};

promptUser();