/* eslint-disable no-dupe-args */
import React, { useEffect, useState } from 'react';
import { getBudaPrices, formatPrice } from '../common'
import Table from 'react-bootstrap/Table'

function PriceTable() {
  const [budaPrices, setBudaPrices] = useState({
    btcClpPrice: '',
    btcEthPrice: '',
    btcLtcPrice: '',
  })

  const { btcClpPrice , btcEthPrice, btcLtcPrice} = budaPrices

  useEffect(() => {
    getBudaPrices(setBudaPrices)
    setInterval(() => {
      getBudaPrices(setBudaPrices)
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
          <td>{btcClpPrice && formatPrice(btcClpPrice)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>{btcEthPrice && formatPrice(btcEthPrice)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LTC</td>
          <td>{btcLtcPrice && formatPrice(btcLtcPrice)}</td>
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
