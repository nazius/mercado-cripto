import axios from 'axios'

function formatPrice(price){
  return new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'CLP' }).format(price)
}

async function getBudaPrices(setBudaPrices) {
  const budaPrices = await axios.get('https://dreamy-engelbart-933366.netlify.app/.netlify/functions/get-buda-prices')
  setBudaPrices(budaPrices)
}

export {
  formatPrice,
  getBudaPrices
}