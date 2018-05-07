var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
	burger.showAll(function (data) {
		var burgersObj = {
			burgers: data
		};
		console.log(burgersObj);
		res.render("index", burgersObj);
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insert([req.body.burger_name], function (result) {
		// Send back the ID of the new quote
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function (req, res) {
	burger.update(req.body.id
		, function (result) {
			if (result.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		})


});

module.exports = router;
// var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
