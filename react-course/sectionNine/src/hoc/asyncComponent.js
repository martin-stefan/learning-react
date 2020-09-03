import React, { Component } from 'react'


const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount () {
      importComponent()
        .then(cmp => {
          this.setState({component: cmp.default});
        })
    }
    render () {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;

// new way to render asynchronously
/*
  import Suspense from react
  const Posts = React.lazy(() => import('./constainers/posts'));
  <Route path='/posts' render={()=> <Suspense fallback={<div>Loading...</div>}<Posts /></Suspense>} />

  look up react.fragment
 */