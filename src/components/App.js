import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {
    results: []
  }
  onSubmit = async (term) => {
   const response = await youtube.get('/search',{
     params: {
       q: term
     }
   })
   this.setState({results: response.data.items})
  }
  render () {
    return (
    <div className="ui container">
      <SearchBar onSubmit={this.onSubmit}/>
    </div>)
  }
}

export default App