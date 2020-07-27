import React, { Component } from 'react';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import PopularSeries from '../../components/PopularSeries/PopularSeries';
import Family from '../../components/Family/Family';
import Documentary from '../../components/Documentary/Documentary'



export class LandingSection extends Component { 
    render() {
        return (
            <div className="container">
                <PopularMovies />
                <PopularSeries />
                <Family />
                <Documentary />
            </div>
        );
    }
}

export default LandingSection