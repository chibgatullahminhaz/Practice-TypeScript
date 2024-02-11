var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user2 = /** @class */ (function () {
    function user2(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user2.prototype.getData = function () {
    };
    return user2;
}());
var students = /** @class */ (function (_super) {
    __extends(students, _super);
    function students(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    students.prototype.getData = function () {
        console.log("my User Name:".concat(this.userName, ", my age : ").concat(this.age, " "));
    };
    students.prototype.userData = function (numbrs) {
        console.log(this.studentId = numbrs);
    };
    return students;
}(user2));
var student1 = new students("chibgatullah", 22, 3343);
student1.userData(3434);
student1.getData();
