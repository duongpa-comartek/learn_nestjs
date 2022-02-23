const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const userRouter = require('./routes/users');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}))

//Http logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    return res.render('home');
});
app.get('/news', (req, res) => {
    return res.render('new');
});
app.get('/search', (req, res) => {
    return res.render('search');
})

//Router
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
