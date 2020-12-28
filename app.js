document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);



function validateName() {
    const name = document.getElementById('name');
    const re = /^([a-zA-Z]{2,20})([-. ])?([a-zA-Z]{2,20})([-. ])?([a-zA-Z]{2,20})$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid')

    } else {
        name.classList.remove('is-invalid')
    }



}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{4}$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid')

    } else {
        zip.classList.remove('is-invalid')
    }


}

function validateEmail() {
    const zip = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid')

    } else {
        email.classList.remove('is-invalid')
    }

}

function validatePhone() {


    const phone = document.getElementById('phone');
    const re = /^(0047|\+47 | 47)?[2-9]\d{7}$/;

    if (!re.test(zip.value)) {
        phone.classList.add('is-invalid')

    } else {
        phone.classList.remove('is-invalid')
    }

}
