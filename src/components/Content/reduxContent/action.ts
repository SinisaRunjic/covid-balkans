import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ContentActionTypes, ICovidData } from "./types";

export const fetchCovidData: ActionCreator<
  ThunkAction<Promise<AnyAction>, any, null, ICovidData>
> = (country: string) => (dispatch: Dispatch, getState) =>
  fetch(
    `https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`
  )
    .then((res) => res.json())
    .then((data) => {
      const lastEntryData = data[data.length - 1];
      const covidData = getState()
        .covidData.data.filter(
          (data: any) => data.Country.toLowerCase() !== country.toLowerCase()
        )
        .concat(lastEntryData);
      return dispatch({
        type: ContentActionTypes.GETONE,
        payload: covidData,
      });
    });
