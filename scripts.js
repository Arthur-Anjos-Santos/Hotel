function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
}

function showRegister() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerTab').classList.add('active');
}

function login(event) {
    event.preventDefault();
    window.location.href = "home.html";
}

function register(event) {
    event.preventDefault();
    // Handle registration logic here (e.g., save user data)
    alert("Registration successful! Please log in.");
    showLogin();
}

document.addEventListener('DOMContentLoaded', (event) => {
    showLogin();
});
