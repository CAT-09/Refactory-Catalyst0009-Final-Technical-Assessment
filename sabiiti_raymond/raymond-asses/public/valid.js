const Surname = document.form1.surname;
const Givenname = document.form1.givenname;
const image = document.form1.photo;
const Gender = document.form1.gender;
const place = document.form1.Place;
const nationlty = document.form1.Nationality;
const Date = document.form1.DOB;


const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id4 = document.getElementById('id4');
const div = document.getElementsByClassName('flex-gender');
const id5 = document.getElementById('id5');
const id7 = document.getElementById('id7');
const id8 = document.getElementById('id8');
const yerror = document.getElementById('year');

const nuerror = document.getElementById('cont');
const merr = document.getElementById('Em');
const paserror = document.getElementById('pass');
const gend = document.getElementById('gend');
const picerror = document.getElementById('PE');



const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;


const validate = (event) => {
    //validation for the birthname
    let valid = true;
    const Sur_name = Surname.value.trim();
    if (Sur_name == '') {
        Surname.style = 'border: 2px solid red';
        id1.innerHTML = 'Enter Surname';
        id1.style = 'color:red;  font-size:0.7em;';
        Surname.focus();
        valid = false;

    } else if (!Sur_name.match(capitalize)) {
        Surname.style = 'border: 2px solid red';
        id1.innerHTML = 'Should start with acapital letter';
        id1.style = 'color:red;  font-size:0.7em';
        Surname.focus();
        valid = false;
    } else if (!Sur_name.length < 2 > 16) {
        Surname.style = 'border: 2px solid red';
        id1.innerHTML = 'Should be betwen 1 to 16 characters';
        id1.style = 'color:red;  font-size:0.7em';
        Surname.focus();
        valid = false;
    } else {
        Surname.style.border = ' 1px solid green';
        id1.innerHTML = '';
    }

    const Given_name = Givenname.value.trim();
    if (Given_name == '') {
        Givenname.style = 'border: 2px solid red';
        id2.innerHTML = 'Enter Givenname';
        id2.style = 'color:red;  font-size:0.7em;';
        Givenname.focus();
        valid = false;

    } else if (!Given_name.match(capitalize)) {
        Givenname.style = 'border: 2px solid red';
        id2.innerHTML = 'Should start with acapital letter';
        id2.style = 'color:red;  font-size:0.7em';
        Givenname.focus();
        valid = false;
    } else if (!Given_name.length < 2 > 16) {
        Givenname.style = 'border: 2px solid red';
        id2.innerHTML = 'Should be betwen 1 to 16 characters';
        id2.style = 'color:red;  font-size:0.7em';
        Givenname.focus();
        valid = false;
    } else {
        Givenname.style.border = ' 1px solid green';
        id2.innerHTML = '';
    }


    // if (Gender == '') {
    //     div.style = 'border: 2px solid red';
    //     id4.innerHTML = 'Enter date of birth';
    //     id4.style = 'color:red;  font-size:0.7em;';
    //     div.focus();
    //     valid = false;

    // } else {
    //     div.style.border = ' 1px solid green';
    //     id4.innerHTML = '';
    // }


    const dateofbirth = Date.value.trim();
    if (dateofbirth == '') {
        Date.style = 'border: 2px solid red';
        id5.innerHTML = 'Enter date of birth';
        id5.style = 'color:red;  font-size:0.7em;';
        Date.focus();
        valid = false;

    } else {
        Date.style.border = ' 1px solid green';
        id5.innerHTML = '';
    }

    const Plac = place.value.trim();
    if (Plac == '') {
        place.style = 'border: 2px solid red';
        id7.innerHTML = 'Enter place of residance';
        id7.style = 'color:red;  font-size:0.7em;';
        place.focus();
        valid = false;

    } else if (!Plac.match(capitalize)) {
        place.style = 'border: 2px solid red';
        id7.innerHTML = 'Should start with acapital letter';
        id7.style = 'color:red;  font-size:0.7em';
        place.focus();
        valid = false;
    } else if (!Plac.length < 2 > 16) {
        place.style = 'border: 2px solid red';
        id7.innerHTML = 'Should be betwen 1 to 16 characters';
        id7.style = 'color:red;  font-size:0.7em';
        place.focus();
        valid = false;
    } else {
        place.style.border = ' 1px solid green';
        id7.innerHTML = '';
    }






    const Ntnlty = nationlty.value.trim();
    if (Ntnlty == '') {
        nationlty.style = 'border: 2px solid red';
        id8.innerHTML = 'Enter nationality';
        id8.style = 'color:red;  font-size:0.7em;';
        nationlty.focus();
        valid = false;

    } else if (!Ntnlty.match(capitalize)) {
        nationlty.style = 'border: 2px solid red';
        id8.innerHTML = 'Should start with acapital letter';
        id8.style = 'color:red;  font-size:0.7em';
        nationlty.focus();
        valid = false;
    } else {
        nationlty.style.border = ' 1px solid green';
        id8.innerHTML = '';
    }

    if (!valid) {
        event.preventDefault();
        return false;

    }

};

const myformartist = document.getElementById('myform');

myformartist.addEventListener('submit', (event) => {
    validate(event);
});