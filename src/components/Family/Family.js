import React, { Component } from 'react';

import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import { api_key } from '../../api/api_key';


export class Family extends Component {

  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?id=99&api_key=${api_key}&language=en-US&page=1&with_genres=10751`)
      .then(response => {
        const movies = response.data;
        this.setState({ movies });
      })
      .catch(err => console.log(err));
  }

  render() {
    const movieList  = this.state.movies.results || [];
    let content
    
    content = movieList.slice(0,6).map((movie, index) => ( <MovieCard key={index} movie={movie} /> ))

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="p-2 rounded bg-info text-white">
                        <span className="">Family</span>
                       
                    </h3>
                </div>
            </div>
            <div className="row">
                {content}
            </div>
        </div>
    );
  }
}

export default Family;