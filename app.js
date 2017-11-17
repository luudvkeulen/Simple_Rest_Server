const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/api/', (req, res) => res.send("Hello world"));

app.get('/api/test', (req, res) => res.send("Test ok"));

app.listen(port, () => console.log("Server started on ", port));