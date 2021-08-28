import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import LogoChooser from "./LogoChooser";
import WidgetLink from "./WidgetLink";

const divStyle = {
  backgroundColor: '#0d1117'
}


class Selector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: [],
      selected: []
    }
  }

  setIcon = (icon, add) =>{

    let selectedCopy = [...this.state.selected]

    if(add){
      selectedCopy.push(icon);
    }
    else {
      selectedCopy = selectedCopy.filter(a => a !== icon)
    }

    this.setState({selected: selectedCopy})

  }

  getLink = () => {
    return window.location.href + 'widget/' +  this.state.selected.sort().join(';')
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/devicons/devicon/master/devicon.json").then(({data}) => {
      let icons = data.filter(icon => (icon.versions.svg.includes("original")))
      this.setState({
        icons: icons.map(ori => {
          return {
            name: ori.name
          }
        })
      })
    })
  }


  render() {
    const widgetLink = <WidgetLink getLink={this.getLink}/>;
    const items = this.state.icons.map(icon => <LogoChooser key={icon.name} icon={icon} setIcon={this.setIcon}/>)

    return (
      <React.Fragment>
        {widgetLink};
        <div style={divStyle} className="row">
          {items}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Selector);