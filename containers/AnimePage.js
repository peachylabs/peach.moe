import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AnimePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { anime_name } = this.props;
    return (
      <div>
        {anime_name}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  const { anime_name } = ownProps.params;

  return {
    anime_name
  };
}

export default connect(mapStateToProps)(AnimePage)
