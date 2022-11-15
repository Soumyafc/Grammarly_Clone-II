const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');



//use it before views
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
//extract style and script from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use route
app.use('/',require('./routes/routeindex'))
app.use(express.static("./asset"));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function (err) {
    if (err)
    {
        console.error(`Error: ${err}`)
    }
    console.log('Server is working fine on port 8000')
});

app.post('/texteditor/save-document', (req, res) => {
    
    if (req.body.title === '')
    {
        req.body.title = 'Untitled Document';    
    }
    console.log(req.body.title);
    console.log(req.body.document);
    res.redirect('back');

})