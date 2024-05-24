// Function to create user
async function createUser(name, email, password) {
    const SIGNUP_URL = 'http://127.0.0.1:5000/signup';
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        body: formData,
    });
    
    if (!response.ok) {
        return [{}, response.status];
    }
    
    const data = await response.json();
    return [data, response.status];
}

export {createUser}