var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
var textapi = new aylien({
        application_id: "67987145",
        application_key: "a403001647841a568a002f28a9d8f4fa"
    });
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// if the page was not found, return something meaningful
app.get('/test', function (req, res) {
    textapi.sentiment({
        'url': req.query.url
    }, function (err, result) {
        if (err === null) {
            res.send(result);
        } else {
            res.send({
                message: '404: URL was not found.',
                status: 404
            })
        }
    });
})
