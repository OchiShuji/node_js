const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host:'localhost',
    user:'listapp',
    password:'listapp',
    database:'list_app'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

/*
app.get('/', (req,res) => {
    res.render('hello.ejs');
});
*/

app.get('/', (req,res) => {
    res.render('top.ejs');
});

app.get('/index', (req,res) => {
    connection.query(
        'SELECT * FROM items',
        (error,results) => {
            res.render('index.ejs',{items:results});
        }
    );
});

app.get('/new', (req,res) => {
    res.render('new.ejs');
});

app.post('/create', (req,res) => {
    connection.query(
        'INSERT INTO items(name) VALUES (?)',
        [req.body.itemName],
        (error,results) => {
            res.redirect('/index');
        }
    );
});

app.listen(port, ()=>{
    console.log('listen:' + port);
});
