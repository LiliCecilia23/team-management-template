// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name, email, id, officeNum){
        super(name, email, id);
        this.officeNum = officeNum;
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
    getofficeNum(){
        return this.officeNum;
    };
    getRole(){
        return 'Manager';
    };
};

module.exports = Manager;