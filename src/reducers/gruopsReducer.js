import * as GruopsActions from '../types/gruopsActionTypes';

const initialState = {
  gruops: [],
  gruopsFetchCount: 0,
  gruopsFetchState: GruopsActions.GruopsFetchStates.IDLE,
};

export default function gruopsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GruopsActions.START_FETCH_Gruops:
      return {
        ...state,
        gruopsFetchState: GruopsActions.GruopsFetchStates.FETCHING,
      };
    case GruopsActions.FINISH_FETCH_Gruops:
      return {
        ...state,
        gruopsFetchState: GruopsActions.GruopsFetchStates.FETCHED,
        gruopsFetchCount: state.GruopsFetchCount + 1,
      };
    case GruopsActions.ERROR_FETCH_Gruops:
      return {
        ...state,
        gruopsFetchState: GruopsActions.GruopsFetchStates.ERROR,
      };
    case GruopsActions.LOAD_Gruops:
      return {
        ...state,
        gruops: payload,
      };
    default:
      return state;
  }
}
