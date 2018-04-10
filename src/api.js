
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
  const response = await fetch(url);
  const result = await response.json();

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

  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}
async function register(username, name, password){
  console.info('api', username, name, password);
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

  //TODO 
}

export default {
  get,
  post,
  login,
  register,
};
