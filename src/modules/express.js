const { urlencoded, json } = require('express');
const express = require('express')
const path = require('path')
const DMH = require('../model/destaqueMenu')
const app = express()
const port = process.env.PORT || 3001;

app.use(urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))


app.get('/static/js/main.16a63006.js', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/static/js/main.16a63006.js'))
})
app.get('/static/css/main.4f6fd11c.css', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/static/css/main.4f6fd11c.css'))
})



app.listen(port, () => console.log(`porta: ${port} aberta`))