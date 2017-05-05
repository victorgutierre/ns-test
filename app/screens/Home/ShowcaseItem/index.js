import React, { Component } from 'react';

class ShowcaseItem extends Component {
  render() {
    return (
      <div className="showcase-item">
        <div className="showcase-item-image">image</div>
        <div className="showcase-item-name">product name</div>
        <div className="showcase-item-prices">
          <strong className="showcase-item-price-value">
            <span>R$</span>192<span>,90</span>
          </strong>
          <strong className="showcase-item-instalments-value">
            ou 3x de R$ 25,00
          </strong>
        </div>
      </div>
    );
  }
}

export default ShowcaseItem;
