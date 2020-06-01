/* eslint-disable no-dupe-args */
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { get } from 'lodash'

async function getBudaPrices(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC) {
  
  const tickerBTC = await axios.get('https://www.buda.com/api/v2/markets/btc-clp/ticker.json')
  const tickerETH = await axios.get('https://www.buda.com/api/v2/markets/eth-clp/ticker.json')
  const tickerLTC = await axios.get('https://www.buda.com/api/v2/markets/ltc-clp/ticker.json')

  const precioBTC = get(tickerBTC, 'data.ticker.last_price[0]', 0)
  const precioETH = get(tickerETH, 'data.ticker.last_price[0]', 0)
  const precioLTC = get(tickerLTC, 'data.ticker.last_price[0]', 0)
  
  setPriceBudaBTC(precioBTC)
  setPriceBudaETH(precioETH)
  setPriceBudaLTC(precioLTC)
}


// COMPONENTE REACT
function PriceTable() {
  const [priceBudaBTC, setPriceBudaBTC] = useState(0)
  const [priceBudaETH, setPriceBudaETH] = useState(0)
  const [priceBudaLTC, setPriceBudaLTC] = useState(0)

  useEffect(() => {
    getBudaPrices(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC)
    setInterval(() => {
      getBudaPrices(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC)
    }, 15000);
  }, [])

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Moneda</th>
          <th>Buda</th>
          <th>CryptoMkt</th>
          <th>OrionX</th>
          <th>Satoshi Tango</th>
          <th>CoinMarketCap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BTC</td>
          <td>{priceBudaBTC}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>{priceBudaETH}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LTC</td>
          <td>{priceBudaLTC}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PriceTable;
