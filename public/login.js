var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
if (JSON.parse(localStorage.getItem("login")) === null) {
    localStorage.setItem("login", JSON.stringify([]));
}
else if (JSON.parse(localStorage.getItem("login")) !== null) {
    localStorage.clear();
}
var email = document.getElementById('email');
var password = document.getElementById('password');
document.getElementById('loginuser').addEventListener('click', loginUser);
function loginUser() {
    if (JSON.parse(localStorage.getItem("login")) === null) {
        localStorage.setItem("login", JSON.stringify([]));
    }
    var arr = JSON.parse(localStorage.getItem("login"));
    if (email.value == "nguyendungg1103@gmail.com" && password.value == "123123") {
        localStorage.setItem("login", JSON.stringify(__spreadArray(__spreadArray([], arr, true), [{ email: email.value, password: password.value }], false)));
        window.location.href = "./index.html";
    }
    else {
        alert("wrong password or account");
    }
}
//# sourceMappingURL=login.js.map