import React, { Component } from 'react';

class Home extends Component {
  handleSubmit(e) {
    e.preventDefault;
    console.log(e);
  }

  render() {
    return (
      <section className="container home">
        <p onClick={this.handleSubmit}>blah</p>
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default Home;
