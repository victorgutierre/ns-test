import React, { Component, PropTypes } from 'react';

import { money } from './../../../../utils/filters';

class BagSummaryItem extends Component {
  render() {
    const { item, index, removeProductFromBag } = this.props;

    return (
      <div className="bag-summary-item">
        <div 
          className="bag-summary-remove-wrapper"
          onClick={() => removeProductFromBag(index)}
        >
          X
        </div>
        <div className="bag-summary-item-image">
          <img src={item.image} title={item.title}/>
        </div>
        <div className="bag-summary-item-content">
          <p className="bag-summary-item-title">{item.title} - {item.description}</p>
          <p className="bag-summary-item-info">GG | Preto e Branco</p>
          <p className="bag-summary-item-quantity">Quantidade: 1</p>
        </div>
        <div className="bag-summary-price">
          <strong>R${money(item.price)}</strong>
        </div>
      </div>
    );
  }
}

BagSummaryItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  removeProductFromBag: PropTypes.func,
}

export default BagSummaryItem;
