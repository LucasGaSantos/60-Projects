<<<<<<< HEAD
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "ZELjpW8UqliFzOnE+3ymjQ==P9DqaId2wwehOz2g"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){

    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke".toUpperCase()
        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke".toUpperCase()
    }

}

=======
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "ZELjpW8UqliFzOnE+3ymjQ==P9DqaId2wwehOz2g"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){

    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke".toUpperCase()
        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke".toUpperCase()
    }

}

>>>>>>> 9d4f9c7ae51eb98fd7441e22e69d0871c3470012
btnEl.addEventListener("click", getJoke)