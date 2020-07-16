import { MOVIES_UPDATE, ERROR, SELECTED_MOVIE_UPDATE } from "store/actions/types";

const initialState = {
    error: "",
    data: [],
    loading: false,
    selectedMovie: {
        data: "",
        title: "",
        open: false
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


