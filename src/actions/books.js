import { get, post, patch } from '../api';

export const BOOKS_REQUEST = 'BOOKS_REQUEST';
export const BOOKS_ERROR = 'BOOKS_ERROR';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';

function requestBooks() {
  return {
    type: BOOKS_REQUEST,
    isFetching: true,
    error: null,
  }
}

function booksError(error) {
  return {
    type: BOOKS_ERROR,
    isFetching: true,
    books: [],
    error: error,
  }
}

function receiveBooks(books) {
  return {
    type: BOOKS_SUCCESS,
    isFetching: false,
    books,
    error: null,
  }
}

export const BOOKS_ADD_REQUEST = 'BOOKS_ADD_REQUEST';
export const BOOKS_ADD_ERROR = 'BOOKS_ADD_ERROR';
export const BOOKS_ADD_SUCCESS = 'BOOKS_ADD_SUCCESS';


function addingBook(books) {
  return {
    type: BOOKS_ADD_REQUEST,
    isAdding: false,
    errors: null,
  }
}

function addBOOKSError(errors) {
  return {
    type: BOOKS_ADD_ERROR,
    isAdding: false,
    errors,
  }
}

function receiveAddBook(book) {
  return {
    type: BOOKS_ADD_SUCCESS,
    isAdding: false,
    book,
    errors: null,
  }
}

export const fetchBOOKS = () => {
  return async (dispatch) => {
    dispatch(requestBOOKS());

    let BOOKS;
    try {
      BOOKS = await get('/');
    } catch (e) {
      return dispatch(BOOKSError(e))
    }

    dispatch(receiveBOOKS(BOOKS.result));
  }
}

export const addBook = (title, text, datetime) => {
  return async (dispatch) => {
    dispatch(addingBook());

    let book;
    try {
      book = await post('/', { title, text, datetime });
    } catch (e) {
      return dispatch(addBOOKSError([{ message: e }]))
    }

    if (book.status >= 400) {
      return dispatch(addBOOKSError(book.result))
    }

    dispatch(receiveAddBook(book.result))
  }
}
