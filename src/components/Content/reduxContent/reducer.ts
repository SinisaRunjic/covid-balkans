import { Reducer } from "redux";
import { ICovidState, CovidDataAction, ContentActionTypes } from "./types";

export const initialCovidState: ICovidState = { covidData: [] };

export const covidReducer: Reducer<ICovidState, CovidDataAction> = (
  state = initialCovidState,
  action
) => {
  console.log(action.payload);
  switch (action.type) {
    case ContentActionTypes.GETONE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
