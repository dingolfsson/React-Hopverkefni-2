
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
}
async function login(username, password) {

  const token = window.localStorage.getItem('token');

  const user = {
    name: 'Herra admin',
    username: 'admin',
  }
  const c = await fetch(baseurl + 'login', {
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
  console.info(c);

  
/*
    if (username === 'error') {
      return reject('Villa');
    }

    if (username === 'admin' && password === '123') {
      return setTimeout(() => resolve({ loggedin: true, user }), 1000);
    }

    if (username !== 'admin') {
      return setTimeout(() => resolve({ loggedin: false, error: 'Notandi ekki til' }), 500);
    }

    return setTimeout(() => resolve({ loggedin: false, error: 'Vitlaust lykilorð' }), 500);
  });*/
  return c;
}


/* todo aðrar aðgerðir */

export default {
  get,
  login,
};
