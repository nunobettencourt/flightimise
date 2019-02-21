import axios from 'axios';
import * as types from './types';
import { apiAction } from '../api/actions';


export const create_session_old = (params) => (
    async function(dispatch) {

        const { headers: {location} } = await axios.post(`${types.FLIGHTS_ROOT_URL}`,
            params,
            {
                headers: {
                    'X-RapidAPI-Key': types.X_RAPID_API_KEY,
                    'content-type':'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );

        const sessionkey = location.split('/').pop();

        dispatch({
            type: types.CREATE_SESSION,
            payload: sessionkey
        })

        const { data } = await axios.get(`${types.ROOT_URL}/${sessionkey}`,
            {
                headers: {
                    'X-RapidAPI-Key': types.X_RAPID_API_KEY,
                    'content-type':'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );

        dispatch({
            type: types.FETCH_FLIGHTS,
            payload: data
        })
    }
)


export const create_session = (params) => (

    apiAction({
        url: types.FLIGHTS_ROOT_URL,
        method: "POST",
        data: params,
        onSuccess: fetch_flights,
        onFailure: console.log("Error creating session"),
        headers: {
            'X-RapidAPI-Key': types.X_RAPID_API_KEY,
            'content-type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }
    })
);


export const fetch_flights = ({ headers: {location}})  => (
    async function(dispatch) {

        const sessionkey = location.split('/').pop();

        const { data } = await axios.get(`${types.ROOT_URL}/${sessionkey}`,
            {
                headers: {
                    'X-RapidAPI-Key': types.X_RAPID_API_KEY,
                    'content-type':'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );

        dispatch({
            type: types.CREATE_SESSION,
            payload: sessionkey
        })

        dispatch({
            type: types.FETCH_FLIGHTS,
            payload: data
        })
    }
)