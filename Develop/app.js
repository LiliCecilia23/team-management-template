const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const team = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function employeeInfo () { 
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an employee?",
            name: "addEmployee",
            choices: ["Yes", "No"],
        }
    ]).then(response => {
        const {addEmployee} = response;

        if (addEmployee === "Yes"){
            inquirer.prompt([
                {
                    message: "What is your role?",
                    name: "role",
                    type: "list",
                    choices: ['Manager', 'Engineer', 'Intern'],
                },
            ]).then(response => {
                const {name, id, email, role} = response;
                if (role === 'Manager'){
                    managerInfo(response);
                } else if (role === 'Engineer'){
                    engineerInfo(response);
                } else if (role === 'Intern'){
                    internInfo(response);
                };
            });
        } else {
            let completeTeam = render(team);
            fs.writeFile("team.html", completeTeam, "utf8", function(err){
                if (err) {
                    return console.log(err);
                } else {
                    console.log("file complete!")
                };
            });
        }
    })
    
    
};
function managerInfo(name, id, email){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email", //UNDEFINED
        },
        {
            type: "input",
            name: "officeNumber", //UNDEFINED
            message: "What is your office Number?",
        }
    ]).then(response => {

        let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        employeeInfo();
    });
};
function engineerInfo(name, id, email){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email", //UNDEFINED
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        }
    ]).then(response => {
        const {github} = response;

        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        employeeInfo();
    });
};
function internInfo(name, id, email){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id", //UNDEFINED
        },
        {
            type: "input",
            message: "What is your employee email?",
            name: "email", //UNDEFINED
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of your school?",
        }
    ]).then(response => {
        const {school} = response;

        let intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        employeeInfo();
    });
};

employeeInfo();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
