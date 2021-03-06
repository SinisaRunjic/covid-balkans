import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ContentActionTypes, ICovidState, ICovidData } from "./types";

export const fetchCovidData: ActionCreator<
  ThunkAction<Promise<AnyAction>, ICovidState, null, ICovidData>
> = (country: string) => (dispatch: Dispatch, getState) =>
  fetch(
    `https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`
  )
    .then((res) => res.json())
    .then((data) => {
      const lastEntryData = data[data.length - 1];
      console.log(getState);
      const covidData = getState()
        .covidData.data.filter(
          (data: any) => data.Country.toLowerCase() !== country
        )
        .concat(lastEntryData);
      return dispatch({
        type: ContentActionTypes.GETONE,
        payload: covidData,
      });
    });
