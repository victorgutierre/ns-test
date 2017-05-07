import React, { Component, PropTypes } from 'react';

import BagSummaryItem from './BagSummaryItem';
import BagSubTotal from './BagSubTotal';

class Bag extends Component {
  render() {
    const { itemsInBag, productIsAdded, removeProductFromBag } = this.props;

    return (
      <div className={`bag ${productIsAdded ? 'is-open' : ''}`}>
        <div className="bag-title">
          <div className="bag-title-icon-wrapper">
            <i className="bag-icon"></i>
            <span className="bag-quantity-in-bag">{itemsInBag.length}</span>
          </div>
          <p className="bag-title-content">Sacola</p>
        </div>

        {(itemsInBag.length >= 1) ? (
          <div>
            <div className="bag-items-wrapper" >
              {itemsInBag.map((item, i) =>
                <BagSummaryItem 
                  key={i + 1} 
                  item={item} 
                  index={i}
                  removeProductFromBag={removeProductFromBag} 
                />
              )}
            </div>

            <BagSubTotal itemsInBag={itemsInBag} />
            <div className="col-xs-12">
              <button className="button button-primary button-full">
                Comprar
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-bag">
            Você não possui produtos na sua sacola =(
          </div>
        )}
      </div>
    );
  }
}

Bag.propTypes = {
  product: PropTypes.array,
  removeProductFromBag: PropTypes.func,
}

export default Bag;
