const database = require('../database/models')
const app = require('./app')


app.listen(4000, () => {
  console.log('Servidor rodando na porta indicada')
})