import React from 'react'

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }
  onInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.inputValue)
  }
  render () {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit}className="ui form" >
          <div className="field">
            <label>Video Search</label>
            <input type="text"
              value={this.state.inputValue}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar