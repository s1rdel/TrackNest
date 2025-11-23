const axios = require('axios');
const User = require('../models/user');
const passport = require('passport');

const register = (req, res) => {
  res.render('register', { title: 'TrackNest — Register' });
};

const login = (req, res) => {
  res.render('login', { title: 'TrackNest — Login', error: null });
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

const registerPost = async (req, res) => {
  try{
    console.log('Register body:', req.body);
    const { email, name, phone, address } = req.body;
    let { password } = req.body;

    if(Array.isArray(password)) {
      console.log('Password is array, taking first element');
      password = password[0];
    }

    if (!password || !email) {
      throw new Error('Email and password are required');
    }

    const createdUser = await User.register(
      new User({ email, name, phone, address }), 
      password
    );

    console.log('Created user: ', createdUser);

    res.redirect('/login');

  } catch (err) {
    let msg = err.message;

    if (err.name === 'UserExisstsError') {
      msg = 'A user with this email already exists.';
    }

    res.render('register', {
      title: "TrackNest - Register",
      error: msg
    });
  }
};

const loginPost = (req, res, next) =>{
  passport.authenticate('local', (err, user, info) => {

    if (err) {
      console.log("Login error:", err);
      return res.render('login', {
        title: 'TrackNest - Login',
        error: 'Authentication error.'
      });
    }
    if (!user) {
        return res.render('login', {
          title: 'TrackNest - Login',
          error: 'Authentication error.'
      });
    }

    req.login(user, (err) => {
      if (err) {
        return res.render('login', {
          title: 'TrackNest - Login',
          error: 'Authentication error.'
      });
    }
      return res.redirect('/library');

    });

  
  })(req, res, next);
};


module.exports = { register, login, library, home, registerPost, loginPost };
