const gameboard = (() => {
    const board = ['','','','','','','','',''];
    return{board};
})();

// Factory function for players/users
const player = (name, symbol) => {
    return{name, symbol};
}

let user1;
let user2;

// User creation
const userManagement = (() => {
    let startBtn = document.querySelector("#startBtn")
    startBtn.addEventListener("click", () => {
        let player1 = document.querySelector("#player1").value || "Player 1";
        let player2 = document.querySelector("#player2").value || "Player 2";
        let p1 = document.querySelector("#p1");
        let p2 = document.querySelector("#p2");

        let restartBtn = document.querySelector("#restartBtn");
        restartBtn.classList.remove("hidden");
        startBtn.classList.add("hidden");

        let input1 = document.querySelector("#player1");
        input1.classList.add("hidden");
        let input2 = document.querySelector("#player2");
        input2.classList.add("hidden");
        let versus = document.querySelector("#vs");
        versus.classList.remove("hidden");

        p1.innerText = player1 + " (X)";
        p2.innerText = player2 + " (O)";

        user1 = player(player1, "X");
        user2 = player(player2, "O")
        playGame.addClick();
    })

    restartBtn.addEventListener("click", () => {
        location.reload();
    })
   
    
})();



const playGame = (() => {
    const {board} = gameboard;

    let symbol = '';
    let winner = '';

    

    const markSpot = (e) => {
        const targetArrayIndex = board[`${e.target.id}`];
        if (symbol === '') {
            symbol = user1.symbol;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};console.log(board);
        } else if (symbol === user1.symbol) {
            symbol = user2.symbol; 
            winner = user2.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)}; console.log(board);
        }else if (symbol === user2.symbol) {
            symbol = user1.symbol; 
            winner = user1.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)}; console.log(board);
        }
        const {renderMarks} = render;
        renderMarks();
        checkWinner();
    }

    function checkWinner() {
        const announcement = document.querySelector("#announceWinner");
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;} 
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {removeClick(); announcement.textContent = `${winner} Wins!`; announcement.classList.remove("hidden"); symbol = ''; return;}
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {removeClick(); announcement.textContent = "Draw!"; announcement.classList.remove("hidden"); symbol = ''; return;}
    }

    const squares = Array.from(document.getElementsByClassName('box'));

    function addClick() {
        squares.forEach((box) => box.addEventListener('click', markSpot));
    }
    function removeClick() {
        squares.forEach((box) => box.removeEventListener('click', markSpot));
    }

    return{addClick};
})();


const render = (() => {
    const {board} = gameboard;

    function renderMarks() {
        for (let i=0; i < board.length; i++) {
            const targetBox = document.getElementById(`${i}`);
            targetBox.textContent = board[i];
        }
    }
    return{renderMarks}
})();