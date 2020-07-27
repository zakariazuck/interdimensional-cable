import React, { Component } from 'react';
import MyNavbar from './myNavbar/MyNavbar';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection';
import LandingSection from './LandingSection/LandingSection';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      hideLaningSection: false,
    };
  }

  hideLaningSection() {
    this.setState({ hideLaningSection: true });
  }

  render() {
    return (
      <div>
        <MyNavbar data={{ hideLaningSection: this.hideLaningSection.bind(this) }} />
        { !this.state.hideLaningSection ? <LandingSection /> : null }
        <SearchResultsSection />
      </div>
    );
  }
}
