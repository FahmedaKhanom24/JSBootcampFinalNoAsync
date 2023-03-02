// make sure to check readme for information about taxes
function addTotal(cart, state) {

    const TAX_RATES = {
        NY: 0.09,
        NJ: 0.07,
        CT: 0.12,
      };
    
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      
      const taxRate = TAX_RATES[state];
      const totalWithTax = total* (1 + taxRate);
      const totalWithTax_round= totalWithTax.toFixed(2)
    
      return Number(totalWithTax_round);
     

}

module.exports = { addTotal };
