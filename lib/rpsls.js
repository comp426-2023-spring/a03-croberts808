export {rps, rpsls}

function rps(move) {
    // First we need to define what moves are possible
    const moves = ['rock', 'paper', 'scissors']
    // Then we need to be able to get a random move for our player2 robot
    const randomNum= Math.floor([Math.random() * 3])
    //opponent's move
    const randomMove = moves[randomNum]
    var result
    var final_result

    // Now we make sure our player's move is valid
    if (typeof(move) === undefined) {
        // They didnt do a move, so give them a random move
        const player1move = moves[Math.floor(Math.random() * 3)]
        final_result = {'player': player1move}
    }
    // also check that the move they entered is possible
    else if (!moves.includes(move)){
        console.error('Error: Possible moves include rock, paper, or scissors.')
        throw new RangeError()
    }
    // Now we check to see who won
    // Let's say our robot did rock
    else {
        move = move.toLowercase();
        // start with player chose scissors
        if (move === 'scissors') {
            if (randomMove === 'scissors') {
                result = 'tie'
            }
            else if (randomMove === 'paper') {
                result = 'win'
            }
            else if (randomMove === 'rock') {
                result = 'lose'
            }
        }
        else if (move === 'paper') {
            if (randomMove === 'scissors') {
                result = 'lose'
            }
            else if (randomMove === 'paper') {
                result = 'tie'
            }
            else if (randomMove === 'rock') {
                result = 'win'
            }
        }
        else if (move === 'rock') {
            if (randomMove === 'scissors') {
                result = 'win'
            }
            else if (randomMove === 'paper') {
                result = 'lose'
            }
            else if (randomMove === 'rock') {
                result = 'tie'
            }
        }
    }


}