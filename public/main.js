import { Student } from "./Student.js";
import { StudentManager } from "./StudentManager.js";
var manager = new StudentManager();
var key;
var msv = document.getElementById('msv');
var name = document.getElementById('name');
var address = document.getElementById('address');
var msvEdit = document.getElementById('msv-edit');
var nameEdit = document.getElementById('name-edit');
var addressEdit = document.getElementById('address-edit');
var search = document.getElementById('search');
var arr = JSON.parse(localStorage.getItem("login"));
if (arr !== null) {
    var login = "";
    login += " <a\n    class=\"nav-link dropdown-toggle\"\n    href=\"#\"\n    id=\"navbarDropdown\"\n    role=\"button\"\n    data-toggle=\"dropdown\"\n    aria-expanded=\"false\"\n  >".concat(arr[0].email, "\n  </a>\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n    <a class=\"dropdown-item\" href=\"#\">Action</a>\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" href=\"./login.html\">Logout</a>\n  </div>");
    document.getElementById('navbarDropdown').innerHTML = login;
}
else {
    window.location.href = "./login.html";
    //     let login = "";
    //     login += `<a href="./login.html"> Đăng Nhập
    //   </a>`
    //     document.getElementById('navbarDropdown').innerHTML = login;
}
document.getElementById('create').addEventListener('click', createStudent);
function createStudent() {
    var student = new Student(msv.value, name.value, address.value);
    manager.createStudent(student);
    clear();
    buttonUpdateStudent();
    buttonDeleteStudent();
}
function buttonUpdateStudent() {
    var updateStudent = document.getElementsByClassName('update');
    var _loop_1 = function (i) {
        updateStudent[i].addEventListener('click', function () {
            key = updateStudent[i].getAttribute('value');
            manager.update(+key);
            buttonUpdateStudent();
        });
    };
    for (var i = 0; i < updateStudent.length; i++) {
        _loop_1(i);
    }
    document.getElementById('update').addEventListener('click', function () {
        manager.student[key].id = msvEdit.value;
        manager.student[key].name = nameEdit.value;
        manager.student[key].address = addressEdit.value;
        manager.showStudent(manager.student);
        // clearUpdate();
    });
    buttonDeleteStudent();
}
function buttonDeleteStudent() {
    var deleteStudent = document.getElementsByClassName('delete');
    var _loop_2 = function (i) {
        deleteStudent[i].addEventListener('click', function () {
            if (confirm('Are you sure?')) {
                key = deleteStudent[i].getAttribute('value');
                manager.deleteStudent(+key);
                buttonDeleteStudent();
            }
        });
    };
    for (var i = 0; i < deleteStudent.length; i++) {
        _loop_2(i);
    }
}
// document.getElementById('showall').addEventListener('click', showAll);
// function showAll() {
//     manager.showStudent(manager.student);
// }
document.getElementById('search').addEventListener('change', searchStudent);
function searchStudent() {
    var key = search.value;
    manager.searchStudent(manager.student, key);
    buttonUpdateStudent();
    buttonDeleteStudent();
}
var clear = function () {
    msv.value = "";
    name.value = "";
    address.value = "";
};
//# sourceMappingURL=main.js.map