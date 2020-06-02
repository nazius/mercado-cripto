
function formatPrice(price){
  return new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'CLP' }).format(price)
}

export {
  formatPrice,
}