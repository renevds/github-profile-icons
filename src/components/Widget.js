import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import LogoImg from "./LogoImg";

class Widget extends Component {

  constructor(props) {
    super(props);
    this.logos = this.props.match.params.logos.split(';')
  }

  componentDidMount() {
  }

  render() {
    const items = this.logos.map(a => `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/${a}/${a}-original.svg" width="50"/>`)
    const br = "<br/>"
    const sub = "<sub>Generated with GitHub icons tool.</sub>"
    return (
      <div>
        <div>
          {items}{br}
        </div>
        <div>
          {sub}
        </div>
      </div>
    )
  }
}

export default withRouter(Widget);