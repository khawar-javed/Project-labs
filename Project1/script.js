const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions for this form
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

//Function for email is valid
function ValidateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if ( re.test (input.value.trim()) ){
        showSuccess(input);
    } else {
        showError(input,`not a valid ${getFieldName(input)}`);
    }
}

function checkFields(inputArray){
    inputArray.forEach(function(input){
        if(input.value ===''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });

}
//Check length for username & password field
function checkLength(input, min, max){
    if( input.value.length < min ){
        showError(input,`${getFieldName(input)} enter minimum ${min} characters`);
    } else if (input.value.length > max){
        showError(input,`${getFieldName(input)} enter maximum ${max} characters`);
    } else {
        showSuccess (input);
    }
}

//Check confirmed password with actual password
function MatchPassword(input1, input2){
    if ( input1.value !== input2.value ){
        showError(input2,"Password not matched")

    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// An EventListener for the form on submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkFields([username,email,password,password2]);
    checkLength(username,6,10);
    checkLength(password,8,20);
    ValidateEmail(email);
    MatchPassword(password,password2);
   
});