const div = document.createElement('div');
const redText = document.createElement('p')
const blueText = document.createElement('h3')
const inDiv = document.createElement('h3')
const meToo = document.createElement('p')

div.style['backgroundColor'] = 'pink'
div.style.border = "thick solid black"
div.style.textAlign = "center"

inDiv.textContent = "I'm in a div"
meToo.textContent = "Me too!"

div.appendChild(inDiv)
div.appendChild(meToo)


redText.textContent = "Red text"
redText.style['color'] = 'red'


blueText.textContent = "Blue Text"
blueText.style.color = "blue"


const newContent = document.querySelector('#newContent')
newContent.appendChild(redText)
newContent.appendChild(blueText)
newContent.appendChild(div)

const btn = document.querySelector('#btn')
btn.addEventListener('click', function (e) {
  console.log(e)
})

function alertFunction() {
  alert('it is a click')
}
