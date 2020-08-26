import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as genresActions from './redux/genre/actions';
import GenreItem from './components/GenreItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.getGenres();
  }

  render() {
    return (
      <div>
        <GenreItem></GenreItem>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  genres: state.genres
});

const mapDispacthToProps = dispatch => {
  return {
    getGenres: () => dispatch(genresActions.getGenres())
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);

