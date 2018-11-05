import { createStore, combineReducers, applyMiddleware } from 'redux';

export default () => {
    const store = createStore(
        combineReducers({
            
        })
    );

    return store;
};