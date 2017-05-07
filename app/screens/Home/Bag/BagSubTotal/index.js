import React from 'react';

import { money } from './../../../../utils/filters';

const BagSubTotal = (props) => {
  const { itemsInBag } = props;
  let subtotalSum = 0;

  if(itemsInBag) {
    for (let i = 0; itemsInBag.length > i; i++) {
      subtotalSum += itemsInBag[i].price;
    }
  }

  return (
    <div className="bag-subtotal">
      <div className="bag-subtotal-label">
        subtotal
      </div>
      <div className="bag-subtotal-prices">
        <strong className="bag-subtotal-price">
          <span>R$</span>{money(subtotalSum)}
        </strong>
        <span className="bag-subtotal-installments-price">ou em até 10x de R$ {money(subtotalSum / 10)}</span>
      </div>
    </div>
  );
};

export default BagSubTotal;
