const express = require('express');
const userDB = require('./models/userDB');
const users = require('./routes/users.js');

const app = express();
const PORT = 3000;

// ** Middleware **
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/users", users);


// ** Routes ***
app.get("/", function (req, res) {
    userDB.getUsers(function (data) {
        console.log(data);
        res.render("manageUsers", { users: data });
    });
});

app.listen(PORT, function () {
    console.log(`Listening on Port: ${PORT}`);
});
