import React from 'react';
import {Box} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import MatDelete from './MatDelete';
// import MatEditUser from './MatEditUser';

const TableBlog = (props)=>{
    const blog = props.blog;
    const updateRegister = props.updateRegister;
    const deleteRegister = props.deleteRegister;

    const handleDeleteRegister = (idTiDevice) => {
        deleteRegister(idTiDevice)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        {field: 'idBlog', headerName: 'id', width:50},
        {field: 'author', headerName: 'Autor', width:200},
        {field: 'date', headerName: 'Fecha', width:200},
        {field: 'title', headerName: 'Titulo', width:200},
        {field: 'description', headerName: 'Descripción', width:200},
        {field: 'img', headerName: 'img', width:200},
        {field: 'categories', headerName: 'Categoria', width:200},{
            field: 'actions',
            headerName:'Acciones',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <div
                    style={{ cursor: "pointer" }}
                >
                    {/* <MatEditUser data={params.row} handleUpdateRegister={handleUpdateRegister}/> */}
                    <MatDelete index={params.row.ci} handleDeleteRegister={handleDeleteRegister} />
                </div>
            )
        }
    ]

    return(
    <Box>
        <h1>Reporte de Blog</h1><br/>
        <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        blog.map(item => (
                            {
                                id: item._id,
                                idBlog: item.idBlog,
                                author: item.author,
                                date: item.date,
                                title: item.title,
                                description: item.description,
                                img: item.img,
                                categories: item.categories,
                                
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

export default TableBlog;