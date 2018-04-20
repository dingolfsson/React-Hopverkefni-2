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

  const token = window.localStorage.getItem('token');
  const url = `${baseurl}${endpoint}`;

  var form = new FormData();
  form.append("profile", data);
    
  const options = {
    method: "POST",
    headers: {},
    body: form
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }  

    const response = await fetch(url, options);

    const result = await response.json();
    console.info(result);
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

async function deletBook(endpoint){
  const url = `${baseurl}${endpoint}`;

  const token = window.localStorage.getItem('token');
  const options = {
    headers: {},
    method: 'DELETE',
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(url, options);
  return { response };
}


export default {
  get,
  post,
  patch,
  login,
  register,
  photo,
  deletBook,
};
