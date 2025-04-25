
const Register = JSON.parse(localStorage.getItem('user')) || [];


const RegisterUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        password: password
    }
    let old = [...Register, row];
    localStorage.setItem('user', JSON.stringify(old));
    alert('Register Successfully');
    window.location.href = 'index.html';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
