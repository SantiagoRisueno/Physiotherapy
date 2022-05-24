const path = require('path')

const express = require('express')

///comentario

const app = new express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})


app.listen(4000, () => {
    console.log('Aplicacion corriendo en el puerto 4000')
})