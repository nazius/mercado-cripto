/* eslint-disable no-dupe-args */
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Buda from 'buda-promise'
const buda = new Buda();

// FUNCION PARA BUSCAR PRECIO
async function getBudaBTC_CLP(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC) {
  const tickerBTC = await buda.ticker('btc-clp')
  const tickerETH = await buda.ticker('eth-clp')
  const tickerLTC = await buda.ticker('ltc-clp')
  const precioBTC = tickerBTC.ticker.last_price[0]
  const precioETH = tickerETH.ticker.last_price[0]
  const precioLTC = tickerLTC.ticker.last_price[0]
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
    getBudaBTC_CLP(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC)
    setInterval(() => {
      getBudaBTC_CLP(setPriceBudaBTC, setPriceBudaETH, setPriceBudaLTC)
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
