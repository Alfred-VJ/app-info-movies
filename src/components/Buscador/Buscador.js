import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addFavorite } from "../../actions";



function mapStateToProp(state) {
  return {
    movies: state.moviesLoad
  }
}

function reducerFunction(dispatch) {
  return {
    getMovies: (movies) => dispatch(getMovies(movies)),
    addFavorite: (movies) => dispatch(addFavorite(movies)),
  }
}


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }


  handleChange(event) {
    this.setState({ title: event.target.value });
  }


  handleSubmit(event) {
    this.props.getMovies(this.state.title)
    event.preventDefault();
  }


  render() {
    const { title } = this.state;

    return (
      <div className="cntCard">
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              className="buscaInput"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              placeholder='Ingresa Titulo'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="btnBuscar" type="submit">BUSCAR</button>
        </form>
        <div className="card">
          {this.props.movies ?
            this.props.movies.map(e =>
              <div className="cardInterior" key={e.imdbID}>
                <Link to={`/movie/${e.imdbID}`} className='link' >
                  <div className="tituloPoster">
                    <div className="titulo">
                      <h4 className="h4">{e.Title}</h4></div>
                    <div className="poster">
                      <img className="imgPoster" src={e.Poster} alt='hola' /></div>
                  </div>
                </Link>
                <button className="btnCorazon" onClick={() => this.props.addFavorite({ type: e.Title, id: e.imdbID, obj: e })}>💖</button>
              </div>) : <h1 className="Error">Lo sentimos la pellicula que buscas no esta en nuestros archivos. O el nombre no coincide.</h1>}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProp, reducerFunction)(Buscador);
