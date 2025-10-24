const mongoose = require('mongoose');
mongoose.set('debug', true); // log queries
mongoose.connection.once('open', () => {
  console.log('Connected DB name:', mongoose.connection.name);
});
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://s1rdel:12345@cluster0.oc08hmu.mongodb.net/tracknest?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, {})
   .then(() => console.log('Mongoose connected'))
   .catch(err => console.log('Mongo connection error:', err));
   
   
require('./item');
require('./user');
