const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const bodyParser = require('body-parser');
const request = require('request');


router.get('/', (req, res) => {

    const title = 'seefilm';
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=52355b2a478c82d6bfe5a57afff6c916&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    
    request(url, function (error, response, body) {
        movieRes = JSON.parse(body);

        movieRes.results.forEach(e => {
          //limit overview to 103 chars
          e.overview = e.overview.substring(0, 100) + '...';
        });

        console.log(movieRes);

        res.render('browse', {
          'all-data': movieRes,
          'movies': movieRes.results,
          'imageUrl': 'http://image.tmdb.org/t/p/w185/'
        });
       
    });
    
      
  });
  module.exports = router;
