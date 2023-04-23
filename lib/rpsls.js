export {rps, rpsls}

function rps(move) {
    // First we need to define what moves are possible
    const moves = ['rock', 'paper', 'scissors']
    // Then we need to be able to get a random move for our player2 robot
    const randomMove = moves[Math.random() * 3]
    var result

    // Now we make sure our player's move is valid
    if (typeof(move) === undefined) {
        // They didnt do a valid move, so give them a random move
        const player1move = moves[Math.random() * 3]
    }
    // Now we check to see who won
    // Let's say our robot did rock

}