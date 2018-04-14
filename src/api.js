const baseurl = process.env.REACT_APP_SERVICE_URL;

async function get(endpoint) {

  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;

  const options = {
    headers: {},
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  /* todo framkvæma get */
  let result;
  let response;
  try { 
    response = await fetch(url, options);
    result = await response.json();
  } catch (err) {
    console.error("err");
  }
  return { result, status: response.status };
}

async function login(username, password) {

  const response = await fetch(baseurl + '/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password,
  })
  
  })
  const responseJson = await response.json();
  
  
  if(response.status === 401){
    return responseJson;
  }
  if(response.status === 200){
    window.localStorage.setItem('token', responseJson.token);
    return {user: responseJson.user, loggedin: true };
  }

  return response;
}

/* todo aðrar aðgerðir */
async function post(endpoint, data) {
  const url = `${baseurl}${endpoint}`;

  const token = window.localStorage.getItem('token');
  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, options);

  const result = await response.json();
  return { result, status: response.status };
}

async function photo(endpoint, data) {
  console.info('response result');

  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;

  var form = new FormData();
   form.append("file", "/home/alexander/Pictures/Untitled.png");
    
  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    data: form,
    'content-type': 'multipart/form-data',
    method: 'POST',
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, options);

    const result = await response.json();
    return { result, status: response.status };
  
}



async function register(username, name, password){
  const response = await fetch(baseurl + '/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      name: name,
      password: password,
    })
    })
    const responseJson = await response.json();
    if(responseJson.errors){
      return responseJson;
    }
    return responseJson;
}

async function patch(endpoint, data) {
  const url = `${baseurl}${endpoint}`;

  const token = window.localStorage.getItem('token');

  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'PATCH',
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}
async function patchUser(endpoint, data){
  
}

export default {
  get,
  post,
  patch,
  login,
  register,
  photo,
  patchUser,
};
