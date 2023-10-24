//Defining variables
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateButton = document.getElementById('generate');
const quotes = []

// Function to fetch
async function getQuote() {
    try{
        const response = await fetch('https://run.mocky.io/v3/e9749744-af85-48d4-922c-daefb2e80605');
        const data = await response.json();

        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex];

            quoteText.textContent = quote.text;
            authorText.textContent = `-${quote.author}`;
        }
    } catch (error) {
        console.error('Error fetching quotes:', error);
        quoteText.textContent = 'Failed to fecth a quote.Try again.';
    }
}

//generate quote
generateButton.addEventListener('click', getQuote);

//getQuote
getQuote();
