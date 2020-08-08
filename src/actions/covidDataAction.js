import { FETCH_DATA } from "../types"

export const fetchCovidData = (country) => async (dispatch, getState) => {
    fetch(`https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`)
        .then(res => res.json())
        .then(data => {
            const lastEntryData = data[data.length - 1];
            const covidData = getState().covidData.data.filter(data => (data.Country.toLowerCase() !== country)).concat(lastEntryData);
            dispatch({
                type: FETCH_DATA,
                payload: covidData
            })
        })
        .catch(error => {
            console.log(error)
        })
}