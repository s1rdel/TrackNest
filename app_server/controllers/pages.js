const register = (req, res) => {
  res.render('register', { title: 'TrackNest — Register' });
};
const login = (req, res) => {
  res.render('login', { title: 'TrackNest — Login' });
};
const library = (req, res) => {
  res.render('library', { title: 'TrackNest — My Library' });
};

module.exports = { register, login, library };
