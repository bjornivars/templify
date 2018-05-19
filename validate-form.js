

checkButton()

// regex form

document.forms.test.firstName.addEventListener("blur", validateFirstName);
document.forms.test.lastName.addEventListener("blur", validateLastName);
document.forms.test.email.addEventListener("blur", validateEmail);
document.forms.test.subject.addEventListener("blur", validateSubject);
document.forms.test.msg.addEventListener("blur", validateMsg);





var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validSubject = false;
var validMsg = false;




// Firstname
function validateFirstName() {
    //console.log("Validating name");
    var firstName = document.forms.test.firstName.value;
    var firstNameErrorElement = document.getElementById('firstName');
    if (firstName == "") {
        firstNameErrorElement.style.border="2px solid #8a3636";
        validFirstName = false;
    } else {
        firstNameErrorElement.style.border="none";
        firstNameErrorElement.innerHTML = "";
        validFirstName = true;
    }
    checkButton();
}

// Lastname

function validateLastName() {
    //console.log("Validating name");
    var lastName = document.forms.test.lastName.value;
    var lastNameErrorElement = document.getElementById('lastName');
    if (lastName == "") {
        lastNameErrorElement.style.border="2px solid #8a3636";
        validLastName = false;
    } else {
        lastNameErrorElement.style.border="none";
        lastNameErrorElement.innerHTML = "";
        validLastName = true;
    }
    checkButton();
}

// Email


function validateEmail() {
    //console.log("Validating email");
    var email = document.forms.test.email.value;
    var emailErrorElement = document.getElementById('email');
    var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,25}$/i;
    if (!emailpattern.test(email)) {
        emailErrorElement.style.border="2px solid #8a3636";
        validEmail = false;
    } else {
        emailErrorElement.style.border="none";
        emailErrorElement.innerHTML = "";
        validEmail = true;
    }
    checkButton();
}

// Phone

function validateSubject() {
    //console.log("Validating subject");
    var subject = document.forms.test.subject.value;
    var subjectErrorElement = document.getElementById('subject');
   // var subjectpattern = /^(?![\s.]+$)[a-zA-Z\s.]*$/i;
    if (subject == "") {
        subjectErrorElement.style.border="2px solid #8a3636";
        validSubject = false;
    } else {
        subjectErrorElement.style.border="none";
        subjectErrorElement.innerHTML = "";
        validSubject = true;
    }
    checkButton();
}

// Address

function validateMsg() {
    //console.log("Validating name");
    var msg = document.forms.test.msg.value;
    var msgErrorElement = document.getElementById('msg');
    if (msg == "") {
        msgErrorElement.style.border="2px solid #8a3636";
        validMsg = false;
    } else {
        msgErrorElement.style.border="none";
        msgErrorElement.innerHTML = "";
        validMsg = true;
    }
    checkButton();
}

// Postal





function validateForm() {
    validateFirstName();
    validateLastName();
    validateEmail();
    validateSubject();
    validateMsg();


    return validFirstName && validLastName && validEmail && validSubject && validMsg;
}

function checkButton () {
    //console.log("checkbutton triggered")
    var btn = document.querySelector ("input[type='submit']");
    if (validFirstName && validLastName && validEmail && validSubject && validMsg)
    {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

