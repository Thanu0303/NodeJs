"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(id, name, designation) {
        this.empId = id;
        this.empName = name;
        this.designation = designation;
    }
    EmployeeClass.prototype.details = function () {
        return 'ID: ' + this.empId + ' Name: ' + this.empName + ' Designation: ' + this.designation;
    };
    return EmployeeClass;
}());
var obj = new EmployeeClass(10, 'Canarys Automations', 'Trainee');
console.log(obj.details());
//Inheritance
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this.privField = 999;
        this.proField = 888;
        this.pubField = 777;
        console.log('BaseClass Constructor Invoked');
    }
    BaseClass.prototype.show = function () {
        console.log('Priv: ' + this.privField + ' Prot:' + this.proField + ' Pub: ' + this.pubField);
    };
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        var _this = _super.call(this) || this;
        console.log('Derived Class Constructor is called');
        return _this;
    }
    DerivedClass.prototype.show = function () {
        console.log('show method is called');
        // console.log('Private Field : ' + this.privField);
        console.log('Public Field : ' + this.pubField);
        console.log('Protected Field : ' + this.proField);
    };
    return DerivedClass;
}(BaseClass));
var base = new BaseClass();
var derived = new DerivedClass();
console.log(base.show());
console.log(derived.show());
