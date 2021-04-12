const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkFields(inputArray){
    inputArray.forEach(function(input){
        if(input.value ===''){
            showError(input, 'is required');
        }else{
            showSuccess(input);
        }
    });

}

// EventListener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkFields([username,email,password,password2]);

});