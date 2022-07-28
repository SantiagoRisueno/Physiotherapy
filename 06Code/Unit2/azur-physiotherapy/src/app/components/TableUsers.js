import React from 'react';
import {Box} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import MatDelete from './MatDelete';
import MatEditUser from './MatEditUser';

const TableUsers = (props)=>{
    const users = props.users;
    const updateRegister = props.updateRegister;
    const deleteRegister = props.deleteRegister;

    const handleDeleteRegister = (idTiDevice) => {
        deleteRegister(idTiDevice)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        {field: 'idUsers', headerName: 'id', width:50},
        {field: 'ci', headerName: 'CI', width:100},
        {field: 'name', headerName: 'Nombre', width:200},
        {field: 'age', headerName: 'Edad', width:50},
        {field: 'genre', headerName: 'Genero', width:70},
        {field: 'city', headerName: 'Ciudad', width:100},
        {field: 'address', headerName: 'Dirección', width:200},
        {field: 'phone', headerName: 'Telefono', width:100},
        {field: 'email', headerName: 'Correo', width:200},
        {field: 'type', headerName: 'Tipo', width:50},
        {field: 'password', headerName: 'Contraseña', width:150},{
            field: 'actions',
            headerName:'Acciones',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <div
                    style={{ cursor: "pointer" }}
                >
                    <MatEditUser data={params.row} handleUpdateRegister={handleUpdateRegister}/>
                    <MatDelete index={params.row.ci} handleDeleteRegister={handleDeleteRegister} />
                </div>
            )
        }
    ]

    return(
    <Box container>
        <h1>Reporte de Usuarios</h1><br/>
        <div style={{ height: 600, width: '120%' }}>
                <DataGrid
                    rows=
                    {
                        users.map(item => (
                            {
                                id: item._id,
                                idUsers: item.idUsers,
                                ci: item.ci,
                                name: item.name,
                                age: item.age,
                                genre: item.genre,
                                city: item.city,
                                address: item.address,
                                phone: item.phone,
                                email: item.email,
                                password: item.password,
                                type: item.type,
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