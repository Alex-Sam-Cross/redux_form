import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    //set states
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ post: data }));
  }

  render() {
    const postItems = this.state.post.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Post;
