import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material"
import TableAssignament from './TableAssignament'
import {getAssignaments, deleteAssignament, updateAssignament} from '../actions/assignamentActions'

const LayoutTableAssignament = () => {

    const [assignament, setAssignament] = useState([])

    const deleteRegister = (id) => {
        deleteAssignament(id)
    }

    const updateRegister = (values) => {
        deleteAssignament(values)
    }

    useEffect(() => {
        async function loadAssignament() {
            const response = await getAssignaments()
            if (response.status === 200) {
                setAssignament(response.data)
            }
        }
        loadAssignament()
    }, [])


    return (
        <>
            <Container>
                <br/><br/>
                <TableAssignament assignament={assignament} deleteRegister={deleteRegister} updateRegister={updateRegister}/>
            </Container>
        </>
    )
}
export default LayoutTableAssignament;