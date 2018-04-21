import api from '../api';

export const PROFILES_REQUESTS = 'PROFILES_REQUESTS';
export const PROFILES_ERROR = 'PROFILES_ERROR';
export const PROFILES_SUCCESS = 'PROFILES_SUCCESS';

function requestsProfiles() {
  return {
    type: PROFILES_REQUESTS,
    isFetching: true,
    error: null,
  }
}

function profilesError(error) {
  return {
    type: PROFILES_ERROR,
    isFetching: true,
    profiles: [],
    error: error,
  }
}

function receiveProfiles(profiles) {
  return {
    type: PROFILES_SUCCESS,
    isFetching: false,
    profiles,
    error: null,
  }
}


export const PROFILES_ADD_REQUEST = 'PROFILES_ADD_REQUEST';
export const PROFILES_ADD_ERROR = 'PROFILES_ADD_ERROR';
export const PROFILES_ADD_SUCCESS = 'PROFILES_ADD_SUCCESS';

function addingProfile(profiles) {
  return {
    type: PROFILES_ADD_REQUEST,
    isAdding: false,
    errors: null,
  }
}

function addprofilesError(errors) {
  return {
    type: PROFILES_ADD_ERROR,
    isAdding: false,
    errors,
  }
}

function receiveAddProfile(profile) {
  return {
    type: PROFILES_ADD_SUCCESS,
    isAdding: false,
    profile,
    errors: null,
  }
}

export const PROFILES_UPDATE_REQUEST = 'PROFILES_UPDATE_REQUEST';
export const PROFILES_UPDATE_ERROR = 'PROFILES_UPDATE_ERROR';
export const PROFILES_UPDATE_SUCCESS = 'PROFILES_UPDATE_SUCCESS';

function updatingProfile(profiles) {
  return {
    type: PROFILES_UPDATE_REQUEST,
    isUpdating: false,
    errors: null,
  }
}

function updateprofilesError(errors) {
  return {
    type: PROFILES_UPDATE_ERROR,
    isUpdating: false,
    errors,
  }
}

function receiveUpdateProfile(profile) {
  return {
    type: PROFILES_UPDATE_SUCCESS,
    isUpdating: false,
    profile,
    errors: null,
  }
}

export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST';
export const DELETE_REVIEW_ERROR = 'DELETE_REVIEW_ERROR';
export const DELETE_REVIEW_SUCCES = 'DELETE_REVIEW_SUCCES';

function DeleteReview() {
  return {
    type: DELETE_REVIEW_SUCCES,
    isFetching: false,
    error: null,
  }
}

function DeleteReviewError(errors) {
  return {
    type: DELETE_REVIEW_ERROR,
    isFetching: false,
    errors,
  }
}

function receiveDeleteReview(profile) {
  return {
    type: DELETE_REVIEW_REQUEST,
    isFetching: true,
    errors: null,
  }
}

export const fetchProfiles = () => {
  return async (dispatch) => {
    dispatch(requestsProfiles());
    
    let profiles;
    try {
      profiles = await api.get('/users/me');
      console.info(profiles)
    } catch (e) {
      return dispatch(profilesError(e))
    }

    dispatch(receiveProfiles(profiles.result));
  }
}

export const fetchReadProfilesBooks = () => {
  return async (dispatch) => {
    dispatch(requestsProfiles());
    
    let profiles;
    try {
      profiles = await api.get('/users/me/read');
    } catch (e) {
      return dispatch(profilesError(e))
    }
    dispatch(receiveProfiles(profiles.result));
  }
}

export const deleteReadBook = (id) => {
  return async (dispatch) => {
    console.log('here');
    dispatch(receiveDeleteReview());
    let profiles;
    try {
      const c = await api.deletBook(`/users/me/read/${id}`);
      profiles = await api.get('/users/me/read');
    }catch (e) {
      console.error(e);
      return dispatch(DeleteReviewError(e));
    }
    dispatch(receiveProfiles(profiles.result));
  }
}
export const addReadBook = (data) => {
  data.rating = Number(data.rating);
  
  return async (dispatch) => {
    dispatch(addingProfile());
    let book;
    try{
      book = await api.post('/users/me/read', { ...data });
    }catch (e) {
      return dispatch(addprofilesError(book.result));
    }
    if (book.status >= 400) {
      return dispatch(addprofilesError(book.result));
    }

    dispatch(receiveAddProfile(book.result));

  }
}


export const addProfile = (data) => {
  return async (dispatch) => {
    dispatch(addingProfile());
    let profile;
    try {
      profile = await api.post('/profiles', { ...data });
    } catch (e) {
      return dispatch(addprofilesError([{ message: e }]))
    }

    if (profile.status >= 400) {
      return dispatch(addprofilesError(profile.result))
    }

    dispatch(receiveAddProfile(profile.result))
  }
}

export const updateProfile = (name) => {
  return async (dispatch) => {
    dispatch(updatingProfile());

    let profile;
    try {
      profile = await api.patch('/profiles/:id/edit', { name });
    } catch (e) {
      return dispatch(updateprofilesError([{ message: e }]))
    }

    if (profile.status >= 400) {
      return dispatch(updateprofilesError(profile.result))
    }

    dispatch(receiveUpdateProfile(profile.result))
  }
}
