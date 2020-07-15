import { MOVIES_UPDATE, ERROR } from "store/actions/types";

const initialState = {
    error: "",
    data: [], 
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOVIES_UPDATE:
            return {
                ...state,
                data: action.payload,
                loading:false
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


