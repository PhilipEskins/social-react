import React from "react";
import LeftColumn from "./LeftColumn";
import Feed from "./Feed";
import RightBar from "./RightBar";

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textVisibleOnPage: false
    };
    this.handleTextVisible = this.handleTextVisible.bind(this);
  }

  handleTextVisible() {
    this.setState( prevState => ({
      textVisibleOnPage: !prevState.textVisibleOnPage
    }));
    console.log(this.state.textVisibleOnPage);
  }

  render(){
    const mainStyling = {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "50px",
    }
  return(
    <div style={mainStyling}>
      <LeftColumn onTextVisible={this.state.textVisibleOnPage}/>
      <Feed/>
      <RightBar onTextVisible={this.handleTextVisible}/>
    </div>
    )
  }
}



export default MainContainer;
