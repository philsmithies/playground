const etchContainer = document.getElementById('etchContainer')
const newNumDivs = document.getElementById('newNumDivs')
const submit = document.getElementById('submit')
const resetButton = document.getElementById('resetButton');
const etchDivs = document.getElementsByClassName('etchDiv')
const amountOfPixels = document.getElementById('amountOfPixels')

let numDivs = 16

createBoard(numDivs)

function createBoard(numDivs) {
  etchContainer.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`;
  etchContainer.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`;
  for(i = 1; i <= (numDivs*numDivs); i++){
    amountOfPixels.innerText = `Currently ${numDivs} pixels per side`
    const newDiv = document.createElement('div')
    newDiv.classList.add('etchDiv')
    etchContainer.appendChild(newDiv)
  }
  drawDivs()
}

function drawDivs() {
  Array.from(etchDivs).forEach(div => div.addEventListener('mouseover', function() {
    console.log('you are drawing')
    div.style.backgroundColor = 'black';
    div.style.opacity = (parseFloat(this.style.opacity || 0) + 0.2)
  }))
}

submit.addEventListener('click', () => {
  numDivs = parseInt(newNumDivs.value)
  if (numDivs > 100){
    alert('Number too high, please enter one below 100')
  } else {
    etchContainer.innerHTML = ''
    createBoard(numDivs) 
  }
  newNumDivs.value = ''
})

resetButton.addEventListener('click', () => {
  Array.from(etchDivs).forEach(div => clearDivs(div))
})

function clearDivs(div){
  etchContainer.style.backgroundColor = 'white'
  div.style.opacity = 0
}
