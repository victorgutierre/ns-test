import React, { Component, PropTypes } from 'react';

import BagSummaryItem from './BagSummaryItem';
import BagSubTotal from './BagSubTotal';

class Bag extends Component {
  render() {
    const { itemsInBag, productIsAdded } = this.props;

    return (
      <div className={`bag ${productIsAdded ? 'is-open' : ''}`}>
        <div className="bag-title">
          <div className="bag-title-icon-wrapper">
            <i className="ico bag-icon"></i>
            <span className="bag-quantity-in-bag">3</span>
          </div>
          <p className="bag-title-content">Sacola</p>
        </div>

        {itemsInBag.map((item, i) =>
          <BagSummaryItem key={i + 1} item={item} />
        )}

        <BagSubTotal itemsInBag={itemsInBag} />
        <button className="button button-primary button-full">
          Comprar
        </button>
      </div>
    );
  }
}

Bag.propTypes = {
  product: PropTypes.array,
}

export default Bag;
