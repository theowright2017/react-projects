import React, {Component} from 'react'

//prop = getProf

class Search extends Component {

  submit(event) {
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.getProf(value);
    this.refs.username.value = "";
  }

  render(){
    return(
      <div className="search-box">

        <form onSubmit={this.submit.bind(this)}>
          <label><input type="search" ref="username" placeholder="enter username"/></label>
        </form>

      </div>
    )
  }
};

export default Search;
