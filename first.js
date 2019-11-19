console.log("Hello World !!");    
// if node is not working do below steps
//SET PATH=%PATH%;"C:\Users\thanushrees\Appdata\roaming\npm;c:\program files\nodejs;"
// or set it in env vbls and add the path in system vbl

// array creation
let arr = ["Apple","Mango","Banana","Papaya"]
        for (let i = 0; i < arr.length; i++)
        {
            console.log(arr[i]);
        }
let numArr = new Array(10);
for(let index=0;index<numArr.length;index++)
{
    numArr[index] = index+1;
}
//print the array
numArr.forEach(v => { console.log(v); });
let evenNos = numArr.filter(v =>v%2==0);
console.log(`Even numbers are: ${evenNos}`);
let mappedNos = evenNos.map(v=>v+10);
let reduce = mappedNos.reduce((sum, v) => sum += v);
console.log(`Mapped Nos: ${mappedNos}`);
console.log(`Reduced Value: ${reduce}`);

// creating a class
// let is block scoped vbl but var is global scope
function Name (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
//console.log(Name);
var n = new Name("Thanu", "Shree S k");
console.log(`FirstName : ${n.firstname}, LastName : ${n.lastname}`);
console.log(n);
//invoking getters and setters
Name.prototype = {
    getFirstname: function () { return this.firstname; },
    setFirstname: function (value) { return this.firstname = value; },
    getLastname: function () { return this.lastname; },
    setLastname: function (value) { return this.lastname = value; },
    getFullname: function () { return this.firstname + " " + this.lastname; }
};
// object  creation
let obj = new Name("Canarys", "Automations");
console.log(obj.getFullname());
console.log(obj);

