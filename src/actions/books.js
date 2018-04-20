import api from '../api';

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
    isFetching: false,
    books: [],
    error: error,
  }
}

function receiveBooks(books, page) {
  return {
    type: BOOKS_SUCCESS,
    isFetching: false,
    books,
    error: null,
    page,
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

function addBooksError(errors) {
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
    success: true,
    errors: null,
  }
}

export const BOOKS_UPDATE_REQUEST = 'BOOKS_UPDATE_REQUEST';
export const BOOKS_UPDATE_ERROR = 'BOOKS_UPDATE_ERROR';
export const BOOKS_UPDATE_SUCCESS = 'BOOKS_UPDATE_SUCCESS';

function updatingBook(books) {
  return {
    type: BOOKS_UPDATE_REQUEST,
    isUpdating: false,
    errors: null,
  }
}

function updateBooksError(errors) {
  return {
    type: BOOKS_UPDATE_ERROR,
    isUpdating: false,
    errors,
  }
}

function receiveUpdateBook(book) {
  return {
    type: BOOKS_UPDATE_SUCCESS,
    isUpdating: false,
    book,
    success: true,
    errors: null,
  }
}

export const fetchBooks = (query) => {  
  return async (dispatch) => {
    dispatch(requestBooks());
    let books;
    try {
      books = await api.get('/books' + query);
    } catch (e) {
      console.error(e);
      return dispatch(booksError(e))
    }
    dispatch(receiveBooks(books.result));
  }
}

export const fetchBook = (path) => {
  return async (dispatch) => {
    dispatch(requestBooks());
    let books;
    try {
      books = await api.get(path);
    } catch (e) {
      return dispatch(booksError(e))
    }
    dispatch(receiveBooks(books.result));
  }
}

export const fetchUserIDBooks = (args) => {
  return async (dispatch) => {
    dispatch(requestBooks());
    console.info("args", args);
    let readBooks;
    try {
      readBooks = await api.get(args + '/read');
    } catch (e) {
      return dispatch(booksError(e))
    }
    console.info(readBooks.result);
    dispatch(receiveBooks(readBooks.result));
  }
}
/*
export const fetchUserBooks = () => {
  return async (dispatch) => {
    dispatch(requestBooks());
    console.info("args", args);
    let readBooks;
    try {
      readBooks = await api.get(args);
    } catch (e) {
      return dispatch(booksError(e))
    }
    console.info(readBooks.result);
    dispatch(receiveBooks(readBooks.result));
  }
}
*/
export const fetchUserBooks = (args) => {
  return async (dispatch) => {
    dispatch(requestBooks());
    console.info(args);
    let readBooks;
    try {
      readBooks = await api.get('/users/me/read');
      console.info(readBooks);
    } catch (e) {
      return dispatch(booksError(e))
    }

    dispatch(receiveBooks(readBooks.result));
  }
}

export const addBook = (data) => {
  data.category = Number(data.category);
  return async (dispatch) => {
    dispatch(addingBook());
    let book;
    try {
      book = await api.post('/books', { ...data });
    } catch (e) {
      return dispatch(addBooksError([{ message: e }]))
    }

    if (book.status >= 400) {
      return dispatch(addBooksError(book.result))
    }

    dispatch(receiveAddBook(book.result))
  }
}

export const updateBook = (path, data) => {
  data.category = Number(data.category);
  return async (dispatch) => {
    dispatch(updatingBook());
    let book;
    try {
      book = await api.patch(path , { ...data });
    } catch (e) {
      return dispatch(updateBooksError([{ message: e }]))
      
    }
    if (book.status >= 400) {
      return dispatch(updateBooksError(book.result))
    }

    dispatch(receiveUpdateBook(book.result))
  }
  
}
export const resetBook = () => {
  return async (dispatch) => {
    dispatch(updatingBook());
  }
}
