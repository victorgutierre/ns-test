import React, { Component, PropTypes } from 'react';

import { money } from './../../../../utils/filters';

class BagSummaryItem extends Component {
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <div className="bag-summary-item">
        <div className="bag-summary-item-image">
          <img src="http://placehold.it/50x50" />
        </div>
        <div className="bag-summary-item-content">
          <p className="bag-summary-item-title">{item.title}</p>
          <p className="bag-summary-item-info">GG | Preto e Branco</p>
          <p className="bag-summary-item-quantity">Quantidade: 1</p>
        </div>
        <div className="bag-summary-price">
          <strong>{money(item.price)}</strong>
        </div>
      </div>
    );
  }
}

BagSummaryItem.propTypes = {
  item: PropTypes.object,
}

export default BagSummaryItem;
