<<<<<<< HEAD
const btnEl = document.getElementById("btn")
const errorMessageEl = document.getElementById("errorMessage")
const galleryEl = document.getElementById("gallery")

async function fetchImage() {
    const inputValue = document.getElementById("input").value
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "Number should be between 1 and 10"
        return
    }

    imgs = ""
    try {
        btnEl.style.display = "none"
        const loading = `<img src="spinner.svg"/>`
        galleryEl.innerHTML = loading
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=rIbAFg8CHtcUjDzazgvHVEMnZ4nD1y6ljTm0gEzryWs`)
        .then((res) => res.json()
        .then((data) => { if(data) {
            data.forEach((pic) => {
                imgs += `<img src=${pic.urls.small} alt="image" />`
                galleryEl.style.display = "block"
                galleryEl.innerHTML = imgs
                btnEl.style.display = "block"
                errorMessageEl.style.display = "none"
            })
        } }))
    } catch (error) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "An error happened, try again later"
        btnEl.style.display = "block"
        galleryEl.style.display = "none"
    }
}

=======
const btnEl = document.getElementById("btn")
const errorMessageEl = document.getElementById("errorMessage")
const galleryEl = document.getElementById("gallery")

async function fetchImage() {
    const inputValue = document.getElementById("input").value
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "Number should be between 1 and 10"
        return
    }

    imgs = ""
    try {
        btnEl.style.display = "none"
        const loading = `<img src="spinner.svg"/>`
        galleryEl.innerHTML = loading
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=rIbAFg8CHtcUjDzazgvHVEMnZ4nD1y6ljTm0gEzryWs`)
        .then((res) => res.json()
        .then((data) => { if(data) {
            data.forEach((pic) => {
                imgs += `<img src=${pic.urls.small} alt="image" />`
                galleryEl.style.display = "block"
                galleryEl.innerHTML = imgs
                btnEl.style.display = "block"
                errorMessageEl.style.display = "none"
            })
        } }))
    } catch (error) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "An error happened, try again later"
        btnEl.style.display = "block"
        galleryEl.style.display = "none"
    }
}

>>>>>>> 9d4f9c7ae51eb98fd7441e22e69d0871c3470012
btnEl.addEventListener("click", fetchImage)