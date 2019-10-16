// const API_URL = 'http://localhost:3001'
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://app.linkedin-reach.io/words"

//FETCH WORDS FROM WORDS API (GET REQUEST)
export function getWords () {
    return fetch("http://localhost:3001/words")
    .then(resp => resp.json())
    // .then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

export default {
    getWords,
}