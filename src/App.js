import React from 'react';
import PriceTable from './components/PriceTable'
import './App.css';

function App() {

  // HTML
  return (
    <div className="App">
      <header className="App-header">
        <h1> Mercado Cripto</h1>
      </header>
      <div className="price-table-container">
        <PriceTable />
      </div>
    </div>
  );
}

export default App;
