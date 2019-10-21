const API_URL = 'http://localhost:3001'

//CREATE NEW GAME WHEN USER STARTS A NEW GAME
export function newGame_Api(playerName, word){
    return fetch(`${API_URL}/games`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Accepts: "application/json"
        },
        body: JSON.stringify({playerName, word})
    })
    .then(resp => resp.json())
}

//UPDATE THE GAME SCORE WHEN A PLAYER WINS THE GAME
export function updateGameScore_Api(game_id, player_id, word_id, score){
    console.log('hello edit')
    return fetch(`${API_URL}/games/${game_id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            Accepts: "application/json"
        },
        body: JSON.stringify({player_id, word_id, score})
    })
    .then(resp => resp.json())
}

export function getGame () {
    return fetch(`${API_URL}/games`)
    .then(resp => resp.json())
}

export default {
    getGame,
    newGame_Api,
    updateGameScore_Api,
}