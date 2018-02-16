const express = require('express'),
    bodyParser = reqiure('body-parser'),
    massive = require('massive');

const connectionString = 'postgres://kinxplusjkyoyx:9919eb27ccf9bba50bfe22c969f834d924ea539df9e4b87573eff9f2098ef12f@ec2-54-221-234-62.compute-1.amazonaws.com:5432/d3dp9dslk20c9v?ssl=true';


const app = express();
app.use(bodyParser.json());

const port = 3005;


