import * as GruopsActions from '../types/gruopsActionTypes';
import { getAllGruops } from '../services/gruopsService';

export function startFetchingGruops() {
  return {
    type: GruopsActions.START_FETCH_Gruops,
  };
}

export function finishFetchingGruops() {
  return {
    type: GruopsActions.FINISH_FETCH_Gruops,
  };
}

export function errorFetchingGruops() {
  return {
    type: GruopsActions.ERROR_FETCH_Gruops,
  };
}

export function loadGruops(groups) {
  return {
    type: GruopsActions.LOAD_Gruops,
    payload: groups,
  };
}

export const fetchGruops = () => (dispatch) => {
  dispatch(startFetchingGruops());
  getAllGruops().then((res) => {
    dispatch(loadGruops(res || []));
    dispatch(finishFetchingGruops());
  }).catch((/* err */) => {
    dispatch(errorFetchingGruops());
  });
};
