// Funcion to get the user's animals
async function listAnimals(token) {
    const ANIMAL_LIST_URL = 'http://127.0.0.1:5000/get-animals';
    const options = {
        method: 'GET',
        headers: {
            'x-access-token': token
        }
    };
    const response = await fetch(ANIMAL_LIST_URL, options);
    const data = await response.json();
    return data;
}

export {listAnimals}