export function displayRealTimeStockQuotes(stockQuotes) {
    const rateList = document.getElementById('forex-rates-list');
    rateList.innerHTML = ''; // Clear any existing data

    stockQuotes.forEach((quote) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${quote.symbol}: $${quote.price}`;
        rateList.appendChild(listItem);
    });
}

export function displayHistoricalRates(historicalData) {
    const rateList = document.getElementById('historical-rates');
    rateList.innerHTML = '';

    if (!historicalData) {
        rateList.innerHTML = '<li>No historical data available</li>';
        return;
    }

    historicalData.forEach((data) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${data.symbol}: $${data.close}`;
        rateList.appendChild(listItem);
    });
}