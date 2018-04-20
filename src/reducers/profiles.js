import { PROFILES_REQUESTS, PROFILES_ERROR, PROFILES_SUCCESS, PROFILES_ADD_REQUEST, PROFILES_ADD_ERROR, PROFILES_ADD_SUCCESS } from '../actions/profiles';

const initialState = {
  isFetching: false,
  isAdding: false,
  profiles: [],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_REQUESTS:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case PROFILES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        profiles: action.profiles,
        error: action.error,
      };

    case PROFILES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        profiles: action.profiles,
        error: action.error,
      };

    case PROFILES_ADD_REQUEST:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: [],
      };
    case PROFILES_ADD_ERROR:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: action.errors,
      };
    case PROFILES_ADD_SUCCESS:
      return {
        ...state,
        isAdding: action.isAdding,
        profiles: [...state.profiles, action.book],
        error: action.error,
      };

    default:
      return state;
  }
};
