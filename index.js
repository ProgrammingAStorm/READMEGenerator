//External libraries
const inquirer = require('inquirer'); //Used to prompt the user for input

//Questions used in user prompts
const questions = [
    "Please enter your project's name. (Required)",                      //0
    "Please enter your project's description. (Required)",               //1
    "Please enter your project's installation instructions. (Required)", //2
    "Please enter your project's usage information. (Required)",         //3
    "Please enter your project's lisence information. (Required)",       //4
    "Please enter your project's contribution guidelines. (Required)",   //5
    "Please enter your project's test instructions. (Required)",         //6
    "Please enter your GitHub username. (Required)",                     //7
    "Please enter your email address. (Required)",                       //8
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//Prompts the user for input to be used to populate the README
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0],
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }

                console.log("Please enter your project's name.");
                return false;
            }
        }, //name
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                }

                console.log("Please enter your project's description.");
                return false;
            }
        }, //description
        {
            type: 'input',
            name: 'instructions',
            message: questions[2],
            validate: instructionsInput => {
                if(instructionsInput) {
                    return true;
                }

                console.log("Please enter your project's installation instructions.");
                return false;
            }
        }, //instructions
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usageInput => {
                if(usageInput) {
                    return true;
                }

                console.log("Please enter your project's usage information.");
                return false;
            }
        }, //usage
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: [
                'Apache 2.0 License',
                'Eclipse Public License 1.0',
                'GNU GPL v3',
                'IBM Public License Version 1.0',
                'The MIT License',
                'Mozilla Public License 2.0',
                'None'
            ],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                }

                console.log("Please enter your project's license information.");
                return false;
            }
        }, //license
        {
            type: 'input',
            name: 'contribution',
            message: questions[5],
            validate: contributionInput => {
                if(contributionInput) {
                    return true;
                }

                console.log("Please enter your project's contribution guidelines.");
                return false;
            }
        }, //contribution
        {
            type: 'input',
            name: 'testing',
            message: questions[6],
            validate: testingInput => {
                if(testingInput) {
                    return true;
                }

                console.log("Please enter your project's testing information.");
                return false;
            }
        }, //testing
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                }

                console.log("Please enter your GitHub username.");
                return false;
            }
        }, //username
        {
            type: 'input',
            name: 'email',
            message: questions[8],
                        validate: emailInput => {
                if(emailInput) {
                    return true;
                }

                console.log("Please enter your email address.");
                return false;
            }
        }  //email
    ]);
}

// Function call to initialize app
init()
.then();