import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class MarkdownLink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: [],
      srcEmpty: function (){
        return this.src.length > 0
      }
    }
  }

  componentDidMount() {
  }

  handleClick = (e) => {
    window.open(this.props.getLink(),'_blank');
  }

  render() {
    return (
      <div className="text-center mb-3 mt-1">
        <button onClick={this.handleClick} className="btn btn-info" disabled={this.state.srcEmpty()}>{this.state.srcEmpty() ? 'Chose some icons, then click here.' : 'Show markdown'}</button>
      </div>
    )
  }
}

export default withRouter(MarkdownLink);