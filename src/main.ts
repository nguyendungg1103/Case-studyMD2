import { Student } from "./Student.js";
import { StudentManager } from "./StudentManager.js";

const manager = new StudentManager();

var key;
let msv = document.getElementById('msv') as HTMLInputElement;
let name = document.getElementById('name') as HTMLInputElement;
let address = document.getElementById('address') as HTMLInputElement;
let msvEdit = document.getElementById('msv-edit') as HTMLInputElement;
let nameEdit = document.getElementById('name-edit') as HTMLInputElement;
let addressEdit = document.getElementById('address-edit') as HTMLInputElement;
let search = document.getElementById('search') as HTMLInputElement;

let arr = JSON.parse(localStorage.getItem("login"));
if (arr !== null) {
    let login = "";
    login += ` <a
    class="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-toggle="dropdown"
    aria-expanded="false"
  >${arr[0].email}
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="./login.html">Logout</a>
  </div>`
    document.getElementById('navbarDropdown').innerHTML = login;
} else {
    window.location.href = "./login.html";
//     let login = "";
//     login += `<a href="./login.html"> Đăng Nhập
//   </a>`
//     document.getElementById('navbarDropdown').innerHTML = login;
}


document.getElementById('create').addEventListener('click', createStudent);
function createStudent() {
    let student = new Student(msv.value, name.value, address.value);
    manager.createStudent(student);
    clear();
    buttonUpdateStudent();
    buttonDeleteStudent();
}


function buttonUpdateStudent() {
    let updateStudent = document.getElementsByClassName('update');
    for (let i = 0; i < updateStudent.length; i++) {
        updateStudent[i].addEventListener('click', () => {
            key = updateStudent[i].getAttribute('value');
            manager.update(+key);
            buttonUpdateStudent();
        })
    }
    document.getElementById('update').addEventListener('click', function () {
        manager.student[key].id = msvEdit.value;
        manager.student[key].name = nameEdit.value;
        manager.student[key].address = addressEdit.value;
        manager.showStudent(manager.student);
        // clearUpdate();
    })
    buttonDeleteStudent();
}


function buttonDeleteStudent() {
    let deleteStudent = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteStudent.length; i++) {
        deleteStudent[i].addEventListener('click', () => {
            if (confirm('Are you sure?')) {
                key = deleteStudent[i].getAttribute('value');
                manager.deleteStudent(+key);
                buttonDeleteStudent();
            }
        })
    }
}


// document.getElementById('showall').addEventListener('click', showAll);
// function showAll() {
//     manager.showStudent(manager.student);
// }
document.getElementById('search').addEventListener('change', searchStudent);
function searchStudent() {
    let key = search.value;
    manager.searchStudent(manager.student, key);
    buttonUpdateStudent();
    buttonDeleteStudent();
}



const clear = () => {
    msv.value = "";
    name.value = "";
    address.value = "";
}

