import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from '../MovieCard/MovieCard';

export class MoviesSection extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    content =
      movies.page >= 1
        ? movies.results.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesSection);