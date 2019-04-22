import React from "react";
import pic from "../assets/images/pic.jpg";
import PropTypes from "prop-types";

function FeedComponent(props){
  const style = {
    border: "1px solid gray",
    width: "40vw",
    height: "200px",
    display: "flex",
    justifyContent: "space-around",
    marginBottom:"30px",
    alignItems: 'center'
  }
  const column = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
  const image = {
    height: "100px",
    width: "100px",
    marginLeft: "-50px",
    marginTop: "-30px"
  }
  return (
    <div style={style}>
      <div>
        <img style={image} src={pic}/>
      </div>
        <div style={column}>
          <h3>{props.firstName} {props.lastName}</h3>
          <p>{props.text}</p>
        </div>
    </div>
  )
}

FeedComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  text: PropTypes.string
}

export default FeedComponent;
