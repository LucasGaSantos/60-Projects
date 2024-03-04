const btnEl = document.getElementById("btn")
const animeContainerEl = document.querySelector(".anime-container")
const animeIMGEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")

btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
        animeNameEl.innerText = "Updating..."
        animeIMGEl.src = "spinner.svg"
        const response = await fetch("https://nekos.best/api/v2/neko")
        const data = await response.json()
        console.log(data)
        animeContainerEl.style.display = "block"
        animeIMGEl.src = data.results[0].url
        animeNameEl.innerText = data.results[0].artist_name
        btnEl.innerText = "Get Anime"
        btnEl.disabled = false
    } catch (error) {
        console.log(error)
        btnEl.disabled = false
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "An error happened, please try again"
    }
})