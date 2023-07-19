let ticTacArray = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];

let corssOrCircle = true;


function setElement(index) {
    if (corssOrCircle === true){
        document.getElementById('box'+index).innerHTML = `<div class="cross"></div>`;
        SetValueInticTacArray(index);
        corssOrCircle = false;
    }else{
        document.getElementById('box'+index).innerHTML = `<div class="circle"></div>`;  
        SetValueInticTacArray(index);
        corssOrCircle = true;
    }
    document.getElementById('box'+index).onclick = null; 
}


function SetValueInticTacArray(index) {
    let row= Math.floor(+index / 3); //returns int 0,0,0,1,1,1,2,2,2
    let coloumn= +index % 3; // returns modulo 0,1,2,0,1,2,0,1,2
    if (corssOrCircle === true) {
        ticTacArray[row][coloumn]=1; 
    } else {ticTacArray[row][coloumn]=0;
    }
    LineAdd(ceckAllLines());
}

function reset() {
   ticTacArray = [[10, 11, 12],[13, 14, 15],[16, 17, 18]];
   for (let i = 0; i < 9; i++) {
    document.getElementById('box'+i).innerHTML ='';
    document.getElementById('box'+i).setAttribute('onclick',`setElement(${i})`);
   }
   removeWinningLine();
}

function ceckAllLines() {
    let winningLine = -1;
    if (horizontalCheck() != -1) {winningLine = horizontalCheck(); return winningLine;
    } else if(verticalCheck() != -1) {winningLine = verticalCheck(); return winningLine;
    } else if(rightDiagonalCheck() != -1) {winningLine = rightDiagonalCheck(); return winningLine;
    } else if(lefttDiagonalCheck() != -1) {winningLine = lefttDiagonalCheck(); return winningLine;
    }else return winningLine;
    
}

function horizontalCheck() {
    for (let i = 0; i < 3; i++) {
        if (ticTacArray[i][0] === ticTacArray[i][1] && ticTacArray[i][1] === ticTacArray[i][2]) {
            return i;
        }
    } return -1;
}

function verticalCheck() {
    for (let j = 0; j < 3; j++) {
        if (ticTacArray[0][j] === ticTacArray[1][j] && ticTacArray[1][j] === ticTacArray[2][j]) {
            return j + 3;
        }
    }return -1;
}

function rightDiagonalCheck() {
    if (ticTacArray[0][0] === ticTacArray[1][1] && ticTacArray[1][1] === ticTacArray[2][2]) {
        return 6;
    }else { return -1; }

}

function lefttDiagonalCheck() {
    if (ticTacArray[0][2] === ticTacArray[1][1] && ticTacArray[1][1] === ticTacArray[2][0]) {
        return 7;
    } else { return -1; }
}

//add clases for lines

function LineAdd(winningLine) {
        if (winningLine === 0) {document.getElementById('lines').classList.add('lineHorizontal0'); return}
        if (winningLine === 1) {document.getElementById('lines').classList.add('lineHorizontal1'); return}
        if (winningLine === 2) {document.getElementById('lines').classList.add('lineHorizontal2'); return}
        if (winningLine === 3) {document.getElementById('lines').classList.add('lineVertical0'); return}
        if (winningLine === 4) {document.getElementById('lines').classList.add('lineVertical1'); return}
        if (winningLine === 5) {document.getElementById('lines').classList.add('lineVertical2'); return}
        if (winningLine === 6) {document.getElementById('lines').classList.add('lineDiaLeft'); return}
        if (winningLine === 7) {document.getElementById('lines').classList.add('lineDiaRight'); return}
}


function removeWinningLine() {
    document.getElementById('lines').classList.remove('lineHorizontal0', 'lineHorizontal1', 'lineHorizontal2', 'lineVertical0', 'lineVertical1', 'lineVertical2', 'lineDiaLeft', 'lineDiaRight');
    
}