const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value;

    if (name.length > 5) {
        nameError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    } else {
        nameError.innerHTML = "Name must be at least 6 characters";
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email";
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    }
}

function validateSubject() {
    const subject = document.getElementById("contact-subject").value;

    if (subject.length < 15) {
        subjectError.innerHTML = "Please enter a minimum of 15 characters";
        return false;
    } else {
        subjectError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("contact-message").value;
    const required = 25;
    const left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = `${left} more characters are required`;
        return false;
    } else {
        messageError.innerHTML = `<i class="fa-solid fa-check">`;
        return true;
    }
}

function validateForm(event) {
    event.preventDefault(); 

    if (!validateName() || !validateEmail() || !validateMessage() || !validateSubject()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix errors to submit";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
    } else {
       
        event.target.submit();
    }
}

const form = document.querySelector(".form-container");
form.addEventListener("submit", validateForm);
