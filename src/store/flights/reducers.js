import * as types from './types';

const INITIAL_STATE = {
    flightsList: {},
    session: {}
}

const flightsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.FETCH_FLIGHTS:
            return {
                ...state,
                flightsList: action.payload
            }
        case types.CREATE_SESSION:
            return {
                ...state,
                session: action.payload
            }
        default:
            return state;
    }
}

export default flightsReducer;
