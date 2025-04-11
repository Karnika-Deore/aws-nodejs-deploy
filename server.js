const express = require("express");
const app = express();
require("dotenv").config();

app.get('/api/get', (req, res) => {
    res.send({ message: "hello back to nodejs" });
});

app.get('/api/get_user_details', (req, res) => {
    res.send({
        users: [
            {
                name: "karnika",
                age: 20,
                contact: 12254
            },
            {
                name: "gopikha",
                age: 20,
                contact: 345674
            },
            {
                name: "logitha",
                age: 19,
                contact: 87254
            }
        ],
        env: process.env.NAME
    });
});

app.listen(process.env.PORT, () => {
    console.log("listening to 8000");
});
