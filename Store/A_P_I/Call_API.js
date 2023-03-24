function Call_Api() {

    const api = () => {
        return fetch('https://crudcrud.com/api/2d424f153983477296bce0c7fd68bba3/que')
            .then((response) =>response.json())
            .then(data=>{
               return data;
            })
            .catch((error) => { console.log(error)});

    }

    return {
        api,
    }
}

const callAPI = Call_Api();

export default callAPI;