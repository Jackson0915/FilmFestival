require('dotenv').config();
const express = require('express');
const mongoConnection = require('./mongoConnection');
const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.use('/', router);

mongoConnection.mongoConnection()
    .then( () => {
        app.listen(PORT, () => {
            app.get('/', (req, res) => {
                res.send('test');
            })
        })
    })
    .catch((error), () => {
        console.log(`There was an error establishing a connection server.js 16: (${error})`);
    })