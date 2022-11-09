const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function (err) {
    if (err)
    {
        console.error(`Error: ${err}`)
    }
    console.log('Server is working fine on port 8000')
});