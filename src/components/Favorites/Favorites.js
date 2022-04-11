import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovie} from "../../actions"; 


function mapState (state){
   return{
    movies: state.moviesFavorite
   }
}





export class ConnectedList extends Component {

  render() {
    return (
      
      <div className="ctn">
        <h1 className='tituloNav'>Mis Favoritas</h1>
        <div  className="card">
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies.map(e => 
          <div key={e.id} className='cardInterior'>
           <img className="imgPoster" src={e.obj.Poster} alt={`Poster ${e.id}`}/>
           <button className="btnCorazon" onClick={()=> this.props.removeMovie(e.obj.imdbID)}>❌</button>
          </div>
         )}
         
        </div>
      </div>
    );
  }
}



// export default (ConnectedList);
 export default  connect(mapState, {removeMovie})(ConnectedList);


