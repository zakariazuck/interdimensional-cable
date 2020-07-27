import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

import MoviesSection from '../../components/MoviesSection/MoviesSection';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        {loading ? <Spinner color="secondary" /> : <MoviesSection />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
