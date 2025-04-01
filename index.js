
// const API_KEY = '275eb89695344af82d2e827ff21443e7'
// const baseUrl="https://api.marketstack.com/v1"
// const currencyPairs = ['AAPL', 'INTEL Corp'];

// async function getRealtimeRates(){
//     const today=new Date().toLocaleDateString('en-CA',{
//         year:'numeric',
//         month:'2-digit',
//         day:'2 digit',
       
//     })
//     console.log('Today',today);

//     const symbols =currencyPairs.join(',');
//     const url =`${baseUrl}/eod?access_key=${API_KEY}&symbols=${symbols}&date_from=${today}&date_to=${today}`;
   
// const response =await fetch(url);

// if (!response.ok){
//     throw new Error(`HTTP error! status:)
//     ${response.status}`);
// }
// const data =await response.json();
// console.log('API Response:', data);
// }

    
// if (data.data?.length>0){
//     displayRealTimeRates(data.data);
//    }else{
//     console.error('No real-time data');
// }





//     console.error('theres an error:', error);



// console.log('Generated URL:,url')






// function displayRealTimeRates(rates){
//     const rateList =document.getElementById('forex-rates-list');
// rateList.innerHTML='';
// rates.forEach((rate) => {
    
//     const listItem=document.createElement('li');
//     listItem.textContent=`${rate.symbol}: ${rate.close}`;
//     rateList.appendChild(listItem);
// });
// }

// getRealtimeRates();







    
//     // Fetch historical data
//     const historicalResponse = await fetch(historicalUrl);
//     if (!historicalResponse.ok) {
//         console.error(`Historical Data Error: ${historicalResponse.status}`);
//         continue;
//     }
    
//     const historicalData = await historicalResponse.json();
//     console.log('Historical Data:', historicalData);
// } catch (error) {
//     console.error(`Error fetching data for ${symbol}:`, error);
// }
//     // Display data
//     if (realTimeData && realTimeData.data) {
//         displayRealTimeRates(realTimeData.data);
//     } else {
//         console.error('No real-time data available');
//     }

//     if (historicalData && historicalData.data) {
//         displayHistoricalRates(historicalData.data);
//     } else {
//         console.error('No historical data available');
//     }
// }

// Most Current Code

// Array to store real time code
let realTimeStockQuotes = [];

//Asynchronus function to fetch real time stock quotes from the API
export async function fetchRealTimeStockQuotes() {
    // API key used to fetch data from the provider
    const API_KEY = 'BS04asjRJdwbRRWKzsPrQkErAtouFyIP';
    // list of stock symbols to fetch quotes 
    const symbols = ['AAPL', 'GOOG', 'AMZN'];
    //Convert the array of symbols into a string for api request
    const symbolString = symbols.join(',');
    // construct api url
    const baseUrl = `https://financialmodelingprep.com/api/v3/quote/${symbolString}?apikey=${API_KEY}`;
        try {
            //fetch data from the api
            const response = await fetch(baseUrl);
            // check if the response is succesful
            if (!response.ok) {
                console.error(`Error fetching data for ${symbol}: ${response.status}`);
                return;
            }
        //parse the JSON response into a js object
            const data = await response.json();
            // update the array with fetched data
            realTimeStockQuotes = data; 
            //iterate each stock to show in the ui
            data.forEach((quote) => {
                displayRealTimeStockQuote(quote.symbol, quote.price);
            })

        } catch (error) {
            // log errors
            console.error('Error fetching stock quotes:', error);
        }
}

// Function to display real-time stock quotes in HTML
function displayRealTimeStockQuote(symbol, price) {
    // Get the real-time rates list container
    const rateList = document.getElementById('real-time-rates-list');
    
    // Create a new list item to hold the stock quote
    const listItem = document.createElement('li');
    
    // Set the text content to display stock
    listItem.textContent = `${symbol}: $${price}`;
    
    // Append the list item to the real-time rates list
    rateList.appendChild(listItem);
}

// Search functionality: filter stock quotes based on user input
function searchStockQuotes(query) {
    const filteredQuotes = realTimeStockQuotes.filter((quote) =>
        quote.symbol.toLowerCase().includes(query.toLowerCase())
    );

    // Get the results list element
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear any previous results

    // If there are matching results, display them
    if (filteredQuotes.length > 0) {
        filteredQuotes.forEach((quote) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${quote.symbol}: $${quote.price}`;
            resultsList.appendChild(listItem);
        });
    } else {
        // If no matches, show a "no results" message
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No matching shares found';
        resultsList.appendChild(noResultsItem);
    }
}

// Event listener for search input field
document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value.trim();
    
    searchStockQuotes(query); 
});;
// fetch and display real time stocks
fetchRealTimeStockQuotes();