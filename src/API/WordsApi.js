const API_URL = 'localhost:3001/words'

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function getWords(){
    return fetch(`${API_URL}`)
    .then(resp => resp.json())
}

export default {
    getWords,
}