import stationsObject from '../assets/stationsObject';

const bikesReducerDefaultState = [];

const bikesReducer = (state=bikesReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_BIKES':
            
            return state
        case 'REMOVE_BIKES':
            
            return state
        default:
            return state
    }
}

export default bikesReducer;