export const addBikes = (location, number) => ({
    type: 'ADD_BIKES',
    location,
    number
})

export const removeBikes = (location, number) => ({
    type: 'REMOVE_BIKES',
    location,
    number
})