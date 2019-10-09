import React, {Component} from 'react'

import axios from 'axios';

// https://www.reddit.com/r/space.json
const url = 'https://www.reddit.com/r/'


class ApiCall extends Component {
constructor(props) {
   super(props);

   this.state = {
     posts: [],
     subreddit: 'space'
   }

   this.getReddit = this.getReddit.bind(this);
 }

 getReddit() {
   axios.get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
   .then(res => {
     const posts = res.data.data.children.map((obj) => obj.data);
     this.setState({posts: posts})
   });
 }


 componentDidMount() {
   this.getReddit();


 }


  render(){
    return(
      <div>
        <h1> {`/r/${this.state.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    )
  }
};

export default ApiCall;
