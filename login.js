
let passwordeye = document.getElementById('passwordeye');
let password = document.getElementById('password');

/*--- Password Visibility Toggle ---*/
passwordeye.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        passwordeye.classList.remove('fa-eye');
        passwordeye.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        passwordeye.classList.remove('fa-eye-slash');
        passwordeye.classList.add('fa-eye');
    }
});
