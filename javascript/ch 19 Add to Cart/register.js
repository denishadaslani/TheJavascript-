const register = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
}

const registerUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        password: password
    }

    let ans = [...register(), row];
    localStorage.setItem('users', JSON.stringify(ans));
    alert("resgister successfully");
    window.location.href = 'index.html';
    document.getElementById('name').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('password').value = ' ';


}