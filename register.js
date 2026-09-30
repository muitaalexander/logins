let register_password=document.getElementById('register_password');
let toggle_Password=document.getElementById('toggle_password');
let register_confirm_password= document.getElementById("register_confirm_password");
let toggleConfirmPassword=document.getElementById("toggle_Confirm_Password");

/*--- Password Visibility Toggle ---*/
toggle_password.addEventListener('click', function(){
    if (register_password.type === 'password') {
        register_password.type = 'text';
        toggle_Password.classList.remove('fa-eye');
        toggle_Password.classList.add('fa-eye-slash');
    } else {
        register_password.type = 'password';
        toggle_Password.classList.remove('fa-eye-slash');
        toggle_Password.classList.add('fa-eye');
    }
});

toggle_Confirm_Password.addEventListener('click', function(){
    if (register_confirm_password.type === 'password') {
        register_confirm_password.type = 'text';
        toggleConfirmPassword.classList.remove('fa-eye');
        toggleConfirmPassword.classList.add('fa-eye-slash');
    } else {
        register_confirm_password.type = 'password';
        toggleConfirmPassword.classList.remove('fa-eye-slash');
        toggleConfirmPassword.classList.add('fa-eye');
    }
}); 