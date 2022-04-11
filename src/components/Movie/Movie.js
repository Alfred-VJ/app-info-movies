import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail,
    }
}


class Movie extends React.Component {
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
    }

    render() {

        return (
            <>
            <h1 className='detalles'>Detalles</h1>         
               <div className="movie-detail">
               
                <div className='tituloPrin'>
                    <h1 className='tituloDetails'>{this.props.movie.Title}</h1>
                    <h3>{this.props.movie.Year}</h3>
                    <p>Genre: {this.props.movie.Genre}</p>
                    <p>Writer: {this.props.movie.Writer}</p>
                    <p>Actors: {this.props.movie.Actors}</p>
                    <p>Synopsis:</p>
                    <p>{this.props.movie.Plot}</p>
                    <h3>Awars: {this.props.movie.Awards}</h3>
                </div>

                <div className='imagenDetail'>
                    <img className='imgPosterDetails' src={this.props.movie.Poster} alt=''></img>

                </div>

            </div>
            </>

        );
    }
}



export default connect(mapStateToProps, { getMovieDetail })(Movie);