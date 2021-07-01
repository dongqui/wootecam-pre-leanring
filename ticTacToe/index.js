const board =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let turnCount = 0;
let player = 1;
const container = document.getElementById('container');
container.addEventListener('click', clickHandler);
render();

function clickHandler(e) {
  turnCount++;
  const [ row, col ] = e.target.id.split('').map(Number);
  if (!board[row][col]) {
    board[row][col] = player;
    render();
    check(row, col);
    toggleTurn();
  }
}

function toggleTurn() {
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }
}

function render() {
  container.innerHTML = '';
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (+board[row][col] === 1) {
        container.innerHTML += `<div id="${row}${col}" class="square red"></div>`
      } else if (+board[row][col] === 2) {
        container.innerHTML += `<div id="${row}${col}" class="square blue"></div>`
      } else {
        container.innerHTML += `<div id="${row}${col}" class="square"></div>`
      }
    }
  }
}

function check(row, col) {
  const rowSuccess = board[row].every(v => v === player);
  const colSuccess = (board[0][col] === player && board[1][col] === player && board[2][col] === player);
  const diagonalSuccess =
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player);
  if (rowSuccess || colSuccess || diagonalSuccess) {
    setTimeout(() => {
      alert(`플레이어 ${player} 승리`)
    }, 100)
  } else if (turnCount === 9) {
    setTimeout(() => {
      alert('무승부')
    }, 100)
  }
}
