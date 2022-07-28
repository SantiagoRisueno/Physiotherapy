import {useEffect, useState} from 'react';

import ModalDataRegistered from './ModalDataRegistered';
import SignIn from "../screens/SignIn";
import Slider from "../components/Slider";
import {saveUser, getUsers} from '../actions/userActions';
import {Box} from "@mui/material";


const UserLayoutInput = () => {

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
                <Slider name="Registrarse" title="Unete a AZUR y obten beneficios" />
            <Box
                class = "imgUser"
            >

                <br/><br/>
                <SignIn handleSubmit={handleSubmit} users={users} formUserValues={values} setFormUservalues={setValues} />
                <br/>
                <br/>
                <br/>

                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
            </Box>
        
        </>
    )
}
export default UserLayoutInput