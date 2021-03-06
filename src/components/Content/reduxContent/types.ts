export const FETCH_DATA = "FETCH_DATA";

export enum ContentActionTypes {
  GETONE = `FETCH_DATA/GETONE`,
}

/* action interface */

export interface ICovidData {
  type: ContentActionTypes.GETONE;
  payload: any[];
}

/* type of all actions*/

export type CovidDataAction = ICovidData;

/* covid state */
export interface ICovidState {
  readonly covidData: any;
}
