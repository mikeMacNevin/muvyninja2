const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const bodyParser = require('body-parser');
const request = require('request');

router.get('/', (req, res) => {
    const title = 'seefilm';

    res.render('index', {
    
      
    });
  });


module.exports = router;