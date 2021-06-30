let squares = document.querySelectorAll('.square');
let turn = document.querySelector('h1');
let reset = document.querySelector('button');
let clickCount = 0;
let one = squares[0];
let two = squares[1];
let three = squares[2];
let four = squares[3];
let five = squares[4];
let six = squares[5];
let seven = squares[6];
let eight = squares[7];
let nine = squares[8];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    // console.log(this.style.background)
    if (turn.innerText === 'Red Turn' && this.style.background === "blue") {
      this.style.background = "blue";
      turn.innerText = "Red Turn";
    } else if (turn.innerText === 'Blue Turn' && this.style.background === "red") {
      this.style.background = "red";
      turn.innerText = "Blue Turn";
    } else if (turn.innerText === 'Red Turn' && this.style.background === "red") {
      this.style.background = "red";
      turn.innerText = "Red Turn";
    } else if (turn.innerText === 'Blue Turn' && this.style.background === "blue") {
      this.style.background = "blue";
      turn.innerText = "Blue Turn";
    } else if (turn.innerText === 'Red Turn') {
      this.style.background = "Red";
      turn.innerText = "Blue Turn"
    } else if (turn.innerText === 'Blue Turn') {
      this.style.background = "blue";
      turn.innerText = "Red Turn";
    }
    clickCount ++;
    // console.log(clickCount)
    checkWinner()
  })
}

reset.addEventListener('click', function () {
  for (let j = 0; j < squares.length; j++) {
    window.location.reload()
  }
})

function checkRow(a, b, c) {
  let redWins;
  let blueWins;
  if (a.style.background === 'red' && b.style.background === 'red' && c.style.background === 'red') {
    turn.innerText = "RED WINS";
    redWins = true;
  } else if (a.style.background === 'blue' && b.style.background === 'blue' && c.style.background === 'blue') {
    turn.innerText = "Blue WINS";
    blueWins = true;
  } else if (clickCount === 9 && redWins !== true && blueWins !== true) {
    turn.innerText = "IT'S A TIE";
  }
}

function checkWinner() {
  checkRow(one, two, three)
  checkRow(four, five, six)
  checkRow(seven, eight, nine)
  checkRow(one, four, seven)
  checkRow(two, five, eight)
  checkRow(three, six, nine)
  checkRow(one, five, nine)
  checkRow(three, five, seven)
}