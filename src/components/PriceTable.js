/* eslint-disable no-dupe-args */
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'

async function getBudaPrices(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC) {
  const btcClpPrice = await axios.get('https://dreamy-engelbart-933366.netlify.app/.netlify/functions/get-buda-prices')
  console.log('btcClpPrice',btcClpPrice)
  setPriceBudaBTC(btcClpPrice)
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
