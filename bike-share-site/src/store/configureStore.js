import { createStore, combineReducers, applyMiddleware } from 'redux';
import bikesReducer from '../reducers/bikes';

export default () => {
    const store = createStore(
        combineReducers({
            bikes: bikesReducer
        })
    );

    return store;
};