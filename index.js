// Load Jokes from API and db.json

document.addEventListener("DOMContentLoaded", function() {

    fetch("https://official-joke-api.appspot.com/jokes/programming/ten", configerationObj)
    .then(res => res.json())
    .then(function (array) {
        array.forEach (obj => renderJokes(obj))
    })

    fetch("http://localhost:3000/jokes", {
        method: "GET"
    })
    .then(res => res.json())
    .then(function (array) {
        for(const obj of array) {
            renderJokes(obj)
        }
    })
})
