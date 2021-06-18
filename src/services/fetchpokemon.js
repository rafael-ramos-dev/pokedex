// using fetch js to fetch data from api

export async function getAllPokemon(url){
 return new Promise((resolve, reject) => {
     fetch(url, {
         method: 'GET',
         headers: {
             'Accept': 'application/json'
         }
     })
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            resolve(error);
        });
 });   
}


// get pokemon info and mapping each one to the array
export async function getPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accpet': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                resolve(error);
            });
    });
}