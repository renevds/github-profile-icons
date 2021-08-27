import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import Item from "./Item";

const divStyle = {
  width: '400px',
  backgroundColor: '#0d1117'
}


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      id: props.match.params.id
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.id}/repos`)
      .then(async a => {
        const repos = a.data;
        const ownRepos = repos.filter(repo => !repo.fork)
        const languagesPerRepo = await Promise.all(ownRepos.map(a => this.getLanguagesFromUrl(a.languages_url)))
        let languagesTotal = {}

        languagesPerRepo.forEach(languageSet => {
          Object.keys(languageSet).forEach(language => {
            if (language in languagesTotal) {
              languagesTotal[language] += languageSet[language];
            } else {
              languagesTotal[language] = languageSet[language];
            }
          });
        });

        languagesTotal = Object.keys(languagesTotal).sort().reverse().reduce(
          (obj, key) => {
            obj[key] = languagesTotal[key];
            return obj;
          },
          {}
        );

        this.setState({languages: Object.keys(languagesTotal)});
      })
  }

  getLanguagesFromUrl(url) {
    return axios
      .get(url)
      .then(a => a.data)
  }

  render() {
    const items = this.state.languages.map(language => <Item key={language} language={language}></Item>)
    return (
      <div style={divStyle}>
        {items}
      </div>);
  }
}

export default withRouter(Card);