const fs = require('fs');
const markdown = require('marky-markdown');
var doc_data = fs.readFileSync(__dirname + '/../data/doc.md', 'utf-8');
var doc = markdown(doc_data).html();

const express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'app/views');

app.get('/', function(req, res){
  res.render('page', {content: doc});
});

module.exports = app;
