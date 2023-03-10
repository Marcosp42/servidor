const { urlencoded, json } = require('express');
const express = require('express')
const path = require('path')
const DMH = require('../model/destaqueMenu')
const app = express()
const port = process.env.PORT || 3001;

app.use(urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public/')))
app.use('/', express.static(path.resolve(__dirname, '../public/')))
app.use('*', express.static(path.resolve(__dirname, '../public/')))


app.get('/destaqueMenuHome', async (req, res) => {
    res.json(await DMH.getData())
})

app.listen(port, () => console.log(`porta: ${port} aberta`))