const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => kanyeQuotes(data))
}

function kanyeQuotes(getQuotes) {
    // console.log(getQuotes);
    const displayQuotes = document.getElementById('quoteId');
    displayQuotes.innerText = getQuotes.quote;
}
