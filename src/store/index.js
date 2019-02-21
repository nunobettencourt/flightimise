import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//import all middlewares
import middlewareEnhancer from './middlewares';


/** Import all reducers */
import flightsReducer from './flights/reducers';

const rootReducer = combineReducers({
    flights: flightsReducer
})

export default function configureStore(preloadedState) {

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}