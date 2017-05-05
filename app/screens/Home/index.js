import React, { Component } from 'react';

import ShowcaseItem from './ShowcaseItem';
import Bag from './Bag';

class Home extends Component {
  handleSubmit(e) {
    e.preventDefault;
    console.log(e);
  }

  render() {
    return (
      <section className="container home">
        <p onClick={this.handleSubmit}>teste</p>
        <ShowcaseItem />
        <Bag />
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default Home;
