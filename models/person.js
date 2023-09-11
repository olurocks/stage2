const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Person = sequelize.define('Person', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Person