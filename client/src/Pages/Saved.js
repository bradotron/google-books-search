import React, { Component } from 'react';
import myBooksApi from '../utils/myBooksApi';

class Saved extends Component {
  state = {
    results: [],
  };
  
  componentDidMount() {
    myBooksApi.getBooks().then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        <h1>This is the Saved Page</h1>
      </div>
    );
  }
}

export default Saved;