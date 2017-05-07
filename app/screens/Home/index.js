import React, { Component } from 'react';

import ShowcaseItem from './ShowcaseItem';
import Bag from './Bag';

import { products } from './../../../public/data/products';

class Home extends Component {
  constructor(props) {
    super(props);
    this.addToBag = this.addToBag.bind(this);
    this.removeProductFromBag = this.removeProductFromBag.bind(this);
    this.openBag = this.openBag.bind(this);
    this.closeBag = this.closeBag.bind(this);
    this.state = {
      bag: JSON.parse(localStorage.getItem('bagItems')) || [],
      added: false,
      isOpen: false,
    };
  }

  componentWillMount() {
    console.log(JSON.parse(localStorage.getItem('bagItems')));
  }

  addToBag(product) {
    if (product) {
      const arr = this.state.bag;
      const newArr = arr.concat([product]);

      this.setState({ added: true, bag: newArr, isOpen: false });

      localStorage.setItem('bagItems', JSON.stringify(newArr));
    }

    setTimeout(() => {
      if (!this.state.isOpen) {
        this.closeBag();
      }
    }, 3500);
  }

  removeProductFromBag(i) {
    const arr = this.state.bag;
    arr.splice(i, 1);

    this.setState({ bag: arr });

    localStorage.setItem('bagItems', JSON.stringify(arr));
  }

  openBag() {
    this.setState({ isOpen: true, added: true });
  }

  closeBag() {
    this.setState({ added: false });
  }

  render() {
    return (
      <section className="container home">
        <div className="row">
          {products.map((item, i) =>
            <div key={i + 1} className="col-xs-12 col-sm-3 col-md-3">
              <ShowcaseItem product={item} addToBag={this.addToBag}/>
            </div>
          )}
        </div>
        <div
          onMouseEnter={this.openBag}
          onMouseLeave={this.closeBag}
        >
          <Bag 
            itemsInBag={this.state.bag} 
            productIsAdded={this.state.added} 
            removeProductFromBag={this.removeProductFromBag}
          />
        </div>

        <div className="home-bag-icon" onClick={this.openBag}>
          <span>{this.state.bag.length}</span>
        </div>
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default Home;
