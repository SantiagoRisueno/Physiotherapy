import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableUsers = (props)=>{
    const users = props.users;
    const columns = [
        {field: 'ci', headerName: 'CI', width:200},
        {field: 'name', headerName: 'Nombre', width:200},
        {field: 'age', headerName: 'Edad', width:200},
        {field: 'address', headerName: 'Dirección', width:200},
        {field: 'email', headerName: 'Correo', width:200},
    ]

    return(
    <Box>
        <h1>Report Users👩‍⚕️</h1><br/>
        <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        users.map(item => (
                            {
                                id: item._id,
                                ci: item.ci,
                                name: item.name,
                                age: item.age,
                                address: item.address,
                                email: item.email,

                            }
                        )) 
                    }
                    
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
    </Box>
)}

export default TableUsers;