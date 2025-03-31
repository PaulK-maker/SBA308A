

import { fetchRealTimeStockQuotes, fetchHistoricalRates } from './index.js';
import { displayRealTimeStockQuotes, displayHistoricalRates } from './import.js';

document.addEventListener('DOMContentLoaded', async () => {
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
});