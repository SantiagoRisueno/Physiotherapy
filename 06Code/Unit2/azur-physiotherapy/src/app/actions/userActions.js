import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;


export async function getUsers() {
    try {
        const response = await axios({
            url: `${baseUrl}/azur/users`,
            method: 'GET',
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}


export async function getUsersByCi(ci){
    try{
        const response = await axios({
            url: `${baseUrl}/azur/users/${ci}`,
            method: 'GET',
        })
        return response
    }catch(error){
      console.log(error)
    }
}

export async function getUsersByid(id){
    try{
        const response = await axios({
            url: `${baseUrl}/azur/users/id/${id}`,
            method: 'GET',
        })
        return response
    }catch(error){
      console.log(error)
    }
}

export async function saveUser(userData, values, setValues){
    try{
        const response = await axios({
            url: `${baseUrl}/azur/users/`,
            method: 'POST',
            data: userData,
        })
        setValues(
            {
                idUsers: '',
                ci: '',
                name: '',
                age: 0,
                genre: '',
                city: '',
                address: '',
                phone: '',
                email: '',
                password: '',
                type: 0
            }
        )
        return response
  
    }catch(error){
        console.log(error)
        setValues(
            {
                idUsers: '',
                ci: '',
                name: '',
                age: 0,
                genre: '',
                city: '',
                address: '',
                phone: '',
                email: '',
                password: '',
                type: 0
            }
        )
    }
}

export async function deleteUser(ci){

    const response = await axios.delete(`${baseUrl}/azur/users/${ci}`)
    .then(response => {
      window.alert('Registro eliminado')
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
    })   
}
  
export async function updateUser(values){
    const response = await axios.put(`${baseUrl}/azur/users/${values.ci}`,{
        idUsers: values.idUsers,
        name: values.name,
        age: values.age,
        genre: values.genre,
        city: values.city,
        address: values.address,
        phone: values.phone,
        email: values.email,
        password: values.password,
        type: values.type
    })
    .then(response => {
        window.alert('Registro actualizado')
        window.location.reload()
    })
    .catch(error => {
        console.log(error)
    })
}