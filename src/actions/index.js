import { GET_MOVIES, ADD_MOVIE_FAVORITE,  REMOVE_MOVIE_FAVORITE, GET_MOVIES_DETAIL }  from './actionType'




export function getMovies(title) {
    return (dispatch) => {
        return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b63ac1b5&s=${title}`)
            .then(response => response.json())
            .then(json => {
               dispatch({ type: GET_MOVIES, payload: json.Search })
            })
            
            
    }
}

export function addFavorite(payload){
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    }
}

export function removeMovie(payload){
    return {
        type:  REMOVE_MOVIE_FAVORITE,
        payload
    }
}

export function getMovieDetail(id) {
    return (dispatch) => {
        return fetch(`https://www.omdbapi.com/?apikey=2f661bbc&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIES_DETAIL, payload: json })
            })
    }
}
  
// [{type: e.Title, id: e.imdbID}]

