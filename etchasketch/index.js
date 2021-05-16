const etchContainer = document.getElementById('etchContainer')


for(i = 1; i <= 16; i++){
  const newDiv = document.createElement('div')
  newDiv.classList.add('etchDiv')
  newDiv.innerText = i
  etchContainer.appendChild(newDiv)
}