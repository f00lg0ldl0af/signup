const submitBtn = document.querySelector('.submit-btn');
const mainPage = document.querySelector('.main-grid');
const signupPage = document.querySelector('.after-signup');

let validCheck = 0;

// include toggle event for after sign up page to appear after creating account 
submitBtn.addEventListener('click', (e) => {

    // prevent from from being sent by cancelling the event 
    e.preventDefault();

    if (validCheck == 2 && !firstName.validity.valueMissing && !lastName.validity.valueMissing && pwd.validity.valid && cfmPwd.value == pwd.value) {
        mainPage.style.display = 'none'; /* hides the entire element; different from visibility: hidden where element contents will be invisible, but element stays in original position and size */
        signupPage.classList.remove('disabled');
    }    
});

/*     */

/* error msg for first name */
const firstName = document.querySelector('#firstname');
const firstNameError = document.querySelector('#firstname-error');
/*const firstNameError = document.querySelector('#firstname + div.error');
Note: p + img selects all <img> elements that are immediately preceded by a <p> element */
firstName.addEventListener("input", (e) => {
    if (firstName.value === '') {
        firstNameError.textContent = 'Required';
    } else {
        firstNameError.textContent = '';
    }
});

/* error msg for last name */
const lastName = document.querySelector('#lastname');
const lastNameError = document.querySelector('#lastname-error')
lastName.addEventListener("input", (e) => {
    if (lastName.value === '') {
        lastNameError.textContent = 'Required';
    } else {
        lastNameError.textContent = '';
    }
});

/* error msg for phone */
const mobile = document.querySelector('#mobile-number');
const mobileError = document.querySelector('#mobile-error');
mobile.addEventListener("input", (e) => {
    if (mobile.validity.patternMismatch)
    {
        mobileError.textContent = 'Please enter a valid mobile number';
        mobile.classList.add('still-not-valid');
    } 
    else {
        mobileError.textContent = '';
        validCheck++;
        mobile.classList.remove('still-not-valid');
    }
});

/* error msg for email */
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
/*const emailError = document.querySelector('#email + div.error');*/
email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        validCheck++;
        email.classList.remove('still-not-valid');
    }
    else {
        showError();
        email.classList.add('still-not-valid');
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Required";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email";
    } else if (email.validity.tooShort) {
        emailError.innerText = `Email should be at least ${email.minLength} characters \n Characters entered: ${email.value.length}`; // HTML does not know how to display \n; use .innerText to autotransform '\n' character to <br> break line tag
    }
}

/* error msg for pwd */
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('#pwd-error');
pwd.addEventListener("input", (e) => {
    if (pwd.validity.patternMismatch) {
        const currentPwd = pwd.value;
        const regExpDigit = /[0-9]/g;
        const regExpLowerCase = /[a-z]/g;
        const regExpUpperCase = /[A-Z]/g;
        const regExpSpecial = /[-\!\@\#\$\.\%\&\*]/g; /* this in HTML does not work; see equivalent in HTML */

        let result = '';

        if (regExpLowerCase.test(currentPwd)) {
            result += '';
        } else {
            result += "must contain at least 1 lowercase letter \n";
        }

        if (regExpUpperCase.test(currentPwd)) {
            result += '';
        } else {
            result += "must contain at least 1 uppercase letter \n";
        }

        if (regExpDigit.test(currentPwd)) {
            result += '';
        } else {
            result += "must contain at least 1 number \n";
        }
        if (regExpSpecial.test(currentPwd)) {
            result += '';
        } else {
            result += "must contain at least 1 special character \n";
        }
        if (currentPwd.length < 8 || currentPwd.length > 16 ) {
            result += "must be between 8 - 16 characters \n";
        } else {
            result += "";
        }
        
    pwdError.innerText = result;
    pwd.classList.add('still-not-valid');
 
} 
    else {
        pwdError.textContent = '';
        //validCheck++; increments with every character past 8 characters
        pwd.classList.remove('still-not-valid');


    }
});

/* error msg for pwd confirmation */
const cfmPwd = document.querySelector('#confirm-pwd');
const cfmPwdError = document.querySelector('#cfm-pwd-error');
cfmPwd.addEventListener('input', (e) => {
    if (cfmPwd.value !== pwd.value) {
        cfmPwdError.textContent = "password does not match";
    } else {
        cfmPwdError.textContent = '';
        //validCheck++;
    }
});


