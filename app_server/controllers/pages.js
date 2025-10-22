const register = (req, res) => {
  res.render('register', { title: 'TrackNest — Register' });
};
const login = (req, res) => {
  res.render('login', { title: 'TrackNest — Login' });
};

const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const library = async (req, res) => {
	try{
		const items = await Item.find({}).lean();
		res.render('library', { 
		title: 'TrackNest — My Library',
		pageHeader: { title: 'My Library', strapline: 'Your saved tracks, albums and notes'  },
		items
		});
	} catch (err) {
		console.error('Error loading items', err);
		res.render('library', { 
		title: 'TrackNest — My Library',
		pageHeader: { title: 'My Library', strapline: 'Your saved tracks, albums and notes'  },
		items: []
		});
	}
};

module.exports = { register, login, library };
