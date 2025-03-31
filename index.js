
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






// //https://rapidapi.com/guides/error-handling-fetch


    
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

// // Function to display real-time rates
// function displayRealTimeRates(data, symbol) {
//     const rateList = document.getElementById('forex-rates-list');
//     const header = document.createElement('h3')
//     header.textContent= symbol
//   rateList.append(header)
//     let listitem
//   if (data) {

//     listitem = document.createElement('li')
//         listitem.textContent = `${data.symbol}: ${data.price}`
//       rateList.append(listitem)
//   }
//     if (rates && rates.length> 0) {
//         rates.forEach((rate) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${rate?.symbol}: ${rate?.close}`;
//             rateList.appendChild(listItem);
//         });
//     } else {
//         rateList.innerHTML = '<li>No real-time data available</li>';
//     }
// }
// }
// // Function to display historical rates
// function displayHistoricalRates(data, symbol) {
//     const rateList = document.getElementById('historical-rates');
//     const header = document.createElement('h3')
//     header.textContent= symbol
//     rateList.append(header)
//       let listitem

// if (data ) {

//   data.forEach((rate) => {

//       listitem = document.createElement('li')

//         listitem.textContent = `${rate.symbol}: ${rate.close}`;

//       rateList.append(listitem)
//         });
    
//     } else {
//         rateList.innerHTML = '<li>No historical data available</li>';
//     }
// }
//     function SearchShareResults(query, rates,listId){
//         const searchedRates=rates.filter((rate)=>
//        rate.symbol.toLowerCase().includes(query.toLowerCase()) );

//         const rateList=document.getElementById(listId);
//         rateList.innerHTML='';
    
//         if (searchedRates.length>0) {
//             searchedRates.forEach((rate)=>{
//             const listItem=document.createElement('li');
//             listItem.textContent= `${rate.symbol}: ${rate.close}`;
//             rateList.appendChild(listItem);
//         })
//     }
//         document.getElementById('searchinput').addEventListener('input',(event)=>{
//             const query= event.target.value.trim();

//             if (query.length===0){
//                 displayRealTimeRates(historicalData);

//                 return;
            
//             }
//             filterResults(query, realTimeRates, 'forex-rates-list'); // Filter real-time rates
//     filterResults(query, historicalRates, 'historical-rates'); // Filter historical rates
        


//     SearchShareResults(query, realTimeData, 'forex-rates-list'); // Search real-time rates
//     SearchShareResults(query, historicalRates, 'historical-rates'); // Search historical rates

// });
        
//         }

// // Call the function to fetch and display data
// fetchPolygonData();

// //     const data = await response.json();
// //     console.log('API Response:', data);

// //     if (data.data?.length > 0) {
// //         displayRealTimeRates(data.data);
// //     } else {
// //         console.error('No real-time data available');  

const API_KEY = 'your_api_key_here'; // Replace with your actual API key
const BASE_URL = 'https://api.polygon.io/v2/last/quote'; // Or replace with MarketStack if necessary

// Fetch real-time stock quotes
export async function fetchRealTimeStockQuotes(symbols) {
    const data = [];

    for (const symbol of symbols) {
        const url = `${BASE_URL}/${symbol}?apiKey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error fetching real-time data for ${symbol}: ${response.status}`);
                continue;
            }
            const result = await response.json();
            if (result.results) {
                data.push({
                    symbol,
                    price: result.results.last.price
                });
            }
        } catch (error) {
            console.error(`Error fetching data for ${symbol}:`, error);
        }
    }

    return data;
}

// Fetch historical data (just a placeholder example)
export async function fetchHistoricalRates(symbol, date) {
    const url = `${BASE_URL}/range/1/day/${date}/${date}?apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Error fetching historical data for ${symbol}: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching historical data for ${symbol}:`, error);
        return null;
    }
}