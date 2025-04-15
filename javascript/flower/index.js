
let users = JSON.parse(localStorage.getItem('login_user'));

if (users) {
    window.location.href = 'product.html';
}
const LoginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = JSON.parse(localStorage.getItem('user'));
    let login1 = user.find((val) => {
        if (val.email == email && val.password == password) {
            return true;
        }
    })
    if (login1) {
        localStorage.setItem('login_user', JSON.stringify(login1));
        alert('Login Successfully');
        window.location.href = 'product.html';
    }
    else {
        alert('invalid email or password');
    }
}

