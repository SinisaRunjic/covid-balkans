import { Reducer } from "redux";
import { ICovidState, CovidDataAction, ContentActionTypes } from "./types";

export const initialCovidState: ICovidState = { data: [] };

export const covidReducer: Reducer<ICovidState, CovidDataAction> = (
  state = initialCovidState,
  action
) => {
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
