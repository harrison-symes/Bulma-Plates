const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

//require this module into db files to use as the db connection
  //const db = require('./connection')
  //db('table_name')

module.exports = connection
