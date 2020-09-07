import { getData } from '../../../services/api';

export function getDataFromAPI() {
  return (dispatch) => {
    return getData().then(response => {
      return response;
    }).then(responseJson => {
      dispatch(getDataSuccess(responseJson));
    })
      .catch(error => {
        dispatch(getDataError(error));
      });
  };
}

export function getDataSuccess(res) {
  return ({
    type: 'API_RESULT',
    payload: res
  });
}

export function getDataError(error) {
  return ({
    type: 'API_ERROR',
  });
}