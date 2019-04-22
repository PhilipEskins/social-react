import React from "react";
import { Link } from 'react-router-dom';



function NavBar(props){

  const styles = {
    display: "flex",
    justifyContent: "space-between",
    width: "90vw",
    height: "5%",
    alignItems: "center",
    paddingBottom: "10px",
    borderBottom: "1px solid grey",
  }
  const buttonStyles = {
    borderRadius: "5px",
    height: "50px",
    backGroundColor: "white",
    color: "black"
  }

  return(
    <div style={styles}>
      <Link to = "/"><button style={buttonStyles}>Home</button></Link>
      <button style={buttonStyles}>Notifications</button>
      <button style={buttonStyles}>Messages</button>
      <input></input>
      <Link to ="/routertest"><button style={buttonStyles}>Tweet</button></Link>
    </div>
  )
}

export default NavBar;
