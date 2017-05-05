import React, { Component } from 'react';

import BagSummaryItem from './BagSummaryItem';
import BagSubTotal from './BagSubTotal';

class Bag extends Component {
  render() {
    return (
      <div className="bag">
        <div className="bag-title">
          <div className="bag-title-icon-wrapper">
            <i className="ico bag-icon"></i>
            <span className="bag-quantity-in-bag">3</span>
          </div>
          <p className="bag-title-icon-wrapper">Sacola</p>
        </div>

        // map aqui
        <BagSummaryItem />
        <BagSubTotal />

        <div className="container">
          <button>
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}

export default Bag;
