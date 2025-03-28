
async function getRealtimeRates(){
    const today=new Date().toLocaleTimeString('en-CA',{
        year:'numeric',
        month:'2-digit',
        day:'2 digit',
       
    })
    console.log('Today',today);

    const symbols =currencyPairs.join(',');
    const url =`${baseUrl}/access_key=${API_KEY}$symbols=${symbols}&date_from=${today}&date_to={today}`;
   try{
const response =await fetch(url);


   }
}catch(error){
    console.error('theres an error:', error);
}


console.log('Generated URL:,url')
 const symbols='AAPL,INTEL Corp'

const API_KEY = '275eb89695344af82d2e827ff21443e7'
const baseUrl="https://api.marketstack.com/v1"


