import React, { Component, PropTypes } from 'react';

import { money } from './../../../utils/filters';

class ShowcaseItem extends Component {

  handleItemToBag(item) {
    const { addToBag } = this.props;
    addToBag(item);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="showcase-item">
        <div className="showcase-item-image">
          <img src={product.image} title={product.title}/>
        </div>
        <div className="showcase-item-name">
          {product.title} - {product.description}
        </div>
        <div className="showcase-item-prices">
          <strong className="showcase-item-price-value">
            <span>R$</span>{money(product.price)}
          </strong>
          <strong className="showcase-item-instalments-value">
            {(product.installments > 0) ? (
              `ou ${product.installments}x de ${money((product.price) / product.installments)}`
            ): ''}
          </strong>

          <button
            className="button button-secondary button-full"
            onClick={() => this.handleItemToBag(product)}
          >
            Adicionar a sacola
          </button>
        </div>
      </div>
    );
  }
}

ShowcaseItem.propTypes = {
  product: PropTypes.object,
  addToBag: PropTypes.func,
}

export default ShowcaseItem;
