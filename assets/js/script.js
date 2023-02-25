const adviceId = document.querySelector('#advice-id')
const adviceText = document.querySelector('.advice-body__text')
const rerollButton = document.querySelector('.advice-reroll__button')
const rerollIcon = document.querySelector('.advice-roll_button--image')

let url = 'https://api.adviceslip.com/advice'

const callAPI = function() {
    fetch(url, { cache: "no-cache" })
    .then(response => response.json())
    .then(data => 
        processAdvice(data)
    );
}

const processAdvice = function(data) {
    adviceId.innerHTML = data.slip.id
    adviceText.innerHTML = `“${data.slip.advice}”`
}

rerollButton.addEventListener('click', function() {
    adviceId.innerHTML = ""
    adviceText.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div>`
    setTimeout(callAPI, 1000)
})