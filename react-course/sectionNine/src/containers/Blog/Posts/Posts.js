import React, { Component } from 'react';
import classes from './Posts.module.css'
import axios from 'axios';

import Post from '../../../components/Post/Post'

class Posts extends Component {
  state = {
    posts: [],
    selectedId: null
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
          return {
            ...post, 
            author: 'max'
          }
        })
        this.setState({posts: updatedPosts})
      })
      .catch(error => {
        console.log(error)
    });
  }

  		
  postSelected = (id) => {
    this.setState({selectedId: id});
  }

  render () {
    const posts = this.state.posts.map(post => {
      return <Post 
        key={post.id} 
        title={post.title} 
        author={post.author}
        clicked={() => this.postSelected(post.id)}
        />;
  })
    return (

      
      <section className={classes.Posts}>
          {posts}
      </section>
    );
  }
}

export default Posts;