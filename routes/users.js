const express = require("express");
const router = express.Router();
const userDB = require("../models/userDB");

router.get("/", function (req, res) {
    res.render("../views/addUsers.ejs")
});

router.post("/", function (req, res) {
    userDB.addUser(req.body, function (data) {
        console.log(data);
        res.redirect("/");
    });
});

router.post("/:id/delete", function (req, res) {
    const userID = req.params.id;

    userDB.deleteUser(userID, function (data){
        console.log("Deleted " + data + " from database.");
        res.redirect("/");
    });
});

module.exports = router;
