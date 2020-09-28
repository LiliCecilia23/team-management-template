// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
    };
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    };
    getSchool(){
        return this.school;
    };
    getRole(){
        return 'Intern';
    };
};

module.exports = Intern;