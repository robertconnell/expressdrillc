const express = require('express')
const cors = require('cors')
const data = require('./data/students')
const app = express()
const port = process.env.PORT || 3001

app.listen(port)

function findStudentById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    } return {
        error: {
            "message": "No record found!"
        }
    }
}

app.use(cors())

app.get('/', function(req, res) {
    res.json({data})
})

app.get('/:id', function(req, res) {
    var studentId = findStudentById(data, req.params.id)
    res.json({data: studentId})
})