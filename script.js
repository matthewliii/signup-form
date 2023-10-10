let create = document.querySelector("#create");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword")

function check() {
    if(password.value == confirmPassword.value) {
        password.removeAttribute("class");
        confirmPassword.removeAttribute("class");
    }
    else {
        password.setAttribute("class", "error");
        confirmPassword.setAttribute("class", "error");
    }
}

create.addEventListener("click", function() {
    console.log("Checked")
    check()
})