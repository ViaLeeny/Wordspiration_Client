const API_URL = `http://localhost:3001`

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function getPlayers () {
    return fetch(`${API_URL}/players`)
    .then(resp => resp.json())
}

export function getTopPlayers() {
    return fetch(`${API_URL}/players/leadership`)
    .then(resp => resp.json)
}

export default {
    getPlayers,
    getTopPlayers, 
}