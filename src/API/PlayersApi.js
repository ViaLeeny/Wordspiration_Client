const API_URL = 'localhost:3001/players'

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function getPlayers () {
    return fetch(`${API_URL}`)
    .then(resp => resp.json())
}

export default {
    getPlayers,
}