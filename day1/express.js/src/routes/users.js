const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User list");
})

router.get("/new", (req, res) => {
    res.send("User new form");
})

router.post('/', (req, res) => {
    res.send('Create User');
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get user with id: ${JSON.stringify(req.user)}`);
    }).put((req, res) => {
        res.send(`Update user with id: ${req.params.id}`);
    }).delete((req, res) => {
        res.send(`Delete user with id: ${req.params.id}`);
    });

const users = [{ name: 'duong' }, { name: 'huong' }]
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})

module.exports = router;