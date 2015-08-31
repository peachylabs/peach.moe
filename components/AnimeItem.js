import React, { Component } from 'react';

class AnimeItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link}>{this.props.title}</a>
      </li>
    );
  }
}

export default AnimeItem;
