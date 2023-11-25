const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone-number');
const form = document.getElementById('add-form');

let isFirstNameValidation, isLastNameValidation, isPhoneNumberValidation;

function createError(input, errorText) {
  input.parentNode.classList.add('error-box');
  input.classList.add('error-input');

  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error-div');
  errorDiv.innerText = errorText;

  input.after(errorDiv);
}

function removeError(input) {
  if (input.parentNode.classList.contains('error-box')) {
    input.classList.remove('error-input');
    input.parentNode.querySelector('.error-div').remove();
    input.parentNode.classList.remove('error-box');
  }
}

firstName.addEventListener('change', () => {
  
  removeError(firstName);

  if (firstName.value.replace(/\s/g, '').length === 0) {
    createError(firstName, 'Enter your first name');
    isFirstNameValidation = false;
  } else if (!firstName.value.match(/^[A-Za-z]+$/)) {
    createError(firstName, 'First name must have alphabet characters only');
    isFirstNameValidation = false;
  } else if (firstName.value.length < 3 || firstName.value.length > 16) {
    createError(firstName, 'Invalid first name');
    isFirstNameValidation = false;
  } else {
    isFirstNameValidation = true;
  }
});

lastName.addEventListener('change', () => {

  removeError(lastName);

  if (lastName.value.replace(/\s/g, '').length === 0) {
    createError(lastName, 'Enter your last name');
    isLastNameValidation = false;
  } else if (!lastName.value.match(/^[A-Za-z]+$/)) {
    createError(lastName, 'Last name must have alphabet characters only');
    isLastNameValidation = false;
  } else if (lastName.value.length < 3 || lastName.value.length > 16) {
    createError(lastName, 'Invalid last name');
    isLastNameValidation = false;
  } else {
    isLastNameValidation = true;
  }
});

phoneNumber.addEventListener('change', () => {
  removeError(phoneNumber);

  if (phoneNumber.value.replace(/\s/g, '').length === 0) {
    createError(phoneNumber, 'Enter your phone number');
    isPhoneNumberValidation = false;
  } else if (!phoneNumber.value.match(/^[\d,\s,\+,\-)]{3,20}/)) {
    createError(phoneNumber, 'Invalid phone number');
    isPhoneNumberValidation = false;
  } else {
    isPhoneNumberValidation = true;
  }
});

const resultDiv = document.createElement('div');

form.addEventListener('change', () => {
  resultDiv.innerHTML = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isFirstNameValidation && isLastNameValidation && isPhoneNumberValidation) {
    resultDiv.innerHTML = `Thank you for submitting the form, your details:<br>First name: ${firstName.value}<br>Last name: ${lastName.value}<br>Phone number: ${phoneNumber.value}`;
    form.append(resultDiv);
  }
});
