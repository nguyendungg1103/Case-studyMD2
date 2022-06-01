var Student = /** @class */ (function () {
    function Student(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Student.prototype.getId = function () { return this.id; };
    Student.prototype.getName = function () { return this.name; };
    Student.prototype.getAddress = function () { return this.address; };
    return Student;
}());
export { Student };
//# sourceMappingURL=Student.js.map