// We import the express libary
const express = require('express');
// Creating application object
const app = express();
const port = 3000;

// Importing budget data
const budgets = require("./models/budget");

//////////////////////////////////////////////
// MIDDLEWARE
//////////////////////////////////////////////
// Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// serve files statically from the public folder
app.use(express.static("public"));


//////////////////////////////////////////////
// ROUTES
//////////////////////////////////////////////
// Index (C)
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudgets: budgets, title: "Budgets - Index Page"});
});

// New
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs', {title: "New Page"});
});

// Create
app.post('/budgets', (req, res) => {
    budgets.push(req.body);
    res.redirect('/budgets');
});

// Show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budget: budgets[req.params.index], title: "Show Page"});
});


// Turns on the server at port 3000
app.listen(3000, () => {
    console.log('listening');
});
