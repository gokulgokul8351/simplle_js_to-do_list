let form = document.getElementById('login-form')
let emailError = document.querySelector('.emailError')
let passError = document.querySelector('.passError')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validateEmail()
  validatePassword()

  if (
    emailError.classList.contains('success') &
    passError.classList.contains('success')
  ) {
    window.location.assign('./home.html')
  }
})

let showBtn = document.querySelector('.showPass')

function passShow() {
  let input = document.getElementById('pass')
  if (input.type == 'password') {
    input.type = 'text'
    showBtn.innerHTML = 'Hide'
  } else {
    input.type = 'password'
    showBtn.innerHTML = 'Show'
  }
}

function validateEmail() {
  let userEmail = document.getElementById('email').value
  if (userEmail.length == 0) {
    emailError.classList.remove('success')
    emailError.innerHTML = 'Required email'
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
    passError.innerHTML = 'Required password'
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
