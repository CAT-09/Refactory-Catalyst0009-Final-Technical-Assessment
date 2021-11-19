const validate = (event) => {
  const surname = document.studentregistration.surname;
  const givenName = document.studentregistration.givenname;
  const title = document.studentregistration.title;
  const sex = document.studentregistration.sex;
  const dateOfbirth = document.studentregistration.birthdate;
  const country = document.studentregistration.country;
  const residence = document.studentregistration.residence;
  const nationality = document.studentregistration.nationality;

  const surnameError = document.getElementById('surname-error');
  const givenNameError = document.getElementById('givenname-error');
  const titleError = document.getElementById('title-error');
  const sexError = document.getElementById('sex-error');
  const dateOfbirthError = document.getElementById('dateerror');
  const countryError = document.getElementById('surname-error');
  const residenceError = document.getElementById('residence-error');
  const nationalityError = document.getElementById('nationality-error');

  if (surname.value == '') {
    surname.focus();
    surnameError.innerHTML = 'Full Name Required';
    surnameError.style = 'color:#FF7F7F ';
    surname.style.border = '1px solid red';
    checkValid = false;
  }

  // validation of the Given name.
  if (givenName.value == '') {
    givenName.focus();
    givenNameError.innerHTML = 'Full Name Required';
    givenNameError.style = 'color:#FF7F7F ';
    givenName.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the full name.
  if (title.value == '') {
    title.focus();
    titleError.innerHTML = 'Full Name Required';
    titleError.style = 'color:#FF7F7F ';
    title.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the sex.
  if (sex.value == '') {
    sex.focus();
    sexError.innerHTML = 'Full Name Required';
    sexError.style = 'color:#FF7F7F ';
    sex.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the date of birth.
  if (dateOfbirth.value == '') {
    dateOfbirth.focus();
    dateOfbirthError.innerHTML = 'Full Name Required';
    dateOfbirthError.style = 'color:#FF7F7F ';
    dateOfbirth.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the country.
  if (country.value == '') {
    country.focus();
    countryError.innerHTML = 'Full Name Required';
    countryError.style = 'color:#FF7F7F ';
    country.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the residence.
  if (residence.value == '') {
    residence.focus();
    residenceError.innerHTML = 'Full Name Required';
    residenceError.style = 'color:#FF7F7F ';
    residence.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the nationality.
  if (nationality.value == '') {
    nationality.focus();
    nationalityError.innerHTML = 'Full Name Required';
    nationalityError.style = 'color:#FF7F7F ';
    nationality.style.border = '1px solid red';
    checkValid = false;
  }
  if (!checkValid) {
    event.preventDefault();
    return false;
  }
};

const studentform = document.getElementById('form');

studentform.addEventListener('submit', (event) => {
  validate(event);
});
