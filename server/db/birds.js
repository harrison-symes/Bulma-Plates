const db = require('./connection')



module.exports = {
  getBirds: () => db('birds'),
  delBird: id => db('birds')
    .where({id})
    .del()
}
