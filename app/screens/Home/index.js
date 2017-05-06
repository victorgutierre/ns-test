import React, { Component } from 'react';

import ShowcaseItem from './ShowcaseItem';
import Bag from './Bag';

import { products } from './../../../public/data/products';

class Home extends Component {
  constructor(props) {
    super(props);
    this.addToBag = this.addToBag.bind(this);
    this.state = {
      bag: [],
      added: false,
    };
  }

  addToBag(product) {
    const newArr = [product];
    this.setState({ added: true, bag: this.state.bag.concat(newArr) });

    setTimeout(() => {
      this.setState({ added: false });
    }, 3500);
  }

  render() {
    return (
      <section className="container home">
        <div className="row">
          {products.map((item, i) =>
            <div key={i + 1} className="col-md-3">
              <ShowcaseItem product={item} addToBag={this.addToBag}/>
            </div>
          )}
        </div>
        <Bag itemsInBag={this.state.bag} productIsAdded={this.state.added} />
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default Home;
