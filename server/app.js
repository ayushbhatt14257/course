require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require('mongoose');
require("./db/connection")
    // const cookieParser = require("cookie-parser");
const path = require('path');


const Products = require("./models/productsSchema");
const DefalutData = require("./defalutdata");
const cors = require('cors');
const router = require("./routes/router");


app.use(express.json());
// app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port = process.env.PORT;

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/client/build/index.html'))
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

DefalutData();