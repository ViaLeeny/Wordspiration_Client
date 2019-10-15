const API_URL = 'localhost:3001/games'

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function createGame(){
    return fetch(`${API_URL}`)
    .then(resp => resp.json())
}

export default {
    getGame,
}