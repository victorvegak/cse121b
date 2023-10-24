// Quotes

// Function to fetch data
export async function fetchData() {
    try {
        const response = await fetch('https://run.mocky.io/v3/e9749744-af85-48d4-922c-daefb2e80605');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
}

// Function to display a random quote
export async function displayRandomQuote(response, quoteText, authorText) {
    try {
        if (response && response.headers && response.headers.get) {
            if (response.headers.get("content-type").includes("application/json")) {
                const data = await response.json();
                const randomIndex = Math.floor(Math.random() * data.length);
                const quote = data[randomIndex];
                quoteText.textContent = quote.text;
                authorText.textContent = `-${quote.author}`;
            } else {
                throw new Error('Response is not in JSON format');
            }
        } else {
            throw new Error('Invalid response object');
        }
    } catch (error) {
        console.error('Error parsing response:', error);
    }
}