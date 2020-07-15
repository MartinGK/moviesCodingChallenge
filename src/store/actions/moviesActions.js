import { MOVIES_UPDATE, ERROR } from "store/actions/types";
import {moviesApikey} from "helpers/constants"

export const getMovieDiscover = () => dispatch => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesApikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
