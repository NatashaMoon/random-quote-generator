const quoteBox = document.querySelector("#quote-box");
//should pull all quotes from JSON
const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //using randomiser, select one random quote
    const quoteData = Math.floor(Math.random() * data.quotes.length);
    //display that one quote inside text div
    const onLoadQuote = data.quotes[quoteData].quote;
    //display author name inside author div
    const onLoadAuthor = data.quotes[quoteData].author;
    console.log(onLoadQuote, onLoadAuthor);
​
    //display quote inside HTML
    const onLoadHtml = (onLoadQuote, onLoadAuthor) => {
      `<div id="text">${onLoadQuote}</div>
  <div id="author">${onLoadAuthor}</div>
  <button id="new-quote"></button>
  <a id="tweet-quote">`;
    };
    // const quoteSection = onLoadHtml(onLoadQuote, onLoadAuthor);
    // quoteBox.innerHTML = quoteSection;
