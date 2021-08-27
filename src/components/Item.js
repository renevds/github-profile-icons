import {Component} from "react";
import getClosest from "get-closest";
import Levenshtein from "levenshtein";
import axios from "axios";

const aliases = {
  'Batchfile': 'windows8'
}

const imgStyle = {
  width: '20px',
  height: '20px'
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.language = props.language;
    this.state = {image: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"};
  }

  render() {
    return (
      <div className="text-white">{this.language}<img className="ml-2" src={this.state.image} style={imgStyle}/></div>
    )
  }

  componentDidMount() {
    this.getImage();
  }

  async getImage() {
    function compareLevenshteinDistance(compareTo, baseItem) {
      return new Levenshtein(compareTo, baseItem).distance;
    }

    let aliasedLanguage;

    if(this.language in aliases){
      aliasedLanguage = aliases[this.language]
    }
    else{
      aliasedLanguage = this.language;
    }

    const devicon = await axios.get("https://raw.githubusercontent.com/devicons/devicon/master/devicon.json").then(a => a.data)

    const iconsByLanguage = {}
    devicon.forEach(a => {
      iconsByLanguage[a.name.toLowerCase()] = a;
      if (Array.isArray(a.tags) && "language" in a.tags) {
        a.tags.forEach(tag => {
          iconsByLanguage[tag.toLowerCase()] = a;
        })
      }
    });

    const languages = Object.keys(iconsByLanguage);

    const closestLanguage = languages[getClosest.custom(aliasedLanguage.toLowerCase(), languages, compareLevenshteinDistance)];

    this.setState({image: `https://raw.githubusercontent.com/devicons/devicon/master/icons/${closestLanguage}/${closestLanguage}-plain.svg`});
  }
}

export default Item;