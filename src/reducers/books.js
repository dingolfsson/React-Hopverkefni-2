import { BOOKS_REQUEST, BOOKS_ERROR, BOOKS_SUCCESS, BOOKS_ADD_REQUEST, BOOKS_ADD_ERROR, BOOKS_ADD_SUCCESS, BOOKS_UPDATE_REQUEST, BOOKS_UPDATE_ERROR, BOOKS_UPDATE_SUCCESS} from '../actions/books';

const initialState = {
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  success: false,
  books: [],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        success: false,
        isFetching: action.isFetching,
      };

    case BOOKS_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        books: action.books,
        error: action.error,
      };

    case BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        books: action.books,
        error: action.error,
        page: action.page || 1,
      };

    case BOOKS_ADD_REQUEST:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: [],
      };
    case BOOKS_ADD_ERROR:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: action.errors,
      };
    case BOOKS_ADD_SUCCESS:
      return {
        ...state,
        isUpdating: action.isUpdating,
        books: [...state.books, action.book],
        success: action.success,
        error: action.error,
      };
    case BOOKS_UPDATE_REQUEST:
      return {
        ...state,
        isUpdating: action.isUpdating,
        errors: [],
      };
    case BOOKS_UPDATE_ERROR:
      return {
        ...state,
        isUpdating: action.isUpdating,
        errors: action.errors,
      };
    case BOOKS_UPDATE_SUCCESS:
      return {
        ...state,
        isUpdating: action.isUpdating,
        books: [...state.books, action.book],
        success: action.success,
        error: action.error,
      };

    default:
      return state;
  }
};
