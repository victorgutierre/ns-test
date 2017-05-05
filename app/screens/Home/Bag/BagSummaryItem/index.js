import React, { Component } from 'react';

class BagSummaryItem extends Component {
  render() {
    return (
      <div className="bag-summary-item">
        <div className="bag-summary-item-image">image</div>
        <div className="bag-summary-item-content">
          <p className="bag-summary-item-title">Product Name</p>
          <p className="bag-summary-item-info">GG | Preto e Branco</p>
          <p className="bag-summary-item-quantity">Quantitidade: 1</p>
        </div>
        <div className="bag-summary-price">
          <strong>R$ 149,00</strong>
        </div>
      </div>
    );
  }
}

export default BagSummaryItem;
