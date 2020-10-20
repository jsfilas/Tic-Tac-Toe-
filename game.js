const gameboard = (() => {
    const gameboard = ['','','','','','','','',''];
    
    return{gameboard};
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

        p1.innerText = player1;
        p2.innerText = player2;

        user1 = player(player1, "X");
        user2 = player(player2, "O")
        
    })

    restartBtn.addEventListener("click", () => {
        location.reload();
    })

    
})();




