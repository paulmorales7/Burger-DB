var connection = require("../config/connection.js");

var orm = {
    selectAll: function (whatToSelect, table, cb) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, table], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    insertOne: function (whatToInsert, table, cb) {
        var queryString = "INSERT ?? INTO ??";
        connection.query(queryString, [whatToInsert, table], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [table, objColVals, condition], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }
};

module.exports = orm;