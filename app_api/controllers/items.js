const mongoose = require('mongoose');
const Item = mongoose.model('Item');

const itemsList = async (req, res) => {
    try{
        const items = await Item.find({}).lean();
        res
            .status(200)
            .json(items);
    } catch (err) {
        console.error('Error retrieving items via API', err);
        res
            .status(500)
            .json({ message: 'Error retreiving items ', error: err.message });
    }
};

module.exports = { itemsList };
