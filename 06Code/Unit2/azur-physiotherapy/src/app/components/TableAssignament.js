import React from 'react';
import {Box} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import MatDelete from './MatDelete';
// import MatEditUser from './MatEditUser';

const TableAssignament = (props)=>{
    const assignament = props.assignament;
    const updateRegister = props.updateRegister;
    const deleteRegister = props.deleteRegister;

    const handleDeleteRegister = (idTiDevice) => {
        deleteRegister(idTiDevice)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        {field: 'idAppointment', headerName: 'id', width:50},
        {field: 'date', headerName: 'Fecha', width:100},
        {field: 'time', headerName: 'Tiempo', width:100},
        {field: 'pathology', headerName: 'Pathology', width:100},
        {field: 'customer', headerName: 'Paciente', width:100},
        {field: 'physiotherapist', headerName: 'Fisioterapeuta', width:150},{
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
        <h1>Reporte de Citas</h1><br/>
        <div style={{ height: 600, width: '75%' }}>
                <DataGrid
                    rows=
                    {
                        assignament.map(item => (
                            {
                                id: item._id,
                                idAppointment: item.idAppointment,
                                date: item.date,
                                time: item.time,
                                pathology: item.pathology,
                                customer: item.customer,
                                physiotherapist: item.physiotherapist,
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

export default TableAssignament;