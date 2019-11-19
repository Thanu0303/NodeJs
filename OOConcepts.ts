import { isThisTypeNode } from "typescript";

class EmployeeClass{
    private empId : number;
    private empName : string;
    private designation: string;

    constructor(
        id:number,
        name: string,
        designation:string){
            this.empId = id;
            this.empName =name;
            this.designation = designation;
        }
   details() {
        return 'ID: ' +this.empId + ' Name: ' +this.empName + ' Designation: ' +this.designation ;
        
    }
}

var obj = new EmployeeClass(10,'Canarys Automations', 'Trainee');
console.log(obj.details());

//Inheritance
class BaseClass{
    private privField : number;
    public pubField : number;
    protected proField : number;

    constructor(){
        this.privField = 999;
        this.proField = 888;
        this.pubField = 777;
        console.log('BaseClass Constructor Invoked');
    }
    show(){
        console.log('Priv: ' + this.privField + ' Prot:' + this.proField + ' Pub: ' + this.pubField);
    }
}

class DerivedClass extends BaseClass{
    constructor(){
        super();
        console.log('Derived Class Constructor is called');
    }
    show() {
        console.log('show method is called');
       // console.log('Private Field : ' + this.privField);
        console.log('Public Field : ' + this.pubField);
        console.log('Protected Field : ' + this.proField);

    }
}

var base = new BaseClass();
var derived = new DerivedClass();
console.log(base.show());
console.log(derived.show());