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
    alert("Registrado com sucesso! Faça seu login.");
    showLogin();
}

document.addEventListener('DOMContentLoaded', (event) => {
    showLogin();
});

function maskCPF(input) {
    let value = input.value;
    value = value.replace(/\D/g, ""); 
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = value;
}

function maskDate(input) {
    let value = input.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    input.value = value;
}

function calculateStay(event) {
    event.preventDefault();
    const days = document.getElementById('bookingDays').value;
    const costPerDay = 150;
    const totalCost = days * costPerDay;
    document.getElementById('costDisplay').innerText = `Total de custo para ${days} dia(s) é R$${totalCost}`;
}
