const form = document.getElementById('ratingForm')
const ratingText = document.getElementById('ratingDisplay')
const ratingCard = document.querySelector("#ratingCard")
const thankYouCard = document.querySelector ('#thankYouCard')

function rating () {
    let score = document.querySelector("input[type = 'radio']:checked").value
    ratingText.textContent = `You selected ${score} out of 5!`;
    ratingCard.style.display = 'none'
    thankYouCard.style.display = 'flex'

}

form.addEventListener("submit", function(event) {
    event.preventDefault()
    rating()
})
