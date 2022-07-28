import {useEffect, useState} from 'react';

import FormUser from "./FormUser";
import ModalDataRegistered from './ModalDataRegistered';
import {saveUser, getUsers} from '../actions/userActions';

import {Box} from "@mui/material";

const UserLayout = () => {

    const [users, setUsers] = useState([])

    const [values, setValues] = useState({
        idUsers:'',
        ci:'',
        name:'',
        age: 0,
        genre: '',
        city: '',
        address: '',
        phone: '',
        email:'',
        password:'',
        type:0        
    })

    async function handleSubmit(data) {
        const response = await saveUser(data,values,setValues)

        if (response.status === 200) {
            setModal(true);
        }
    }

    const [modal, setModal] = useState(false)


    async function handleSubmit(data) {
        const response = await saveUser(data,values,setValues)
        
        if (response.status === 200) {
            setModal(true);
        }
    }


    useEffect(() => {
        async function loadUsers() {
            const response = await getUsers()

            if (response.status === 200) {
                setUsers(response.data)
                
            }
        }

        loadUsers()
        
    }, [])

    return (
        <>
            <Box
                class = "imgUser"
            >
                {/* <NavBar /> */}
                {/* <BreadcrumbsAdmin breadcrumb1="Página principal" breadcrumb2="Agregar usuario"/> */}
                <FormUser handleSubmit={handleSubmit} users={users} formUserValues={values} setFormUservalues={setValues} />

                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
            </Box>
        
        </>
    )
}
export default UserLayout