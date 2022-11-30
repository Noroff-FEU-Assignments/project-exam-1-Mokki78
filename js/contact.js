const nameError = document.getElementById("name-error");

const emailError = document.getElementById("email-error");

const subjectError = document.getElementById("subject-error");

const messageError = document.getElementById("message-error");

const submitError = document.getElementById("submit-error");





function validateName() {
    const name = document.getElementById("contact-name").value;

        if(name.length < 5){ 
        nameError.innerHTML = "name is required";
        return false;
     } 
     
       else
        nameError.innerHTML =  `<i class="fa-solid fa-check">`;
        return true;

}

validateName();

function validateEmail() {
    const email = document.getElementById("email").value;

        if(email.length == 0){ 
        emailError.innerHTML = "please enter an email";
        return false;
     } 

      if(!email.match(/^[A-Za-z]\._-[0-9]*[@][ A-Za-z]*[\.][a-z]{2,4}$/)){ 
        emailError.innerHTML = "please enter a valid email";
        return false;
     } 


     emailError.innerHTML =  `<i class="fa-solid fa-check">`;
     return true;

       
}

validateEmail();



function validateSubject() {
    const subject = document.getElementById("contact-subject").value;

        if(subject.length < 15){ 
        subjectError.innerHTML = "please enter a minimum of 15 characters";
        return false;
     } 
     
       else
        subjectError.innerHTML =  `<i class="fa-solid fa-check">`;
        return true;

}



validateSubject();

function validateMessage() {
    const message = document.getElementById("contact-message").value;
    const required = 25;
    const left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = `${left}more characters is required`;
        return false;
    }

    messageError.innerHTML =  `<i class="fa-solid fa-check">`;
    return true;

   

}

validateMessage();

function validateForm() {
    if(!validateName() || !validateEmail() || !validateMessage || !validateSubject) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error to submit";
    setTimeout(function(){submitError.style.display = "none"}, 3000);
    return false;
    }

}



const form = document.querySelector(".form-container");


form.onsubmit = () => {
    Event.preventDefault()
    
    
}
