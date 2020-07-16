import { MOVIES_UPDATE, ERROR, SELECTED_MOVIE_UPDATE, SEARCHED_MOVIES_UPDATE } from "store/actions/types";

const initialState = {
    error: "",
    data: [],
    loading: false,
    selectedMovie: {
        data: "",
        title: "",
        open: false
    },
    searchedMovies:{
        data:[],
        loading: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOVIES_UPDATE:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case SEARCHED_MOVIES_UPDATE:
            return {
                ...state,
                searchedMovies: { ...action.payload }
            };
        case SELECTED_MOVIE_UPDATE:
            return {
                ...state,
                selectedMovie: { ...action.payload }
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}


