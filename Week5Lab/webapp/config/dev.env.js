'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    STUDENT_API: '"http://localhost:8081/api/students"',
    PERSON_API: '"http://localhost:8081/api/persons"'
})