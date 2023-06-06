const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var user = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    if (user === 'admin' && password === '1234') {
        alert('Bienvenido');
    }else{
        alert('Usuario o contraseña incorrectos');
    }
});

