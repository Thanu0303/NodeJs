var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var num; //[ = initial val]
num = 10;
console.log(num);
function show() {
    console.log("show() called");
    return;
}
show();
function fnWithArgs(id, name) {
    return "ID: " + id + ", Name: " + name;
}
console.log(fnWithArgs(10, 'Canarys'));
var arr = new Array(10);
arr[11] = 'welcome';
console.log(arr[11]);
var numArr = new Array(10);
numArr[0] = parseFloat('11');
console.log(numArr[0]);
//spread and rest operators
var fruits = ["apples", "mangoes", "oranges"];
//let a =fruits[0];
//let b  = fruits[1];
var _a = __spreadArrays(fruits), a = _a[0], b = _a[1], c = _a[2];
console.log(a, b, c);
function fnWithVarArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.length);
}
fnWithVarArgs();
fnWithVarArgs(1);
fnWithVarArgs(1, 2, 3, 4, 5, 6);
