import React from "react";
import PropTypes from 'prop-types';


function NavFeed(props) {
  let text = null;

  const style =  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "solid 1px blue",
    marginBottom:"30px",
    backgroundColor:"lightblue",
    height:"100px",

  }
  const square = {
    height: "50px",
    width: "50px",
    marginLeft: "5px",
    backgroundColor: "#871e13"
  }

  const input = {
    marginLeft: "40px",
    height: "30px",
    width: "300px",
    border: "1px blue solid",
    color: "blue"


  }

  function handleNewPostSubmission(event){
    event.preventDefault();
    props.onNewPost({firstName: "Mark", lastName: "ZuckerBerg", text: text.value});
    text.value = '';
  }

  return(
    <div style = {style} >
      <form onSubmit={handleNewPostSubmission}>
        <div style = {square}>
        </div>
        <input style = {input} placeholder = "What's happening?" id="text" ref={(input) => {text = input;}}></input>
        <button type = "submit">Post</button>
      </form>
    </div>
  )
}

NavFeed.propTypes = {
  posts: PropTypes.func
}

export default NavFeed;
