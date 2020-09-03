import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'


const AsyncNew = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
		state = {
			auth: true
		}
    render () {
        
        return (
            <div className="Blog">
							<header>
								<nav>
									<ul>
										<li><NavLink to="/posts/" exact>Posts</NavLink></li>
										<li><NavLink to={{
											pathname:"/new-post"
											}}>New Post</NavLink>
										</li>
									</ul>
								</nav>
							</header>
							<Switch>
								{this.state.auth ? <Route path="/new-post" component={AsyncNew}/> : null }
								<Route path="/posts" component={Posts}/>
								{/* <Redirect from="/" to="/posts" /> */}
								<Route render={() => <h1>Not found</h1>} />
								{/* <Route path="/" component={Posts}/> */}
							</Switch>
            </div>
        );
    }
}

export default Blog;