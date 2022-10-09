const express = require('express');
const app = express();
port = 3000;

app.use(express.static('public'));

/*
app.get('/', (req,res) => {
    res.render('hello.ejs');
});
*/

app.get('/', (req,res) => {
    res.render('top.ejs');
});

app.get('/index', (req,res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('listen: ' + port);
});
