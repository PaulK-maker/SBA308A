

import { fetchRealTimeStockQuotes,displayStockQuote } from 'import.js';
import { fetchHistoricalRates  } from 'export.js';


document.addEventListener('DOMContentLoaded', function() {
    fetchRealTimeStockQuotes();
    fetchHistoricalRates();
});
    const stockSymbols = ['AAPL', 'GOOG', 'AMZN']; // Example symbols

    // Fetch real-time stock quotes
    const realTimeData = await fetchRealTimeStockQuotes(stockSymbols);
    displayRealTimeStockQuotes(realTimeData);

    // Fetch and display historical rates (example for a specific date)
    const date = '2024-12-15'; // Example date
    const historicalData = await Promise.all(
        stockSymbols.map((symbol) => fetchHistoricalRates(symbol, date))
    );
    displayHistoricalRates(historicalData);
