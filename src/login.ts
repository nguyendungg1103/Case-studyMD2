if (JSON.parse(localStorage.getItem("login")) === null) {
    localStorage.setItem("login", JSON.stringify([]));
}
else if (JSON.parse(localStorage.getItem("login")) !== null) {
    localStorage.clear();
}

let email = document.getElementById('email') as HTMLInputElement;
let password = document.getElementById('password') as HTMLInputElement;

document.getElementById('loginuser').addEventListener('click', loginUser);
function loginUser() {
    if (JSON.parse(localStorage.getItem("login")) === null) {
        localStorage.setItem("login", JSON.stringify([]));
    }
    const arr = JSON.parse(localStorage.getItem("login"));
    if (email.value == "nguyendungg1103@gmail.com" && password.value == "123123") {
        localStorage.setItem(
            "login",
            JSON.stringify([...arr, { email: email.value, password: password.value }])
        );
        window.location.href = "./index.html";
    } else {
        alert("wrong password or account");
    }
}
