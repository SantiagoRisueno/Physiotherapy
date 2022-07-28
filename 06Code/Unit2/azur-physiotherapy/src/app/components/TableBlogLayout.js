import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material"
import TableBlog from './TableBlog'
import {getBlog, deleteBlog, updateBlog} from '../actions/blogActions'

const LayoutTableBlog = () => {

    const [blog, setBlog] = useState([])

    const deleteRegister = (id) => {
        deleteBlog(id)
    }

    const updateRegister = (values) => {
        updateBlog(values)
    }

    useEffect(() => {
        async function loadAssignament() {
            const response = await getBlog()
            if (response.status === 200) {
                setBlog(response.data)
            }
        }
        loadAssignament()
    }, [])


    return (
        <>
            <Container>
                <br/><br/>
                <TableBlog blog={blog} deleteRegister={deleteRegister} updateRegister={updateRegister}/>
            </Container>
        </>
    )
}
export default LayoutTableBlog;