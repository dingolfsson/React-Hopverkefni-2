import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {

  render() {

    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */

    return (
      <div>
        <p>Hello cruel world</p>
      </div>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
export default Book;
