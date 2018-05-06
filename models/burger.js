var orm = require("../config/orm.js");
// create the code that will call the ORM functions using burger specific input for the ORM.
// selectAll() select, table
// insertOne() table, valuesToInsert
// updateOne() table, inputCol, inputVal, filterCol, filter
// all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
var burger = {
	showAll: function (handle) {
		orm.selectAll("burgers", function (data) {
			handle(data);
		});
	},
	insert: function (valuesToInsert, handle) {
		orm.insertOne("burgers", valuesToInsert, function (data) {
			handle(data);
		});
	},
	update: function (filter, handle) {
		orm.updateOne("burgers", "devoured", 1, "id", filter, function (data) {
			handle(data);
		})
	}
}

module.exports = burger;
