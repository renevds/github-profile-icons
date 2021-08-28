import React, {Component} from "react";

class LogoImg extends Component{
  constructor(props) {
    super(props);
    this.icon = props.icon;
  }

  render() {
    return(
      <img style={this.props.style} src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${this.icon.name}/${this.icon.name}-original.svg`} alt="logo"/>
    )
  }
}

export default LogoImg;