const express = require('express')
const fs = require('fs')
const path =require('path')
const app = express()

app.get('/files', (req, res) => {
    console.log(req.path)
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            return res.status(404).json({
                     status: 404,
                     message: 'Unable to get files. Directory not found.'
                  })
        }
        return res.status(200).json({
                 status: 200,
                 message: 'Files read successfully.',
                 files: files
               })
    })
})

app.get('/files/:fileName', (req, res) => {
    console.log(req.params.fileName)
    const filePath=path.join(__dirname,req.params.fileName)
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            if (err.code === 'ENOENT') {
                return res.status(404).json({
                         status: 404,
                         message: 'File not found.'
                      })
            }
            return res.status(500).json({
                     status: 500,
                     message: 'Something bad happened while reading file.'
                  })
        }
        res.status(200).json({
            status: 200,
            message: 'File content read successfully.',
            content: data
        })
    })
})

app.listen(3000);