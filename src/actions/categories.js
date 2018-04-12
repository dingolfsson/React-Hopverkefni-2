import api from '../api';

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

function requestCategories() {
  return {
    type: CATEGORIES_REQUEST,
    isFetching: true,
    error: null,
  }
}

function categoriesError(error) {
  return {
    type: CATEGORIES_ERROR,
    isFetching: true,
    categories: [],
    error: error,
  }
}

function receiveCategories(categories) {
  return {
    type: CATEGORIES_SUCCESS,
    isFetching: false,
    categories,
    error: null,
  }
}

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(requestCategories());

    let categories;
    try {
      categories = await api.get('/categories');
    } catch (e) {
      return dispatch(categoriesError(e))
    }
    dispatch(receiveCategories(categories.result.items));
  }
}
