const initialPostState = {
  dataState: {},
  error: false
};

export default function home(state = initialPostState, action) {
  switch (action.type) {
    case 'API_RESULT':
      return { ...state, dataState: action.payload, error: false };
    case 'API_ERROR':
      return { ...state, error: true };
    default:
      return state;
  }
}