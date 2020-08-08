const { FETCH_DATA } = require("../types");

export const covidDataReducer = (state = {
    data: []
}, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                data: action.payload
            };
        default:
            return state
    }
}