document.getElementById('showPassword').addEventListener('change', function () {
    const pass1 = document.getElementById('pass1');
    pass1.type = this.checked ? 'text' : 'password';
});

document.getElementById('showPassword').addEventListener('change', function () {
    const pass2 = document.getElementById('pass2');
    pass2.type = this.checked ? 'text' : 'password';
});

const closeButton = document.getElementById('closeButton');
const myAlert = document.getElementById('myAlert');

closeButton.addEventListener('click', function() {
    myAlert.style.display = 'none';
});

