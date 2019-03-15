'use strict'
var envs = require('./env.js')

module.exports = {
  customized_mongoDS: {
        port: 27017,
        url: envs.db_url,
        database: "meetupz",
        password: envs.db_pw,
        name: "customized_mongoDS",
        username: envs.db_user,
        connector: "mongodb"
      }
};