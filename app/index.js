const fs = require('fs');
const markdown = require('marky-markdown');
const mansplain = require('./lib/mansplain');

var doc_data = fs.readFileSync(__dirname + '/../data/doc.md', 'utf-8');
var doc_html = markdown(doc_data).html();
var doc = mansplain("<li>npm-config(5)</li>");

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
