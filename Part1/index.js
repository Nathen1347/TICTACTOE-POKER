const ticArr = [];

function play(selectedId){
    const playerSwitch = document.getElementById('player');
    const selectedSquare = document.getElementById(selectedId);
    
    if (playerSwitch.innerText === 'X'){
        playerSwitch.innerText = 'O';
        selectedSquare.innerText = 'X';
        ticArr[selectedId] = 'X';
    } else{
        playerSwitch.innerText = 'X';
        selectedSquare.innerText = 'O';
        ticArr[selectedId] = 'O';
    }
}

const topLeft = ticArr[0];
const topMiddle = ticArr[1];
const topRight = ticArr[2];
const middleLeft = ticArr[3];
const middle = ticArr[4];
const middleRight = ticArr[5];
const bottomLeft = ticArr[6];
const bottomMiddle = ticArr[7];
const bottomRight = ticArr[8];

if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
    alert(`${topLeft} has won!`);
}
if(middleLeft !==undefined && middleLeft === middle && middleLeft === middleRight){
    alert(`${middleLeft} has won!`);
}
if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
    alert(`${bottomleft} has won!`);
}
if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} has won!`);
}
if(topMiddle !== undefined && topMiddle === middle && topMiddle === bottomMiddle){
    alert(`${topMiddle} has won!`);
}
if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} has won!`);
}
if(topLeft !== undefined && topLeft === middle && topLeft === bottomRight){
    alert(`${topLeft} has won!`);
}
if(topRight !== undefined && topRight === middle && topRight === bottomLeft){
    alert(`${topRight} has won!`);
}

let full = true;
for (let i = 0; i <= ticArr.length; i++){
    if(ticArr[i] === undefined){
        full = false;
    }
    if(full === true){
        alert("Tie game, no winner!");
    }
}
