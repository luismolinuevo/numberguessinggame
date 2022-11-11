let randomNumber = 0;
let arr = [];
let playerTurn = true;
let fd = document.getElementById("sumbitName");
let wrong = document.getElementById("wrong");
let resetButton = document.getElementById("resetButton")
let numContain = document.getElementById("numberInputContainer")
let numberInputs = document.getElementById("inputs")
let whosTurn = document.getElementById("winnerOutput")



class Number {
    constructor() {
        this.number = randomNumber;
        this.array = arr;
    }

    setNumber() {
        for(let i = 1; i < 11; i++) {
            arr.push(i);
        }

        let rand = arr[Math.floor((Math.random() * arr.length))];
        randomNumber = rand;
    }
}

let test = new Number()
test.setNumber();

function getNames() {
    let playerOneName = document.getElementById("name1").value;
    let playerTwoName = document.getElementById("name2").value;

    let namesContain = document.getElementById("namesInput")

    namesContain.style.display = "none"
    console.log(randomNumber);
    changeSceneOne();
    return [playerOneName, playerTwoName];
}

function changeSceneOne() {
    
    numContain.style.display = "flex" 
    
}

// function whosTurnIsIt() {
//     if(playerTurn == true) {
//         whosTurn.textContent = `${getNames()[0]} turn`
//     }

//     else if(playerTurn == false) {
//         whosTurn.textContent = `${getNames()[1]} turn`
//     } 
// } 

function findWinner() {
    let numInput = document.getElementById("numberInput").value;
    let winnerOutPut = document.getElementById("winnerOutput");
        
    if(numInput == randomNumber && playerTurn == true) {
        winnerOutPut.textContent = `${getNames()[0]} has Won`;
        resetButton.style.display = 'flex'
        numberInputs.style.display = "none"
    }
            
    if(numInput == randomNumber && playerTurn == false) {
        winnerOutPut.textContent = `${getNames()[1]} has Won`;
        resetButton.style.display = 'flex'
        numberInputs.style.display = "none"
    }

    if(numInput != randomNumber) {
        whosTurn.textContent = "Wrong next players turn"
    }

    else {
        
    }
}

const resetGame = resetButton.addEventListener("click", function() {
     //Reset the game
    window.location.reload()
})

function changeTurn() {
    let numInput = document.getElementById("numberInput");
    numInput.value = ''
    playerTurn = !playerTurn;
}
