import { GET_MOVIES, ADD_MOVIE_FAVORITE,  REMOVE_MOVIE_FAVORITE, GET_MOVIES_DETAIL } from "../actions/actionType";


const initialState = {
    moviesFavorite: [],//[ksdjlfkas]
    moviesLoad: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState, {type, payload}) {

    
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                moviesLoad: payload  
            }

            case ADD_MOVIE_FAVORITE:
                return{
                    ...state,
                    moviesFavorite: state.moviesFavorite.find( movie => movie.id === payload.id)  
                    ? [...state.moviesFavorite] 
                    : [...state.moviesFavorite, payload],
                    hola:alert('La pelicula se agrego a tus favoritas'), 
                    
                }
                
            case  REMOVE_MOVIE_FAVORITE:
                return{
                   ...state,
                   moviesFavorite: state.moviesFavorite.filter(movie => movie.id !== payload)

                }
                case GET_MOVIES_DETAIL:
                return{
                   ...state,
                   movieDetail: payload

                }

        default: return state;
    }
}