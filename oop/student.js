"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentName = exports.lastName = exports.firstName = exports.students = exports.user = void 0;
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.getData = function () {
        console.log("".concat(this.userName, ",").concat(this.age));
    };
    return user;
}());
exports.user = user;
var students = /** @class */ (function (_super) {
    __extends(students, _super);
    function students(userName, age, studentid) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentid = studentid;
        return _this;
    }
    students.prototype.getData = function () {
        console.log("".concat(this.userName, ",").concat(this.age, ",student id : ").concat(this.studentid));
    };
    return students;
}(user));
exports.students = students;
exports.firstName = "chibgatullah";
exports.lastName = "minhaz";
var studentName = function () {
    console.log("".concat(exports.firstName, ",").concat(exports.lastName, ", my Full name ").concat(exports.firstName + " ").concat(exports.lastName));
};
exports.studentName = studentName;
(0, exports.studentName)();
