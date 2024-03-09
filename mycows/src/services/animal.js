// Funcion to get the user's animals
async function listAnimals(token) {
    const ANIMAL_LIST_URL = 'http://127.0.0.1:5000/animals';
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

// Function to update animal
async function updateAnimal(token, animalEdited, changedFields){
    const ANIMAL_UPDATE_URL = `http://127.0.0.1:5000/animal/${animalEdited.id}`;

    const formData = new FormData();
    console.log(changedFields.length);
    for (let index = 0; index < changedFields.length; index++) {
        const field = changedFields[index];
        console.log(index);
        console.log(field);
        console.log(animalEdited[field]);
        formData.append(field, animalEdited[field]);
    }
    console.log(formData);
    const options = {
        method: 'PUT',
        headers: {
            'x-access-token': token
        },
        body: formData
    };
        
    const response = await fetch(ANIMAL_UPDATE_URL, options);
    const data = await response.json();
    return data;
}


async function dashboard(token) {
    const DASHBOARD_URL = 'http://127.0.0.1:5000/dashboard';
    const options = {
        method: 'GET',
        headers: {
            'x-access-token': token
        }
    };

    const response = await fetch(DASHBOARD_URL, options);
    const data = await response.json();
    return data
}
export {listAnimals, dashboard, updateAnimal}