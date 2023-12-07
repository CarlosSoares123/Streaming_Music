const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

// Routas
const authRoutes = require('./routes/auth.routes')
const musicRouter = require('./routes/music.routes')

const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Cors
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

// Servir arquivos estáticos
app.use('/uploads/musics', express.static('uploads/musics'))
app.use('/uploads/images', express.static('uploads/images'))

// Rotas
app.use('/auth', authRoutes)
app.use('/upload', musicRouter)

module.exports = app
