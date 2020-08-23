import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <p>Parece que estás perdido!</p>
        <img className="img-fluid mx-auto" src="https://firebasestorage.googleapis.com/v0/b/eedh-mern-test.appspot.com/o/not_found.png?alt=media&token=51ba06b1-d398-4424-bc51-1ba7b832ef4b"></img>
      </div>
    )
  }
}