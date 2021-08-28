import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import IconImg from "./IconImg";
import PropTypes from 'prop-types';

class IconChooser extends Component {

  static propTypes = {
    setIcon: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: props.icon,
      selected: false
    }
  }

  componentDidMount() {
  }

  handleClick = (e) => {
    this.props.setIcon(this.state.icon.name, !this.state.selected)
    this.setState({selected: !this.state.selected})
  }

  render() {

    return (
      <div className="card col-sm-2 col-6">
        <IconImg className="card-img-top" icon={this.state.icon}/>
        <div className="card-body">
          <h5 className="card-title">{this.state.icon.name}</h5>
          <button onClick={this.handleClick} className={this.state.selected ? 'btn btn-danger' : 'btn btn-primary'}>{this.state.selected ? 'X' : 'Add'}</button>
        </div>
      </div>
    )
  }
}

export default withRouter(IconChooser);