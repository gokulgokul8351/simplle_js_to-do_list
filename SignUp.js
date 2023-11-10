let form = document.getElementById('my-form')

let formGroup = document.querySelectorAll('.form-group')
let nameError = document.querySelector('.nameError')
let emailError = document.querySelector('.emailError')
let passError = document.querySelector('.passwordError')
let passConfirmError = document.querySelector('.passwordConfirmError')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateName()
  validateEmail()
  validatePassword()
  validateConfirmPass()

  if (isFormValid() == false) {
    form.submit()
  } else {
    window.location.assign('./index.html')
  }
})

let showBtn = document.querySelector('.showPass')

function passShow() {
  let input = document.getElementById('Confirmpass')
  if (input.type == 'password') {
    input.type = 'text'
    showBtn.innerHTML = 'Hide'
  } else {
    input.type = 'password'
    showBtn.innerHTML = 'Show'
  }
}

function isFormValid() {
  const Container = form.querySelectorAll('span')
  let result

  Container.forEach((container) => {
    if (
      container.classList.contains(
        'nameError',
        'emailError',
        'passError',
        'passConfirmError'
      )
    ) {
      result = false
    } else if (container.classList.contains('success')) {
      result = true
    }
  })
  return result
}

function validateName() {
  let userName = document.getElementById('name').value
  if (userName.length == 0) {
    nameError.classList.remove('success')
    nameError.innerHTML = 'Name is required'
  } else if ((userName.length > 0) & (userName.length < 3)) {
    nameError.classList.remove('success')
    nameError.innerHTML = 'Name too sort'
  } else {
    nameError.classList.add('success')

    nameError.innerHTML = `<i class="uil uil-grin success"></i>`
  }
}

function validateEmail() {
  let userEmail = document.getElementById('email').value
  if (userEmail.length == 0) {
    emailError.classList.remove('success')
    emailError.innerHTML = 'Email is required'
  } else if ((userEmail.length > 0) & (userEmail.length < 15)) {
    emailError.classList.remove('success')
    emailError.innerHTML = 'Email not valid'
  } else {
    emailError.classList.add('success')

    emailError.innerHTML = `<i class="uil uil-grin success"></i>`
  }
}

function validatePassword() {
  let userPassword = document.getElementById('pass').value

  if (userPassword.length == 0) {
    passError.classList.remove('success')
    passError.innerHTML = 'Password is required'
  }
  if ((userPassword.length > 0) & (userPassword.length < 8)) {
    passError.classList.remove('success')
    passError.innerHTML = 'Minimum 8 digit required'
  }
  if (userPassword.length >= 8) {
    passError.classList.add('success')

    passError.innerHTML = `<i class="uil uil-grin success"></i>`
  }
}

function validateConfirmPass() {
  let userPassword = document.getElementById('pass').value
  let ConfirmPass = document.getElementById('Confirmpass').value

  if (ConfirmPass.length == 0) {
    passConfirmError.classList.remove('success')
    passConfirmError.innerHTML = 'Confirm password'
  } else if (userPassword.length !== ConfirmPass.length) {
    passConfirmError.classList.remove('success')
    passConfirmError.innerHTML = `Pass doesn't match`
  } else if (ConfirmPass !== userPassword) {
    passConfirmError.classList.remove('success')
    passConfirmError.innerHTML = `Mismatch`
  } else {
    passConfirmError.classList.add('success')
    passConfirmError.innerHTML = `<i class="uil uil-grin success"></i>`
  }
}
