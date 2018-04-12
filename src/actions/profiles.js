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

export const fetchProfiles = () => {
  return async (dispatch) => {
    dispatch(requestsProfiles());
    
    let profiles;
    try {
      profiles = await api.get('/users/me');
    } catch (e) {
      return dispatch(profilesError(e))
    }

    dispatch(receiveProfiles(profiles.result));
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
