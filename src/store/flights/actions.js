import * as types from './types';
import { apiAction } from '../api/actions';

export const get_amadeus_token = () => (
    apiAction({
        url: types.AMADEUS_TOKEN_EP,
        method: "POST",
        data: `grant_type=client_credentials&client_id=${types.AMADEUS_API_KEY}&client_secret=${types.AMADEUS_API_SECRET}`,
        onSuccess: set_token,
        onFailure: console.log("Error creating session"),
        headers: {
            'content-type':'application/x-www-form-urlencoded'
        }
    })
);

export const set_token = ({data: {access_token}})  => (
    function(dispatch) {
        dispatch({
            type: types.SET_TOKEN,
            payload: access_token
        })
    }
)

//WIP
export const get_flights = (token) => {

    console.log("token: ", token)

    apiAction({
        url: types.AMADEUS_FLIGHT_OFFERS,
        method: "GET",
        headers: {
            'Authorization':`Bearer ${token}`
        }
    })
}

export const log_errors = (error) => (
    function(dispatch) {
        dispatch({
            type: types.SET_ERROR,
            payload: error
        })
    }
)