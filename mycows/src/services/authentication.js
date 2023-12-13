async function login(username, password) {
    const LOGIN_URL = 'http://127.0.0.1:5000/login';
    const formData = new FormData();

    formData.append('email', username);
    formData.append('password', password);

    const response = await fetch(LOGIN_URL, {
        method: 'POST',
        body: formData,
    });
    
    if (!response.ok) {
        return [{}, response.status];
    }
    
    const data = await response.json();
    return [data, 200];
}

async function getUser(token) {
    const LOGGED_USER_URL = 'http://127.0.0.1:5000/user';

    const options = {
        method: 'GET',
        headers: {
            'x-access-token': token
        }
    };
    const response = await fetch(LOGGED_USER_URL, options);
    const data = await response.json();
    return data;
}

export {login, getUser}