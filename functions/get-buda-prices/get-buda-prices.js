/* eslint-disable */

      // const tickerBTC = await axios.get('https://www.buda.com/api/v2/markets/btc-clp/ticker.json')
    // const tickerETH = await axios.get('https://www.buda.com/api/v2/markets/eth-clp/ticker.json')
    // const tickerLTC = await axios.get('https://www.buda.com/api/v2/markets/ltc-clp/ticker.json')
  
    // const precioBTC = get(tickerBTC, 'data.ticker.last_price[0]', 0)
    // const precioETH = get(tickerETH, 'data.ticker.last_price[0]', 0)
    // const precioLTC = get(tickerLTC, 'data.ticker.last_price[0]', 0)
const fetch = require('node-fetch')
exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://www.buda.com/api/v2/markets/btc-clp/ticker.json', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
