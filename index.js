const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Azure Backend!");
});

app.listen(8080, () => console.log("Server running on port 3000"));
