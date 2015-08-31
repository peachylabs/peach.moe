import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav'
import AnimeItem from '../components/AnimeItem'

class DirectoryPage extends Component {
  render() {
    let animeList = this.props.directoryReducer;
    return (
      <div>
        <ul>
          {animeList.map(item =>
                  <AnimeItem title={item.title}
                             link={item.link}/>)}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  const {
    directoryReducer
  } = state;

  return {
    directoryReducer
  };
}

export default connect(
  mapStateToProps,
)(DirectoryPage);
