import { MOVIES_UPDATE, ERROR, SELECTED_MOVIE_UPDATE } from "store/actions/types";
import {moviesApikey} from "helpers/constants"

export const getMovieDiscover = () => dispatch => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesApikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: MOVIES_UPDATE,
                payload: data.results
            })
        }).catch(error => {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
}

export const getSearchMovie = (movieText) => dispatch => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesApikey}&language=en-US&query=${movieText}&page=1&include_adult=false`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: MOVIES_UPDATE,
                payload: data.results
            })
        }).catch(error => {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
}

export const getMovieDetail = (movieId) => dispatch => {
    dispatch({
        type: SELECTED_MOVIE_UPDATE,
        payload: { open:false }
    })
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${moviesApikey}&language=en-US`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log("data")
            console.log(data)
            dispatch({
                type: SELECTED_MOVIE_UPDATE,
                payload: {...data, open:true}
            })
        }).catch(error => {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
}

export const closeSelectedMovieModal = () => dispatch => {
    dispatch({
        type: SELECTED_MOVIE_UPDATE,
        payload: { open:false }
    })
}



