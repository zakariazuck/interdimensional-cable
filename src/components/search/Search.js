import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

import {
    Input,
    InputGroupAddon,
    Button,
    InputGroup
} from 'reactstrap';

export class Search extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
        <div className="container">
          <form id="search" onSubmit={this.onSubmit}>
            <InputGroup>
                <Input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search"
                onChange={this.onChange}
                />
                <InputGroupAddon addonType="append">  
                    <Button type="submit" className="btn btn-primary btn-bg">
                        Search
                    </Button>
                </InputGroupAddon> 
            </InputGroup>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(Search);