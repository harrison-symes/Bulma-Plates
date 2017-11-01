const defaultConn = require('./connection')

const getGreetings = (testConn) => {
  const db = testConn || defaultConn
  return db('greetings')
    .select()
}

module.exports = {
  getGreetings
}
