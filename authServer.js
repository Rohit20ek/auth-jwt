require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

let refreshTokens = []

app.post('/token', (req,res) => {
    const refreshToken = req.body.refreshToken
    
})
// is the commit working 1