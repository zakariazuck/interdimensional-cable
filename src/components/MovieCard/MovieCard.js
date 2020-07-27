import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Plyer from '../Player/Player'

class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      showPlayer: false,
      urlToPlay : ''
    };
  }

  startClip = () => {
    this.setState({
      urlToPlay: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd'
    });
  }


  render() {

    const { movie } = this.props;
    return (
      <div className="col-md-2 mb-5">
        <div className="card card-body bg-light text-center h-100">
          <img className="w-100 mb-2" src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt="Movie Cover" />
          <p className="text-secondary card-title"> {movie.title} </p>
          <p className="text-secondary card-title"> {movie.release_date} </p>
          <Button className="btn btn-primary btn-sm" onClick={ () => this.setState({ showDetail : true }) }>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Button>
        </div>


        <Modal isOpen={this.state.showDetail} onHide={()=> this.setState({ showDetail: false})}>
          <ModalHeader onHide={()=> this.setState({ showDetail: false})} >{movie.title}</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-7">
                {movie.overview}
                <br />
                <br />
                {movie.release_date}
              </div>
              <div className="col-5">
                <img className="w-100 mb-2" src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt="Movie Cover" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=> this.setState({ showDetail: false})}>Cancel</Button>{' '}
            <Button color="primary" onClick={()=> this.setState({showDetail: false, showPlayer: true, urlToPlay : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'})}>
              Play
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="white" >
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.showPlayer} onHide={()=> this.setState({ showDetail: true, showPlayer: false})}>
          <ModalHeader onHide={()=> this.setState({ showPlayer: false})} >{movie.title}</ModalHeader>
          <ModalBody>
            <Plyer  url={this.state.urlToPlay}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=> this.setState({showDetail: true, showPlayer: false})}>Cancel</Button>{' '}
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default MovieCard;
