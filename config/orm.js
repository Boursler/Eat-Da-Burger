var connection = require("./connection.js");
// selectAll()
// insertOne()
// updateOne()
var orm = {

	selectAll: function (select, table) {
		var query = "SELECT ?? FROM ??";
		connection.query(query, [select, table], function (err, data) {
			if (err) throw err;
			handle(data);
		});
	},
	insertOne: function (table, valuesToInsert) {
		var query = "INSERT INTO ?? VALUES (burger_name)(?)";
		connection.query(query, [table, valuesToInsert], function (err, data) {
			if (err) throw err;
			handle(data);
		})
	},
	updateOne: function (table, inputCol, inputVal, filterCol, filter) {
		var query = "UPDATE ?? SET ??=? WHERE ??=?";
	}

}

module.exports = orm;
