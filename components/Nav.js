import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/directory">Directory</Link>
      </div>
    );
  }
}
