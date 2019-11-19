let num: number;           //[ = initial val]
num=10;
console.log(num);

function show(): void{
console.log(`show() called`);
return;
}
show();
function fnWithArgs(id: number, name:string) : string {
    return `ID: ${id}, Name: ${name}`;
}
console.log(fnWithArgs(10, 'Canarys'));

let arr = new Array(10);
arr[11]='welcome';
console.log(arr[11]);
let numArr:Array<number> = new Array<number> (10);
numArr[0] = parseFloat('11');
console.log(numArr[0]);

//spread and rest operators
let fruits = ["apples","mangoes","oranges"];
//let a =fruits[0];
//let b  = fruits[1];
let [a,b,c] = [...fruits];             //destructing/ spread operator
console.log(a, b,c);

function fnWithVarArgs(... args){                   //rest operator
    console.log(args.length);
}
fnWithVarArgs();
fnWithVarArgs(1);
fnWithVarArgs(1,2,3,4,5,6);                //returns the length of the fucn



