import { combineReducers } from 'redux'
import auth from './auth'
import books from './books'
import users from './users'
import categories from './categories'

export default combineReducers({
  auth,
  books,
  users,
  categories,
})
