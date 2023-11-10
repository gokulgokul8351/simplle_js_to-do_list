const inputBox = document.getElementById('input-boxs')
const listTodo = document.getElementById('list-todo')

let addTask = () => {
  if (inputBox === '') {
    alert('You must write something!')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listTodo.appendChild(li)
    let span = document.createElement('button')
    let bt = span.classList.add('del')
    span.innerHTML = 'X'
    li.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

listTodo.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('check')
      saveData()
    } else if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false
)

let saveData = () => {
  localStorage.setItem('data', listTodo.innerHTML)
}

let showTask = () => {
  listTodo.innerHTML = localStorage.getItem('data')
}

showTask()
