import React from "react";
import FeedComponent from "./FeedComponent";
import NavFeed from "./NavFeed";
import pic from "../assets/images/pic.jpg";

class Feed extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      posts: [
        {
          firstName: "Mark",
          lastName: "ZuckerBerg",
          text: "Don't mess with the Zucc"
        },
        {
          firstName: "Mark",
          lastName: "ZuckerBerg",
          text: "To Zucc or not to Zucc, that is the question"
        }
      ]
    };
    this.handleAddPost = this.handleAddPost.bind(this);
  }

  handleAddPost(newPost) {
    let newPostList =
    this.state.posts.slice();
    newPostList.push(newPost);
    this.setState({posts: newPostList});
  }



  render(){
    const style = {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      // justifyContent: "space-around",

    }
    return(
      <div style={style}>
      <NavFeed onNewPost = {this.handleAddPost}/>
      {this.state.posts.map((post, index) =>
        <FeedComponent picture = {post.picture}
          firstName = {post.firstName}
          lastName = {post.lastName}
          text = {post.text} />
      )}

      </div>
    )
  }
}


export default Feed;
