const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/index.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send(`${process.env.TEST || "Express"}`);
})

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;