import React from "react";
import RightFeedComponent from "./RightFeedComponent";
import PropTypes from 'prop-types';

function RightBar(props){
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid black",
    height: "350px",
    width: "225px"
  }
  return(
    <div style= {style}>RightBar
      <RightFeedComponent onTextVisible={props.onTextVisible} />
    </div>
  )
}

RightBar.propTypes = {
  onTextvisible: PropTypes.func
};

export default RightBar;
