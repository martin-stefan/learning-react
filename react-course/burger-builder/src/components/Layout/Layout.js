import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showDrawer: false
  }

  closedHandler = () => {
    this.setState({showDrawer: false})
  }

  toggleHandler = () => {
    this.setState((prev) => {
      return {showDrawer: !prev.showDrawer};
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar toggle={this.toggleHandler}/>
        <SideDrawer open={this.state.showDrawer} closed={this.closedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;
