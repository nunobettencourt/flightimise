import * as types from './types';

const INITIAL_STATE = {
    flightsList: {},
    session: '',
    error: ''
}

const flightsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.FETCH_FLIGHTS:
            return {
                ...state,
                flightsList: action.payload
            }
        case types.SET_TOKEN:
            return {
                ...state,
                session: action.payload
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default flightsReducer;
