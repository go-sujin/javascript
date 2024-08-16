const quotes = [
        {
        quote: "The gratification comes in the doing, not in the results.",
        author: "James Dean",
        },
        {
        quote: "You have to have confidence in your ability, and then be tough enough to follow through.",
        author: "Rosalynn Carter",
        },
        {
        quote: "Better a diamond with a flaw than a pebble without.",
        author: "Confucius",
        },
        {
        quote: "Blaze with the fire that is never extinguished.",
        author: "Luisa Sigea",
        },
        {
        quote: "Well begun is half done.",
        author: "Aristotle",
        },
        {
        quote: "It has never been my object to record my dreams, just to realize them.",
        author: "Man Ray",
        },
        {
        quote: "A minute's success pays the failure of years.",
        author: "Robert Browning",
        },
        {
        quote: "Success isn't permanent, and failure isn't fatal.",
        author: "Mike Ditka",
        },
        {
        quote: "Whoso neglects learning in his youth, Loses the past and is dead for the future.",
        author: "Euripides",
        },
        {
        quote: "Strong reasons make strong actions.",
        author: "William Shakespeare",
        },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;