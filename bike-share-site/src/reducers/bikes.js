import stationsObject from '../assets/stationsObject';

const bikesReducerDefaultState = [];

const bikesReducer = (state=bikesReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_BIKES':
            console.log('triggered')
            // how much to offset from station (to make num bikes more clear)
            let jitter = .001
            let new_bikes = []
            for(let i = 0; i < action.number; i++) {
                // gets offset between jitter and -jitter
                let jitterLat = ((Math.random()*2) - 1) * jitter
                let jitterLong = ((Math.random()*2) - 1) * jitter
                let pastLat = stationsObject[action.location].position.lat
                let pastLong = stationsObject[action.location].position.long
                let new_bike = {
                    station: action.location,
                    position: {lat: pastLat + jitterLat, long: pastLong + jitterLong}
                }
                new_bike['station'] = action.location
                new_bike['position'] = stationsObject[action.location] 
                new_bikes.push(new_bike)
            }

            // adds new bikes to current state
            return [...state, ...new_bikes]
        case 'REMOVE_BIKES':
            // removes number of bikes rented from location
            let counter = 0
            let remain_bikes = []
            state.forEach((bike) => {
                if(bike.station != action.location || counter >= action.number) {
                    remain_bikes.push()
                }
            })
            return remain_bikes
        default:
            return state
    }
}

export default bikesReducer;