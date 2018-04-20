import { combineReducers } from 'redux'
import auth from './auth'
import books from './books'
import users from './users'
import categories from './categories'
import profiles from './profiles';

export default combineReducers({
  auth,
  books,
  users,
  categories,
  profiles,
})
