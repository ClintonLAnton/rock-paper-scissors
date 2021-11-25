function computerPlay(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let computerChoice = arr[randomIndex];
    return computerChoice;
}

let array = ["rock", "paper", "scissors"];
let result = computerPlay(array)

console.log(result);