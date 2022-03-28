function getQuote() {
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let randomNumber = Math.floor(Math.random() * 1642);
        let quote = data[randomNumber].text
        let author = data[randomNumber].author
        

        let quoteP = document.getElementById("quote-p")
        let authorP = document.getElementById("quote-author-p")
        quoteP.innerHTML = quote
        authorP.innerHTML = `-${author}`
    });
}

window.addEventListener("load", getQuote)