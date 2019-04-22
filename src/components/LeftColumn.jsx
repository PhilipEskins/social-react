import React from "react";
import ProfileCard from "./ProfileCard";
import Bio from "./Bio";
import PropTypes from 'prop-types';


function LeftColumn (props) {
 const style = {
   display: "flex",
   flexDirection: "column"
 }
  return (
    <div style={style}>
      <ProfileCard/>
      <Bio onTextVisible={props.onTextVisible}/>
    </div>
  )
}

LeftColumn.propTypes = {
  onTextVisible: PropTypes.bool
};

export default LeftColumn;
