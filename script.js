const form = document.getElementById('ratingForm')
const ratingText = document.getElementById('ratingDisplay')
const ratingCard = document.querySelector("#ratingCard")
const thankYouCard = document.querySelector ('#thankYouCard')
const smileyRating5 = document.querySelector('#smileyRating5')
const smileyRating4 = document.querySelector('#smileyRating4')
const smileyRating3 = document.querySelector('#smileyRating3')
const smileyRating2 = document.querySelector('#smileyRating2')
const smileyRating1 = document.querySelector('#smileyRating1')



function rating () {
    let score = document.querySelector("input[type = 'radio']:checked").value
    ratingText.textContent = `You selected ${score} out of 5!`;
    ratingCard.style.display = 'none'
    thankYouCard.style.display = 'flex'
    switch(score) {
        case '5':
            smileyRating5.style.display = 'flex'
            break
        case '4':
            smileyRating4.style.display = 'flex'
            break
        case '3':
            smileyRating3.style.display = 'flex'
            break
        case '2':
            smileyRating2.style.display = 'flex'
            break
        default:
            smileyRating1.style.display = 'flex'
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault()
    rating()
})
