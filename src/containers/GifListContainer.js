import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
require('dotenv').config();

class GifListContainer extends React.Component {

  state = {
    gifs: [],
  }

  searchCriteria = (query) => {
    let baseUrl = "https://api.giphy.com/v1/gifs/search?q="
    let queryCriteria = query
    let key = `&api_key=${process.env.REACT_APP_API_KEY}`
    let url = baseUrl + queryCriteria + key

    fetch(url)
    .then((response) => response.json())
    .then((data) => this.setData(data))
  }

  setData(data) {
    let array = [];
    for (let i=0; i<3; i++) {
      array.push(data.data[i]["images"]["original"]["url"])
    }
    this.setState({
      gifs: array,
    })
  }

  render() {
  return (
    <div>
        < GifSearch onSearchCriteria={this.searchCriteria} />
        {this.state.gifs.map((gif, idx) => 
           <GifList key={idx} url={gif}/>
        )}
    </div>
    ) 
  }
} 

export default GifListContainer


