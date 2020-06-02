/* eslint-disable */


// const precioBTC = get(tickerBTC, 'data.ticker.last_price[0]', 0)
// const precioETH = get(tickerETH, 'data.ticker.last_price[0]', 0)
// const precioLTC = get(tickerLTC, 'data.ticker.last_price[0]', 0)
const fetch = require('node-fetch')
exports.handler = async function(event, context) {
  try {
    const responseBTC = await fetch('https://www.buda.com/api/v2/markets/btc-clp/ticker.json', {
      headers: { Accept: 'application/json' },
    })
    const responseETH = await fetch('https://www.buda.com/api/v2/markets/eth-clp/ticker.json', {
      headers: { Accept: 'application/json' },
    })
    const responseLTC = await fetch('https://www.buda.com/api/v2/markets/ltc-clp/ticker.json', {
      headers: { Accept: 'application/json' },
    })

    // if (!response.ok) {
    //   // NOT res.status >= 200 && res.status < 300
    //   return { statusCode: response.status, body: response.statusText }
    // }

    const dataBTC = await responseBTC.json()
    const dataETH = await responseETH.json()
    const dataLTC = await responseLTC.json()

    const response = {
      dataBTC: dataBTC.data,
      dataETH: dataETH.data,
      dataLTC: dataLTC.data,
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }

  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
