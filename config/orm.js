var connection = require("./connection.js");
// selectAll()
// insertOne()
// updateOne()
var orm = {

	selectAll: function (table, handle) {
		var query = "SELECT * FROM ??";
		connection.query(query, [table], function (err, data) {
			if (err) throw err;
			handle(data);
		});
	},
	insertOne: function (table, valuesToInsert, handle) {
		var query = "INSERT INTO ?? (burger_name) VALUES (?)";
		connection.query(query, [table, valuesToInsert], function (err, data) {
			if (err) throw err;
			handle(data);
		})
	},
	updateOne: function (table, inputCol, inputVal, filterCol, filter, handle) {
		var query = "UPDATE ?? SET ??=? WHERE ??=?";
		connection.query(query, [table, inputCol, inputVal, filterCol, filter], function (err, data) {
			if (err) throw err;
			handle(data);
		});
	}

}

module.exports = orm;
