var connection = require('./connection.js');

var tableName= 'burger';


var orm = {
    burgerAll: function(cb) {
        var s = 'SELECT * FROM ' + tableName + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    newBurger: function(burger,cb) {
    	var s = 'INSERT INTO ' + tableName + ' (burger_name, devoured) VALUES (?, ?)';
	  	connection.query(s, [burger, false], function(err, result) {
			if (err) throw err;
			cb();
		});
    },
    eatBurger: function( id, cb) {
    	var s = 'UPDATE ' + tableName + ' SET devoured = 1 WHERE id = ?';
     	connection.query(s, [id], function(err, result) {
			if (err) throw err;
			cb();
		});
    }
};

module.exports = orm;
