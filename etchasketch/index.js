const etchContainer = document.getElementById('etchContainer')
const newNumDivs = document.getElementById('newNumDivs')
const submit = document.getElementById('submit')

let numDivs = 16

createBoard()

submit.addEventListener('click', () => {
  numDivs = newNumDivs.value
  if (numDivs > 100){
    alert('Number too high, please enter one below 100')
  } 
  createBoard()
  newNumDivs.value = ''
})

function createBoard() {
  etchContainer.innerHTML = ''
  for(i = 1; i <= numDivs; i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('etchDiv')
    newDiv.innerText = i
    etchContainer.appendChild(newDiv)
  }
}

const etchDivs = document.getElementsByClassName('etchDiv')

Array.from(etchDivs).forEach(div => div.addEventListener('mouseover', function() {
  console.log('you are drawing')
  div.style.backgroundColor = 'black';
  div.style.opacity = (parseFloat(this.style.opacity || 0) + 0.1)
}))

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
  Array.from(etchDivs).forEach(div => clearDivs(div))
})

function clearDivs(div){
  div.style.backgroundColor = 'white';
  div.style.opacity = 1
}
