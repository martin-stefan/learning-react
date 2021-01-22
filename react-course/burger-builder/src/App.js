import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout'
// import aux from './hoc/Auxiliary';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/" exact component={BurgerBuilder} />
          
        </Layout>
      </div>
    );
  }
}

export default App;

