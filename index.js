const h1 = document.querySelector('h1')
const div = document.getElementById("paragraphs")
const p1 = createGreenParagraph("This is a paragraph")
const p2 = createGreenParagraph("This is also a paragraph")
const p3 = createGreenParagraph("This is new text")
const p4 = document.createElement('p')
h1.innerText = 'Hello World!!!!!'

h1.setAttribute("id", "header")

h1.classList.add("bigger-font")

// div.innerHTML = `
//   <p class="green-text">This is a paragraph</p>
//   <p class="green-text">This is also a paragraph</p>
// `

p4.innerText = 'This paragraph is going to be blue and cursive'

p4.style.fontSize = '18px'
p4.style.color = 'lightblue'
p4.style.fontFamily = "cursive, sans-serif"

function createGreenParagraph(text) {
  const p = document.createElement("p")
  p.innerText = text
  p.classList.add("green-text")
  return p
}

setTimeout(function(){
  div.appendChild(p1)
}, 1000)

setTimeout(function(){
  div.appendChild(p2)
}, 2000)

setTimeout(function(){
  div.appendChild(p3)
}, 3000)

setTimeout(function() {
  const p = document.getElementById("username-display")
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  const correctUsername = "Test1"
  const correctPassword = "abcd"

  if (username === correctUsername && password === correctPassword) {
    p.innerText = username
  } else {
    p.innerText = "Username or password didn't match"
  }
  p.style.display = "block"
}, 10000)



div.appendChild(p4)