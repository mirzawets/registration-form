const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone-number');
const form = document.getElementById('add-form');

let isFirstNameValidation;
let isLastNameValidation;
let isPhoneNumberValidation;

function removeError(input) {
  input.classList.remove('error-input');

  const parent = input.parentNode;
  if (parent.classList.contains('error-box')) {
    parent.querySelector('.error-div').remove();
    parent.classList.remove('error-box');
  }
}

function createError(input, text) {
  input.classList.add('error-input');

  const parent = input.parentNode;
  parent.classList.add('error-box');

  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error-div');
  errorDiv.innerText = text;

  parent.append(errorDiv);
}

firstName.addEventListener('change', function () {
  if (firstName.value === 'Sergey') {
    alert('Имя как у нашего преподователя');
  }

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

lastName.addEventListener('change', function () {
  if (lastName.value === 'Eremenko') {
    alert('Фамилия как у нашего наставника');
  }

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

phoneNumber.addEventListener('change', function () {
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

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (isFirstNameValidation && isLastNameValidation && isPhoneNumberValidation) {
    resultDiv.innerHTML = `Спасибо за отправку формы, ваши данные:<br>FirstName : ${firstName.value}<br>LastName : ${lastName.value}<br>PhoneNumber : ${phoneNumber.value}`;
    form.after(resultDiv);
  }
});
