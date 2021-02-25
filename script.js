console.log('sup breh');
let squares = document.querySelectorAll('.square');
//console.log(squares[0].style.backgroundImage);
let turn = document.querySelector('h1');
console.log(turn.innerText)
let reset = document.querySelector('button');
console.log(reset)

for (let i = 0; i < squares.length; i ++) {
  squares[i].addEventListener('click', function() {
    console.log(this.style.background)
    if (turn.innerText === 'Red Turn' && this.style.background === "blue") {
      this.style.background = "blue";
    } else if (turn.innerText === 'Blue Turn' && this.style.background === "red") {
      this.style.background = "red";
    } else if (turn.innerText === 'Red Turn') {
      this.style.background = "Red";
      turn.innerText = "Blue Turn"
    } else if (turn.innerText === 'Blue Turn') {
      this.style.background = "blue";
      turn.innerText = "Red Turn"
    }
  })
}

reset.addEventListener('click', function(){
  for (let j = 0; j < squares.length; j ++) {
    console.log(squares[j].style.background);
    squares[j].style.background = "";
  }
})