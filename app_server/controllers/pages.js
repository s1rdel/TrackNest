const axios = require('axios');

const register = (req, res) => {
  res.render('register', { title: 'TrackNest — Register' });
};

const login = (req, res) => {
  res.render('login', { title: 'TrackNest — Login' });
};


const library = async (req, res) => {
	try{

		const apiURL = process.env.API_URL || 'http://localhost:3000/api/items';

		const response = await axios.get(apiURL);
		const items = response.data;

		res.render('library', { 
		title: 'TrackNest — My Library',
		pageHeader: { title: 'My Library', strapline: 'Your saved tracks, albums and notes'  },
		items
		});
	} catch (err) {
		console.error('Error calling API:', err);
		res.render('library', { 
		title: 'TrackNest — My Library',
		pageHeader: { title: 'My Library', strapline: 'Your saved tracks, albums and notes'  },
		items: []
		});
	}
};

module.exports = { register, login, library };
