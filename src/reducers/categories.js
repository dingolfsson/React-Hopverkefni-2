import { CATEGORIES_REQUEST, CATEGORIES_ERROR, CATEGORIES_SUCCESS } from '../actions/categories';

const initialState = {
  isFetching: false,
  isAdding: false,
  categories: [],
  error: null,
  errors: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case CATEGORIES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        categories: action.categories,
        error: action.error,
      };

    case CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        categories: action.categories,
        error: action.error,
      };
    default:
      return state;
  }
};
