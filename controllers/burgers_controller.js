var express = require("express");
var burgerModel = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj)
    })
});

router.post("/api/burgers", function (req, res) {
    burgers.create(["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], function (result) {
            res.join({ id: result.insertId })
        })
});

router.put("/api/burgers/:id", function (req, res) {
    var idCondition = "id= " + req.params.id;

    console.log("condition", idCondition);

    burgers.update({
        devoured: req.body.devoured
    }, idCondition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;

