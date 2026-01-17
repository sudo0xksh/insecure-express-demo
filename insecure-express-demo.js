const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let user = {
    username: "guest",
    isAdmin: false
};

app.post("/update", (req, res) => {
    Object.assign(user, req.body);
    res.send(user);
});

app.post("/calc", (req, res) => {
    let result = eval(req.body.code);
    res.send("Result: " + result);
});

app.listen(3000, () => {
    console.log("=========================================");
    console.log("Insecure Express Demo running on port 3000");
    console.log("Developed by sudo_0xksh");
    console.log("=========================================");
});
