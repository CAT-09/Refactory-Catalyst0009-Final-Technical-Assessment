const surname = document.studentReg.txtsurname;
const givenName = document.studentReg.txtgiven;
const avatar = document.studentReg.profilepic;
const DoB = document.studentReg.txtDoB;
const Residence = document.studentReg.txtresidence;
const country = document.studentReg.txtnationality;
const nation = document.getElementById("country");
const femaleGender = document.getElementById("female");
const maleGender = document.getElementById("male");

const surnameError = document.getElementById("surnameErr");
const givenError = document.getElementById("givenErr");
const avatarError = document.getElementById("imageErr");
const DoBError = document.getElementById("txtDoB");
const residenceError = document.getElementById("residenceErr");
const countryError = document.getElementById("countryErr");
const genderError = document.getElementById("genderErr");
const nationError = document.getElementById("nationalityErr");

const validate = (e) => {
  let isValid = true;
  const stdSurname = surname.value.trim();
  if (stdSurname == "") {
    surname.style.border = "1px solid red";
    surnameError.innerHTML = "Field is required";
    surnameError.style = "color:red; margin-left: 110px; font-size: 10px";
    surname.focus();
    isValid = false;
  } else {
    surnameError.style.border = "1px solid green";
    surnameError.innerHTML = "";
  }

  const stdgiven = givenName.value.trim();
  if (stdgiven == "") {
    givenName.style.border = "1px solid red";
    givenError.innerHTML = "Field is required";
    givenError.style = "color:red; margin-left: 110px; font-size: 10px";
    givenName.focus();
    isValid = false;
  } else {
    givenError.style.border = "1px solid green";
    givenError.innerHTML = "";
  }

  const stdAvatar = avatar.value.trim();
  if (stdAvatar == "") {
    avatar.style.border = "1px solid red";
    avatar.focus();
    isValid = false;
  } else {
    avatar.style.border = "1px solid green";
  }

  const stdDoB = DoB.value.trim();
  if (stdDoB == "") {
    DoB.style.border = "1px solid red";
    DoBError.innerHTML = "Field is required";
    DoBError.style = "color:red; margin-left: 110px; font-size: 10px";
    DoB.focus();
    isValid = false;
  } else {
    DoBError.style.border = "1px solid green";
    DoBError.innerHTML = "";
  }

  const stdResidence = Residence.value.trim();
  if (stdResidence == "") {
    Residence.style.border = "1px solid red";
    residenceError.innerHTML = "Field is required";
    residenceError.style = "color:red; margin-left: 110px; font-size: 10px";
    Residence.focus();
    isValid = false;
  } else {
    residenceError.style.border = "1px solid green";
    residenceError.innerHTML = "";
  }

  const stdCountry = country.value.trim();
  if (stdCountry == "") {
    country.style.border = "1px solid red";
    countryError.innerHTML = "Field is required";
    countryError.style = "color:red; margin-left: 110px; font-size: 10px";
    country.focus();
    isValid = false;
  } else {
    countryError.style.border = "1px solid green";
    countryError.innerHTML = "";
  }
  if (femaleGender.checked == false && maleGender.checked == false) {
    genderError.innerHTML = "Please select your gender";
    genderError.style = "color:red; margin-left: 110px; font-size: 10px";
    isValid = false;
  } else {
    genderError.innerHTML = "";
  }

  

  if (!isValid) {
    e.preventDefault();
    return false;
  }
};

const stduentForm = document.getElementById("regForm");
stduentForm.addEventListener("submit", (e) => {
  validate(e);
});
