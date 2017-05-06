import React, { Component } from 'react';

class BagSummaryItem extends Component {
  render() {
    return (
      <div className="bag-summary-item">
        <div className="bag-summary-item-image">
          <img src="http://placehold.it/50x50" />
        </div>
        <div className="bag-summary-item-content">
          <p className="bag-summary-item-title">Camisa Corinthians College 77</p>
          <p className="bag-summary-item-info">GG | Preto e Branco</p>
          <p className="bag-summary-item-quantity">Quantidade: 1</p>
        </div>
        <div className="bag-summary-price">
          <strong>R$ 149,00</strong>
        </div>
      </div>
    );
  }
}

export default BagSummaryItem;
