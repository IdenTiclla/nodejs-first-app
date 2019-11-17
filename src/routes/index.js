const express = require("express");
const router = express.Router();

// routes
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    const users = [{name:"Jhon"}, {name:"Therry"}]
    res.render('index.html',{users:users});
});

router.get('/contact', (req, res) => {
    const users = [{name:"Jhon"}, {name:"Therry"}]
    res.render('contact.html',{title: 'Contact page'});
});

module.exports = router;