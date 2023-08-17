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

//Function to render jokes from API, db.json, and joke submission form

function renderJokes(jokeObj) {
    const jokeCardsContainer = document.getElementById("joke-cards-container")

    const jokeCard = document.createElement("div")
    jokeCard.setAttribute("id", "card")

    const joke = document.createElement("p")
    joke.innerText = jokeObj.setup
    joke.setAttribute("id", "setup")

    const punchline = document.createElement("p")
    punchline.innerText = "Hover for punchline!"
    punchline.setAttribute("id", "punchline")

    jokeCardsContainer.append(jokeCard)
    jokeCard.append(joke, punchline)

    punchline.addEventListener("mouseover", function() {
        punchline.innerText = jokeObj.punchline
    })

    punchline.addEventListener("mouseout", function() {
        punchline.innerText = "Hover for punchline!"
    })
}
