import React from "react";
import PropTypes from 'prop-types';


function Bio (props) {
  const style = {
    height: "400px",
    width: "300px",
    border: "1px solid gray",
    marginTop: "100px"
  }
  console.log(props.onTextVisible);
  let visibleText = null;
  if (props.onTextVisible) {
    visibleText = <h3> I want this to appear only when the button is clicked</h3>;
  } else {
    visibleText = null;
  }
  return(
    <div style={style}>
      <h3>I like long walks in the pouring rain</h3>
      {visibleText}
    </div>
  )
}

Bio.propTypes = {
  onTextVisible: PropTypes.bool
};

export default Bio;
