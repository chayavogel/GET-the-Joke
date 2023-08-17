// Load Jokes from API and db.json

document.addEventListener("DOMContentLoaded", function() {

    fetch("https://official-joke-api.appspot.com/jokes/programming/ten", {
        method: "GET"
    })
    .then(res => res.json())
    .then(function (jokesArray) {
        jokesArray.forEach (jokeObj => renderJokes(jokeObj))
    })

    fetch("http://localhost:3000/jokes", {
        method: "GET"
    })
    .then(res => res.json())
    .then(function (jokesArray) {
        for(const jokeObj of jokesArray) {
            renderJokes(jokeObj)
        }
    })
})
