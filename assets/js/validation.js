let submitForm=document.forms[0];

let formName=submitForm.name;
let formEmail=submitForm.email;
let formSubject=submitForm.subject;
let formMessage=submitForm.message;

let formSubmitButton=document.getElementById("submit-button");

let isNameValid=false;
let isEmailValid=false;
let isSubjectValid=false;
let isMessageValid=false;

formSubmitButton.disabled="true";
formSubmitButton.style.background="grey";

let emailAlert=document.querySelector("#email-alert");
let nameAlert=document.querySelector("#name-alert");

formName.addEventListener("keyup", e=>{
    let name=e.target.value;

    nameAlert.style.display="block";

    let nameRgx=/^[^\d]+$/;

    if(name.match(nameRgx)){
        nameAlert.style.display="none";
        isNameValid=true;
    }else if(name==""){
        nameAlert.style.display="none";
        isNameValid=false;
    }else{
        isNameValid=false;
    }
})

formEmail.addEventListener("keyup", e=>{
    let email=e.target.value;

    let emailRgx=/[a-z_0-9]+@[a-z]+\.(com|net|in)/;

    emailAlert.style.display="block";

    if(email.match(emailRgx)){
        emailAlert.style.display="none";
        isEmailValid=true;
    }else if(email==""){
        emailAlert.style.display="none";
        isEmailValid=false;
    }else{
        isEmailValid=false;
    }
})

formSubject.addEventListener("keyup", e=>{
    let subject=e.target.value;

    if(subject==""){
        isSubjectValid=false;
    }else{
        isSubjectValid=true;
    }
})

formMessage.addEventListener("keyup", e=>{
    let message=e.target.value;

    if(message==""){
        isMessageValid=false;
    }else{
        isMessageValid=true;
    }
})



document.addEventListener("keyup", e=>{
    if(isNameValid && isEmailValid && isSubjectValid && isMessageValid){
        formSubmitButton.disabled=false;
        formSubmitButton.style.background="#ffb727";
    }else{
        formSubmitButton.disabled="true";
        formSubmitButton.style.background="grey";
    }
})