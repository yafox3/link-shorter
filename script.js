const API_URL = 'https://api.shrtco.de/v2/shorten?url='
const generateBtn = document.querySelector('#generate')

generateBtn.addEventListener('click', () => {
    const input = document.querySelector('#input')
    getShort(`${input.value}`).then(val => createResult(val.result.short_link))
    input.value = ''
})

function getShort(link) {
    return fetch(API_URL + link).then(response => response.json())
}

function createResult(link) {
    const resultEl = document.querySelector('#result')
    resultEl.innerHTML = link
    resultEl.setAttribute('href', 'https://' + link)
}


