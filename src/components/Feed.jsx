import React from "react";
import FeedComponent from "./FeedComponent";
import NavFeed from "./NavFeed";
import pic from "../assets/images/pic.jpg";

function Feed(){

  let posts = [
    {
      picture: {pic},
      firstName: "Mark",
      lastName: "ZuckerBerg",
      text: "Don't mess with the Zucc"
    },
    {
      picture: {pic},
      firstName: "Mark",
      lastName: "ZuckerBerg",
      text: "To Zucc or not to Zucc, that is the question"
    }
  ];
  console.log(posts[0].picture);

  const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    // justifyContent: "space-around",

  }
  return(
    <div style={style}>
    <NavFeed/>
    {posts.map((post, index) =>
      <FeedComponent picture = {post.picture}
        firstName = {post.firstName}
        lastName = {post.lastName}
        text = {post.text} />
    )}

    </div>
  )
}

export default Feed;
