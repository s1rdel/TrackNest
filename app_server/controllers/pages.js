const axios = require('axios');

const register = (req, res) => {
  res.render('register', { title: 'TrackNest — Register' });
};

const login = (req, res) => {
  res.render('login', { title: 'TrackNest — Login' });
};

const home = (req, res) => {
  res.redirect('/library');
};


const library = (req, res) => {
  res.render('library', { 
    title: 'TrackNest — My Library',
    pageHeader: { title: 'My Library', strapline: 'Your saved tracks, albums and notes' }
  });
};

module.exports = { register, login, library, home };
