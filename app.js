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
    } )
} 

function putDice(id, dice) {
    $activePlayer = $('#active-player')
                    .text(`It\'s Player ${currentPlayer}'s turn`);    
    $('#'+id).text(dice);
}