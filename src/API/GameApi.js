const API_URL = 'http://localhost:3001'

//FETCH WORDS FROM WORDS API (GET REQUEST)
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

export default {
    newGame_Api,
}