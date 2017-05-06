import React from 'react';

const BagSubTotal = () => {
  console.log('blah');

  return (
    <div className="bag-subtotal">
      <div className="bag-subtotal-label">
        subtotal
      </div>
      <div className="bag-subtotal-prices">
        <strong className="bag-subtotal-price">
          <span>R$</span> 370<span>,00</span>
        </strong>
        <span className="bag-subtotal-installments-price">ou em até 10x de R$ 18,00</span>
      </div>
    </div>
  );
};

export default BagSubTotal;
