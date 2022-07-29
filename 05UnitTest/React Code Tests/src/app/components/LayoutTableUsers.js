import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material"
import TableUsers from './TableUsers'
import {getUsers} from '../actions/userActions'

const LayoutTableUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function loadUsers() {
            const response = await getUsers()
            if (response.status === 200) {
                setUsers(response.data)
            }
        }
        loadUsers()
    })


    return (
        <>
            <Container>

          
                <br/><br/>
                <TableUsers users={users} />
            </Container>
        </>
    )
}
export default LayoutTableUsers;