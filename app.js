    'use-strict'
let currentPlayer = 1;
let p1 = [];
let p2 =[];
let $activePlayer = $('#active-player')
                    .text(`It\'s Player ${currentPlayer}'s turn`);

(function() {
    
    playDice();   

})();

function playDice() {    
    $('.cell').click(function() {        
        if (currentPlayer === 1) {        
            p1.push($(this).attr('id'));
            $(this).off();
            currentPlayer = 2;
            putDice($(this).attr('id'), 'X');            
        } else {        
            p2.push($(this).attr('id'));
            $(this).off();
            currentPlayer = 1;
            putDice($(this).attr('id'), 'O');            
        };
        checkWinner() 
    } )
} 

function putDice(id, dice) {
    $activePlayer = $('#active-player')
                    .text(`It\'s Player ${currentPlayer}'s turn`);    
    $('#'+id).text(dice);
}

function checkWinner() {
    isWinnerCell(p1);
    isWinnerCell(p2);
}

function isWinnerCell(p=[]) {
    let rows = [["1","2","3"], ["4","5","6"], ["7","8","9"]];
    let cols = [["1","4","7"], ["2","5","8"], ["3","6","9"]];
    let firsDiag = ['1','5','9'];
    let secDiag = ['3','5','7'];

    for(const row of rows) {
        for (let col=0; col<3; col++) {
            if (p.includes(row[col]) && p.includes(row[col+1]) && p.includes(row[col+2])) {
                alertWinner(p);
            }            
        }
    }

    for(const col of cols) {
        for (let row=0; row<3; row++) {
            if (p.includes(col[row]) && p.includes(col[row+1]) && p.includes(col[row+2])) {
                alertWinner(p);
            }
        }
    }

    for (let i = 0; i < p.length; i++) {
        if (p.includes(firsDiag[i]) && p.includes(firsDiag[i+1]) && p.includes(firsDiag[i+2])) {
            alertWinner(p);
        }
        if (p.includes(secDiag[i]) && p.includes(secDiag[i+1]) && p.includes(secDiag[i+2])) {
            alertWinner(p);
        }            
    }
}

function alertWinner(p) {
    alert(p === p1 ? 'p1' : 'p2' + ' is winner!');
}