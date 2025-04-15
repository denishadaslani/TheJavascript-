const user = JSON.parse(localStorage.getItem('login_user'));

if (!user) {
    window.location.href = "index.html";
}