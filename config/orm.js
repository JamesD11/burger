var connection = require('./connection.js');

var tableName= 'burger';


var orm = {
    selectAll: function(cb) {
        var s = 'SELECT * FROM ' + tableName + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(nameInput, devourInput, cb) {
    	var s = 'INSERT INTO ' + tableName + ' (burger_name, devoured) VALUES (?, ?)';
	  	connection.query(s, [nameInput, devourInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    updateOne: function( colInput, idInput, cb) {
    	var s = 'UPDATE ' + tableName + ' SET devoured = ? WHERE id = ?';
     	connection.query(s, [colInput, idInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
    }
};

module.exports = orm;