import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material"
import TableUsers from './TableUsers'
import {getUsers, deleteUser, updateUser} from '../actions/userActions'

const LayoutTableUsers = () => {

    const [users, setUsers] = useState([])

    const deleteRegister = (ci) => {
        deleteUser(ci)
    }

    const updateRegister = (values) => {
        updateUser(values)
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
            <Container>
                <br/><br/>
                <TableUsers users={users} deleteRegister={deleteRegister} updateRegister={updateRegister}/>
            </Container>
        </>
    )
}
export default LayoutTableUsers;