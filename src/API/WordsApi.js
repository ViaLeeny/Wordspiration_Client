const API_URL = 'http://localhost:3001'

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function getWords () {
    return fetch(`${API_URL}/words`)
    .then(resp => resp.json())
}

export default {
    getWords,
}