// Variables

const jokeCardsContainer = document.getElementById("jokeCardsContainer")

// Fetch From db.json and API

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then(res => res.json())
    .then(function (jokesArray) {
        jokesArray.forEach (jokeObj => renderJokes(jokeObj))
    })

    fetch("http://localhost:3000/jokes?type=Programming")
    .then(res => res.json())
    .then(function (jokesArray) {
        for(const jokeObj of jokesArray) {
            renderJokes(jokeObj)
        }
    })
})

//Render Jokes Function

function renderJokes(jokeObj) {
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

// Submission Form Event Listener and Fetch

const form = document.getElementById("submitForm")

form.addEventListener("submit", function(event){

    event.preventDefault()

    fetch("http://localhost:3000/jokes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "type": event.target.submitTopic.value,
            "setup": event.target.submitSetup.value,
            "punchline": event.target.submitPunchline.value
        })
    })
    .then(res => res.json())
    alert("Submitted!")
})

// Joke Topic Choice Buttons Event Listeners

const progBtn = document.getElementById("progButton")
const genBtn = document.getElementById("genButton")

progBtn.addEventListener("click", function() {
    jokeCardsContainer.innerHTML = ""

    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then(res => res.json())
    .then(function (jokeArray) {
        for(const jokeObj of jokeArray) {
            renderJokes(jokeObj)
        }
    })

    fetch("http://localhost:3000/jokes?type=Programming")
    .then(res => res.json())
    .then(function (jokesArray) {
        for(const jokeObj of jokesArray) {
            renderJokes(jokeObj)
        }
    })
})

genBtn.addEventListener("click", function() {
    jokeCardsContainer.innerHTML = ""

    fetch("https://official-joke-api.appspot.com/jokes/general/ten")
    .then(res => res.json())
    .then(function (jokeArray) {
        for(const jokeObj of jokeArray) {
            renderJokes(jokeObj)
        }
    })

    fetch("http://localhost:3000/jokes?type=General")
    .then(res => res.json())
    .then(function (jokesArray) {
        for(const jokeObj of jokesArray) {
            renderJokes(jokeObj)
        }
    })
})
