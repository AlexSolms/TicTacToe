let ticTacArray = [[10, 11, 12][13, 14, 15][16, 17, 18]];

function checkIfWon() {
    const result = checkMatrix(ticTacArray);
    console.log(result); // false

}

function ceckItAll() {
    let winRow = -1;
    if (horizontalCheck() != -1) {winRow = horizontalCheck(); return
    } else if(verticalCheck() != -1) {winRow = verticalCheck(); return
    } else if(rightDiagonalCheck() != -1) {winRow = rightDiagonalCheck(); return
    } else if(lefttDiagonalCheck() != -1) {winRow = lefttDiagonalCheck(); return
    }
    console.log(winRow);
}

function horizontalCheck() {
    for (let i = 0; i < 3; i++) {
        if (ticTacArray[i][0] === ticTacArray[i][1] && ticTacArray[i][1] === ticTacArray[i][2]) {
            return i;
        } else { return -1 }
    }
}

function verticalCheck() {
    for (let j = 0; j < 3; j++) {
        if (ticTacArray[0][j] === ticTacArray[1][j] && ticTacArray[1][j] === ticTacArray[2][j]) {
            return j + 4;
        } else { return -1 }
    }
}

function rightDiagonalCheck() {
    if (ticTacArray[0][0] === ticTacArray[1][1] && ticTacArray[1][1] === ticTacArray[2][2]) {
        return 7;
    }

}

function lefttDiagonalCheck() {
    if (ticTacArray[0][2] === ticTacArray[1][1] && ticTacArray[1][1] === ticTacArray[2][0]) {
        return 8;
    } else { return -1 }
}