'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('messageTemp', {
        name: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        code: {
            type: DataTypes.STRING,
            defaultValue: ''
        }, 
        pars: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        remark: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
    });
}
