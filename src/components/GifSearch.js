import React, { Component } from "react";


class GifSearch extends Component {

  state = {
    search: "",
  }

  changeHandler(event) {
    this.setState({
     search: event.target.value,
    })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    let formData = this.state.search
    this.props.onSearchCriteria(formData)
  }

  render() {
  
  return (
    <div>
      <h3 className="inline d-flex justify-content-center">Enter a Search Term:</h3>
      <form onSubmit={(event) => this.onSubmitHandler(event)} className="form-inline d-flex justify-content-center">
           <input className="form-control"
             type="text"
             name="name" 
             onChange={(event) => this.changeHandler(event)}
             value={this.state.search}
          />
            <button type="submit" className="btn btn-success">Find Gifs</button>
      </form>
    </div>
  )
  }
  
}

export default GifSearch;