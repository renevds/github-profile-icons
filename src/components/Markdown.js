import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import IconImg from "./IconImg";

class Markdown extends Component {

  constructor(props) {
    super(props);
    this.icons = this.props.match.params.icons.split(';')
  }

  componentDidMount() {
  }

  render() {
    const items = this.icons.map(a => `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/${a}/${a}-original.svg" width="50"/>`)
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

export default withRouter(Markdown);