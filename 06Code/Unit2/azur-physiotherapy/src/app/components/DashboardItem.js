import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';

import { getUsers } from '../actions/userActions';


export default function DashboardItem() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const response = await getUsers()
            if (response.status === 200) {
                setUsers(response.data)
            }
        }
        loadUsers()
    }, [])

    const lengthUsers = users.length;

    return (
        <Card sx={{ minWidth: 275, height: 260, margin: "1em" }}>
            <CardContent>
                <PersonIcon sx={{ color: '#29b6f6', height: 50, width: 50 }} />
                <Typography variant="h5" component="div">
                    Total de Usuarios <br/>
                </Typography>
                <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom>
                    {lengthUsers}
                </Typography>
            </CardContent>
        </Card>
    );
}